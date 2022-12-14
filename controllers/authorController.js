const Author = require("../models/author");
const { body, validationResult } = require("express-validator");

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
  res.render("author_form", { title: "Create Author" });
};

// Handle Author create POST
// Handle Author create on POST.
exports.author_create_post = [
  // Validate and sanitize fields.
  body("first_name")
    .trim()
    .isLength({ min: 1 })
    .escape()
    .withMessage("First name must be specified.")
    .isAlphanumeric()
    .withMessage("First name has non-alphanumeric characters."),
  body("family_name")
    .trim()
    .isLength({ min: 1 })
    .escape()
    .withMessage("Family name must be specified.")
    .isAlphanumeric()
    .withMessage("Family name has non-alphanumeric characters."),
  body("date_of_birth", "Invalid date of birth")
    .optional({ checkFalsy: true })
    .isISO8601()
    .toDate(),
  body("date_of_death", "Invalid date of death")
    .optional({ checkFalsy: true })
    .isISO8601()
    .toDate(),

  // Process request after validation and sanitization.
  (req, res, next) => {
    // Extract the validation errors from a request.
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      // There are errors. Render form again with sanitized values/errors messages.
      res.render("author_form", {
        title: "Create Author",
        author: req.body,
        errors: errors.array(),
      });
      return;
    } else {
      // Data from form is valid.

      // Create an Author object with escaped and trimmed data.
      var author = new Author({
        first_name: req.body.first_name,
        family_name: req.body.family_name,
        date_of_birth: req.body.date_of_birth,
        date_of_death: req.body.date_of_death,
      });
      author.save(function (err) {
        if (err) {
          return next(err);
        }
        // Successful - redirect to new author record.
        res.redirect(author.url);
      });
    }
  },
];

// Display Author delete form on GET
exports.author_delete_get = function (req, res) {
  res.send("NOT IMPLEMENTED YET: Author delete GET");
};

// Handle Author delete POST
exports.author_delete_post = function (req, res) {
  res.send("NOT IMPLEMENTED YET: Author delete POST");
};

// Display Author update form on GET
exports.author_update_get = function (req, res) {
  res.send("NOT IMPLEMENTED YET: Author update GET");
};

// Handle Author delete on POST
exports.author_update_post = function (req, res) {
  res.send("NOT IMPLEMENTED YET: Author update POST");
};
