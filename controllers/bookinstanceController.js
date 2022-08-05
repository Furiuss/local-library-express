const BookInstance = require("../models/bookInstance");

// Display list of all bookInstances.
exports.bookInstance_list = function (req, res) {
  res.send("NOT IMPLEMENTED YET: bookInstance list");
};

// Display detaul page for a specific bookInstance.
exports.bookInstance_detail = function (req, res) {
  res.send("NOT IMPLEMENTED YET: bookInstance detail: " + req.params.id);
};

// Display bookInstance create form on GET
exports.bookInstance_create_get = function (req, res) {
  res.send("NOT IMPLEMENTED YET: bookInstance create GET");
};

// Handle bookInstance create POST
exports.bookInstance_create_post = function (req, res) {
  res.send("NOT IMPLEMENTED YET: bookInstance create POST");
};

// Display bookInstance delete form on GET
exports.bookInstance_delete_get = function (req, res) {
  res.send("NOT IMPLEMENTED YET: bookInstance delete GET");
};

// Handle bookInstance delete POST
exports.bookInstance_delete_post = function (req, res) {
  res.send("NOT IMPLEMENTED YET: bookInstance delete POST");
};

// Display bookInstance update form on GET
exports.bookInstance_update_get = function (req, res) {
  res.send("NOT IMPLEMENTED YET: bookInstance update GET");
};

// Handle bookInstance delete on POST
exports.bookInstance_update_post = function (req, res) {
  res.send('NOT IMPLEMENTED YET: bookInstance update POST')
}