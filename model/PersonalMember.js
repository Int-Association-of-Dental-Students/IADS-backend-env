const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const personalMemberSchema = new Schema({
  fullname: { type: String, required: true },
  gender: { type: String, required: true },
  country: { type: String, required: true },
  city: { type: String, required: true },
  address: { type: String, required: true },
  postalCode: { type: Number, required: true },
  university: { type: String, required: true },
  phoneNumber: { type: Number, required: true },
  whatsappNumber: { type: Number },
  faceBook: { type: Number },
  howHeard: { type: String },
  yearOfGraduation: { type: Number, required: true },

  validation: { type: Boolean }



});

module.exports = mongoose.model("PersonalMember", personalMemberSchema);
