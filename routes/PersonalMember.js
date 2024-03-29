const express = require("express");
const WebUser = require("../model/WebUser");
const PersonalMember = require("../model/PersonalMember");
const router = express.Router();

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const HttpError = require("../middleware/http-error");
const checkAuth = require("../middleware/check-auth");

// Get all personal members
router.get("/", async (req, res) => {
  const personalmember = await PersonalMember.find();
  res.send(personalmember);
});

// Delete Personal Member
router.post("/deleteMember/:id", async (req, res, next) => {
  const id = req.params.id;
  // console.log(id);

  try {
    await PersonalMember.findByIdAndDelete(id);
  } catch (err) {
    const error = new HttpError(
      "Deleting member failed, please try again later.",
      500
    );
    return next(error);
  }

  res.status(201);
});

// Update personal member verification
router.post("/updateVerification/:id/:bool", async (req, res, next) => {
  const id = req.params.id;
  const bool = req.params.bool;
  console.log(id);
  console.log(bool);

  let existingPersonalMember;
  try {
    existingPersonalMember = await PersonalMember.findById(id);
  } catch (err) {
    const error = new HttpError(
      "Updating personal member failed, please try again later.",
      500
    );
    return next(error);
  }

  if (!existingPersonalMember) {
    const error = new HttpError("PersonalMember does not exist", 401);
    return next(error);
  }

  try {
    if (bool == "true") {
      existingPersonalMember.validation = true;
    } else if (bool == "false") {
      existingPersonalMember.validation = false;
    } else {
      console.log(bool);
      const error = new HttpError(
        "Could not update member, please try again.",
        500
      );
      return next(error);
    }
    console.log(existingPersonalMember);
    await existingPersonalMember.save();
  } catch (err) {
    console.log("error");
    const error = new HttpError(
      "Could not update member, please try again.",
      500
    );
    console.log(err);
    return next(error);
  }
  console.log("existingPersonalMember");

  res.status(201).json({ user: existingPersonalMember });
});

// Create a new personal member
router.post("/create", async (req, res, next) => {
  let {
    fullname,
    gender,
    university,
    country,
    city,
    address,
    postalCode,

    phoneNumber,
    whatsappNumber,
    faceBook,
    email,
    yearOfGraduation,

    howHeard,
    validation,
    curriculum,
    motivational,
    studentship,
  } = req.body.data;

  console.log(req.body.data);

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
    createdMember = new PersonalMember({
      fullname,
      gender,
      university,
      country,
      city,
      address,
      postalCode,
      email,
      phoneNumber,
      whatsappNumber,
      faceBook,
      yearOfGraduation,

      howHeard,
      validation: false,
      curriculum,
      motivational,
      studentship,
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

module.exports = router;
