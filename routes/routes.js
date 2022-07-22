const express = require("express");
const WebUser = require("../model/WebUser");
const router = express.Router();

// Get all web users
router.get("/webUsers", async (req, res) => {
  const users = await WebUser.find();
  res.send(users);
});

router.post("/webUsers", async (req, res) => {
  try {
    const webUser = new WebUser({
      username: req.body.username,

      fullName: req.body.fullName,
      email: req.body.email,
      gender: req.body.gender,
      country: req.body.country,
      phone: req.body.phone,

      uni: req.body.uni,
      association: req.body.association,
      yearsOfStudy: req.body.yearsOfStudy,

      //bool
      delegate: req.body.delegate,

      gradYear: req.body.gradYear,

      //bool
      iadsEmployed: req.body.iadsEmployed,
      iadsMember: req.body.iadsMember,

      iadsPosition: req.body.iadsPosition,
      iadsEmail: req.body.iadsEmail,
    });

    await webUser.save();
    res.send(webUser);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
