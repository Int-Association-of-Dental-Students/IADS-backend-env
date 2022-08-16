const express = require("express");
const WebUser = require("../model/WebUser");
const PressRelease = require("../model/Committees/Internal/PressRelease");
const router = express.Router();

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const HttpError = require("../middleware/http-error");
const checkAuth = require("../middleware/check-auth");

const OrganizationalMember = require("../model/OrganizationalMember");

// Get the press release routes
router.get("/Committees/Internal/PressRelease", async (req, res) => {
  console.log("PressRelease");

  try {
    const pressReleasex = await PressRelease.find();

    res.send(pressReleasex);
  } catch (error) {
    res.send(error);
  }
});

// Add Press Release Card
router.post("/Committees/Internal/PressRelease", async (req, res) => {
  try {
    const pressReleaseCard = new PressReleaseCard({
      title: req.body.title,
    });
    await pressReleaseCard.save();
    res.send(pressReleaseCard);
  } catch (error) {
    res.send(error);
  }
});





module.exports = router;
