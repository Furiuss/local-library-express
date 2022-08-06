const Book = require("../models/book");
const Author = require("../models/author");
const Genre = require("../models/genre");
const BookInstance = require("../models/bookInstance");
const { body, validationResult } = require("express-validation");

const async = require("async");

exports.index = function (req, res) {
  async.parallel(
    {
      book_count(callback) {
        Book.countDocuments({}, callback);
      },
      book_instance_counter(callback) {
        BookInstance.countDocuments({}, callback);
      },
      book_instance_available_count(callback) {
        BookInstance.countDocuments({ status: "Available" }, callback);
      },
      author_count(callback) {
        Author.countDocuments({}, callback);
      },
      genre_count(callback) {
        Genre.countDocuments({}, callback);
      },
    },
    function (err, results) {
      res.render("index", {
        title: "Local Library Home",
        error: err,
        data: results,
      });
    }
  );
};

// Display list of all books.
exports.book_list = function (req, res) {
  res.send("NOT IMPLEMENTED YET: book list");
};

// Display detaul page for a specific book.
exports.book_detail = function (req, res) {
  res.send("NOT IMPLEMENTED YET: book detail: " + req.params.id);
};

// Display book create form on GET
exports.book_create_get = function (req, res, next) {
  async.parallel({
    authors(callback) {
      Author.find(callback);
    },
    genres(callback) {
      Genre.find(callback);
    },
    function(err, results) {
      if (err) return next(err);
      res.render("book_form", {
        title: "Create Book",
        authors: results.authors,
        genres: results.genres,
      });
    },
  });
};

// Handle book create POST
exports.book_create_post = [
  body("title", "Title must not be empty").trim().isLength({ min: 1 }).escape(),
  body("author", "Author must not be empty")
    .trim()
    .isLength({ min: 1 })
    .escape(),
  body("summary", "Summary must not be empty")
    .trim()
    .isLength({ min: 1 })
    .escape(),
  body("isbn", "ISBN must not be empty").trim().isLength({ min: 1 }).escape(),
  body("genre.*").escape(),

  (req, res, next) => {
    const errors = validationResult(req);

    const book = new Book({
      title: req.body.title,
      author: req.body.author,
      summary: req.body.summary,
      isbn: req.body.isbn,
      genre: req.body.genre,
    });

    if (!errors.isEmpty()) {
      async.parallel(
        {
          authors(callback) {
            Author.find(callback);
          },
          genres(callback) {
            Genre.find(callback);
          },
        },
        function (err, results) {
          if (err) return next(err);

          for (let i = 0; i < results.length; i++) {
            if (book.genre.indexOf(results.genres[i]._id > -1)) {
              results.genres[i].checked = "true";
            }
          }
          res.render("book_form", {
            title: "Create Book",
            authors: results.authors,
            genres: results.genres,
            book,
            errors: errors.array(),
          });
          return;
        }
      );
    } else {
      book.save((err) => {
        res.redirect(book.url);
      });
    }
  },
];

// Display book delete form on GET
exports.book_delete_get = function (req, res) {
  res.send("NOT IMPLEMENTED YET: book delete GET");
};

// Handle book delete POST
exports.book_delete_post = function (req, res) {
  res.send("NOT IMPLEMENTED YET: book delete POST");
};

// Display book update form on GET
exports.book_update_get = function (req, res) {
  res.send("NOT IMPLEMENTED YET: book update GET");
};

// Handle book delete on POST
exports.book_update_post = function (req, res) {
  res.send("NOT IMPLEMENTED YET: book update POST");
};
