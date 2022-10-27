const express = require("express");
const WebUser = require("../model/WebUser");
const OrgMember = require("../model/OrganizationalMember");
const router = express.Router();

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const HttpError = require("../middleware/http-error");
const checkAuth = require("../middleware/check-auth");

// Get all organizational members
router.get("/", async (req, res) => {
  const orgmembers = await OrgMember.find();
  res.send(orgmembers);
});

// Create a new organizational member
router.post("/create", async (req, res, next) => {
  let {
    fullname,
    fullnameNat,
    abbreviatedName,
    country,
    city,
    address,
    postalCode,
    faxNumber,
    phone,
    website,
    dateOfEstablishment,

    numOfMemberSchools,
    namesOfMemberSchools,
    numOfMemberStudents,

    requestedMembershipType,
    president,
    secretary,
    treasurer,
    editor,
    exchangeOfficer,
    scientificOfficer,
    trainingOfficer,
    voluntaryOfficer,
    delegate1,
    delegate2,
    letter,
    logo,
    flag,
  } = req.body;

  console.log(req.body);

  // try {
  //     user = await OrgMember.findById(req.userData.userId);
  //   } catch (err) {
  //     const error = new HttpError(
  //       "Something went wrong, please try again.",
  //       500
  //     );
  //     return next(error);
  //   }

  //   if (!user) {
  //     const error = new HttpError(
  //       "Something went wrong, please try again.",
  //       500
  //     );
  //     return next(error);
  //   }

  // let existingUsers = [];
  // try {
  //     existingUsers.push(
  //         await OrgMember.findOne({
  //             country: country,
  //         })
  //     );

  //     existingUsers.push(
  //         await WebUser.findOne({
  //             fullname: fullname,
  //         })
  //     );

  // } catch (err) {
  //     const error = new HttpError(
  //         "Creating member failed, please try again later.",
  //         500
  //     );
  //     return next(error);
  // }

  // existingUsers = existingUsers.filter((item) => item !== null);
  // console.log(username)
  // console.log(existingUsers)
  // if (existingUsers.length > 0) {
  //     const error = new HttpError(
  //         "Organizational member already exists, please try again.",
  //         422
  //     );
  //     return next(error);
  // }

  let createdMember;

  console.log("3");

  try {
    createdMember = new OrgMember({
      fullname,
      fullnameNat,
      abbreviatedName,
      country,
      city,
      address,
      postalCode,
      faxNumber,
      phone,
      website,
      dateOfEstablishment,

      numOfMemberSchools,
      namesOfMemberSchools,
      numOfMemberStudents,

      requestedMembershipType,
      president,
      secretary,
      treasurer,
      editor,
      exchangeOfficer,
      scientificOfficer,
      trainingOfficer,
      voluntaryOfficer,
      delegate1,
      delegate2,
      validation: false,
      letter,
      logo,
      flag,
      // delegate1: req.userData.userId
    });
    await createdMember.save();
  } catch (err) {
    console.log(err);
    const error = new HttpError(
      "Creating member failed, please try again.",
      500
    );
    return next(error);
  }

  res.status(201).json({ member: createdMember });
});

// Update org member verification
router.post("/updateVerification/:id/:bool", async (req, res, next) => {
  const id = req.params.id;
  const bool = req.params.bool;
  console.log(id);
  console.log(bool);

  let existingOrgMember;
  try {
    existingOrgMember = await OrgMember.findById(id);
  } catch (err) {
    const error = new HttpError(
      "Updating org member failed, please try again later.",
      500
    );
    return next(error);
  }

  if (!existingOrgMember) {
    const error = new HttpError("OrgMember does not exist", 401);
    return next(error);
  }

  try {
    if (bool == "true") {
      existingOrgMember.validation = true;
    } else if (bool == "false") {
      existingOrgMember.validation = false;
    } else {
      console.log(bool);
      const error = new HttpError(
        "Could not update user, please try again.",
        500
      );
      return next(error);
    }
    console.log(existingOrgMember);
    await existingOrgMember.save();
  } catch (err) {
    console.log("error");
    const error = new HttpError(
      "Could not update member, please try again.",
      500
    );
    console.log(err);
    return next(error);
  }
  console.log("existingOrgMember");

  res.status(201).json({ user: existingOrgMember });
});

// Delete Org Member
router.post("/deleteMember/:id", async (req, res, next) => {
  const id = req.params.id;
  // console.log(id);

  try {
    await OrgMember.findByIdAndDelete(id);
  } catch (err) {
    const error = new HttpError(
      "Deleting member failed, please try again later.",
      500
    );
    return next(error);
  }

  res.status(201);
});

module.exports = router;
