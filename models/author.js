const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Schema for author model
const AuthorSchema = new Schema({
  first_name: { type: String, required: true, max: 100 },
  family_name: { type: String, required: true, max: 100 },
  date_of_birth: { type: Date },
  date_of_death: { type: Date },
});

// Virtual for author's full name
AuthorSchema.virtual("name").get(() => {
  return this.family_name + ", " + this.first_name;
});

// Virtual for author's lifespan
AuthorSchema.virtual("lifespan").get(() => {
  return (
    this.date_of_birth.getYear() - this.day_of_death.getYear()
  ).toString();
});

// Virtual for author's URL
AuthorSchema.virtual("url").get(() => {
  return "/catalog/author/" + this.__id;
});

// export model
module.exports = mongoose.model("Author", AuthorSchema);
