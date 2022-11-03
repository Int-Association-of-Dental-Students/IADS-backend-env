const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orgMemberSchema = new Schema({
  fullname: { type: String, required: true },
  fullnameNat: { type: String, required: true },
  abbreviatedName: { type: String, required: true },
  country: { type: String, required: true },
  city: { type: String, required: true },
  address: { type: String, required: true },
  postalCode: { type: Number, required: true },
  faxNumber: { type: Number, required: true },
  phone: {
    // code: { type: String, required: true },
    number: { type: Number, required: true },
  },

  website: { type: String, required: true },
  dateOfEstablishment: { type: Date, required: true },

  numOfMemberSchools: { type: Number, required: true },
  namesOfMemberSchools: { type: String },
  numOfMemberStudents: { type: Number, required: true },

  requestedMembershipType: { type: String, required: true },
  listOfSchools: { type: String, required: true },

  president: {
    name: { type: String, required: true },
    email: { type: String, required: true },
  },
  secretary: {
    name: { type: String, required: true },
    email: { type: String, required: true },
  },
  treasurer: {
    name: { type: String, required: true },
    email: { type: String, required: true },
  },
  editor: {
    name: { type: String, required: true },
    email: { type: String, required: true },
  },
  exchangeOfficer: {
    name: { type: String, required: true },
    email: { type: String, required: true },
  },
  scientificOfficer: {
    name: { type: String, required: true },
    email: { type: String, required: true },
  },
  trainingOfficer: {
    name: { type: String, required: true },
    email: { type: String, required: true },
  },
  voluntaryOfficer: {
    name: { type: String, required: true },
    email: { type: String, required: true },
  },
  delegate1: {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    whatsapp: { type: String, required: true },
  },
  delegate2: {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    whatsapp: { type: String, required: true },
  },

  validation: { type: Boolean },

  letter: { type: String, required: true },
  logo: { type: String, required: true },
  flag: { type: String, required: true },

  // delegate1: { type: mongoose.Types.ObjectId, ref: "WebUser" },
});

module.exports = mongoose.model("OrgMember", orgMemberSchema);
