const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pressReleaseSchema = new Schema({
  title: String,
  date: Date.UTC,
  image: String,
  description: String,
  link: String,
});

module.exports = mongoose.model("PressRelease", pressReleaseSchema);
