const Author = require("../models/author");

// Display list of all Authors.
exports.author_list = function (req, res) {
  res.send("NOT IMPLEMENTED YET: Author list");
};

// Display detaul page for a specific Author.
exports.author_detail = function (req, res) {
  res.send("NOT IMPLEMENTED YET: Author detail: " + req.params.id);
};

// Display Author create form on GET
exports.author_create_get = function (req, res) {
  res.send("NOT IMPLEMENTED YET: Author create GET");
};

// Handle Author create POST
exports.author_create_post = function (req, res) {
  res.send("NOT IMPLEMENTED YET: Author create POST");
};

// Display Author delete form on GET
exports.author_delete_get = function (req, res) {
  res.send("NOT IMPLEMENTED YET: Author delete GET");
};

// Handle Author delete POST
exports.author_delete_post = function (req, res) {
  res.send("NOT IMPLEMENTED YET: Author delete POST");
};

// Display Author update form on GET
exports.autor_update_get = function (req, res) {
  res.send("NOT IMPLEMENTED YET: Author update GET");
};

// Handle Author delete on POST
exports.author_update_post = function (req, res) {
  res.send('NOT IMPLEMENTED YET: Author update POST')
}