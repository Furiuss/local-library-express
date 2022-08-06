const Genre = require("../models/genre");
const { body, validationResult } = require("express-validator");

// Display list of all genres.
exports.genre_list = function (req, res) {
  res.send("NOT IMPLEMENTED YET: genre list");
};

// Display detaul page for a specific genre.
exports.genre_detail = function (req, res) {
  res.send("NOT IMPLEMENTED YET: genre detail: " + req.params.id);
};

// Display genre create form on GET
exports.genre_create_get = function (req, res) {
  res.render("genre_form", { title: "Create Genre" });
};

// Handle genre create POST
exports.genre_create_post = [
  body("name", "Genre name required").trim().isLength({ min: 1 }).escape(),

  (req, res, next) => {
    const errors = validationResult(req);
    const genre = new Genre({ name: req.body.name });

    if (!errors.isEmpty()) {
      res.render("genre_form", {
        title: "Create Genre",
        genre,
        errors: errors.array(),
      });
      return;
    } else {
      Genre.findOne({ name: req.body.name }).exec((err, found_genre) => {
        if (err) return next(err);

        if (found_genre) {
          res.redirect(found_genre.url);
        } else {
          genre.save((err) => {
            if (err) return next(err);

            res.redirect(genre.url);
          });
        }
      });
    }
  },
];

// Display genre delete form on GET
exports.genre_delete_get = function (req, res) {
  res.send("NOT IMPLEMENTED YET: genre delete GET");
};

// Handle genre delete POST
exports.genre_delete_post = function (req, res) {
  res.send("NOT IMPLEMENTED YET: genre delete POST");
};

// Display genre update form on GET
exports.genre_update_get = function (req, res) {
  res.send("NOT IMPLEMENTED YET: genre update GET");
};

// Handle genre delete on POST
exports.genre_update_post = function (req, res) {
  res.send("NOT IMPLEMENTED YET: genre update POST");
};
