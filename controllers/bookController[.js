const Book = require("../models/book");

// Display list of all books.
exports.book_list = function (req, res) {
  res.send("NOT IMPLEMENTED YET: book list");
};

// Display detaul page for a specific book.
exports.book_detail = function (req, res) {
  res.send("NOT IMPLEMENTED YET: book detail: " + req.params.id);
};

// Display book create form on GET
exports.book_create_get = function (req, res) {
  res.send("NOT IMPLEMENTED YET: book create GET");
};

// Handle book create POST
exports.book_create_post = function (req, res) {
  res.send("NOT IMPLEMENTED YET: book create POST");
};

// Display book delete form on GET
exports.book_delete_get = function (req, res) {
  res.send("NOT IMPLEMENTED YET: book delete GET");
};

// Handle book delete POST
exports.book_delete_post = function (req, res) {
  res.send("NOT IMPLEMENTED YET: book delete POST");
};

// Display book update form on GET
exports.autor_update_get = function (req, res) {
  res.send("NOT IMPLEMENTED YET: book update GET");
};

// Handle book delete on POST
exports.book_update_post = function (req, res) {
  res.send('NOT IMPLEMENTED YET: book update POST')
}