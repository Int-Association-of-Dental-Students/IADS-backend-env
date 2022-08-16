const express = require("express");
const Publication = require("../../../model/Committees/SCORE/Publication");
const router = express.Router();
const HttpError=require("../../../middleware/http-error")

// Post publications card
router.post("/Committees/SCORE/Publications", async (req, res, next) => {
  try {
    const publicationCard = new Publication({
      title: req.body.title,
      date: req.body.date,
      image: req.body.image,
      description: req.body.description,
      link: req.body.link,
    });
    await publicationCard.save();
    res.send(publicationCard);
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not add post",
      500
    );
    console.log(err);
    return next(error);
  }
  res
    .status(200)
    .json({ publicationCard: publicationCard.toObject({ getters: true }) });
});

// Get publications cards
router.get("/Committees/SCORE/Publications", async (req, res, next) => {
  try {
    const publications = await Publication.find();

    res.send(publications);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
