const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WebUserSchema = new Schema({
  username: String,
  fullName: String,
  email: String,
  gender: String,
  country: String,
  phone: String,

  uni: String,
  association: String,
  yearsOfStudy: Number,
  delegate: String,
  gradYear: Number,
  iadsEmployed: String,
  iadsMember: String,
  iadsPosition: String,
  iadsEmail: String,
});

module.exports = mongoose.model("WebUser", WebUserSchema);
