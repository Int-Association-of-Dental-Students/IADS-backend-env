const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orgMemberSchema = new Schema({
  region: String,
  country: String,
  associationName: String,
  fullname: String,
  abbr: String,
  membershipType: String,
  membershipStartDate: Date,
  membershipUpdateDate: Date,
  assiciationEmail: String,

  delegate1: {
    name: String,
    email: String,
    phone: String,
  },

  delegate2: {
    name: String,
    email: String,
    phone: String,
  },

  paymentStatus: bool,
});

module.exports = mongoose.model("OrgMember", orgMemberSchema);
