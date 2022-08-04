const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Schema for genre model
const GenreSchema = new Schema({
  name: { type: String, required: true, min: 3, max: 100 },
});

// Virtual for genre's URL
GenreSchema.virtual("url").get(() => {
  return "/catalog/genre/" + this.name;
});

// export model
module.exports = mongoose.model("Genre", GenreSchema);