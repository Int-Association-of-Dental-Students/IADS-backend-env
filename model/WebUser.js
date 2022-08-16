const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WebUserSchema = new Schema({
  username: String,
  fullName: String,
  email: String,
  gender: String,
  country: String,
  phone: String,
  password: String,

  uni: String,
  association: String,
  yearsOfStudy: Number,
  delegate: String,
  gradYear: Number,
  iadsEmployed: Boolean,
  iadsMember: Boolean,
  iadsPosition: String,
  iadsEmail: String,
  validation: Boolean

});


//vendor: { type: mongoose.Types.ObjectId, ref: "Vendor" },

module.exports = mongoose.model("WebUser", WebUserSchema);
