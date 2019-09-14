const express = require("express");
const router = express.Router();

const reviews = require("../data/reviews.json");
router.get("/reviews/:id", function(req, res) {
    const id = Number(req.params.id);
    const result = reviews.filter(review => {
      return review.mealId === id;
    });
    res.send(result);
  });
router.get("/reviews", function(req, res) {
 res.json(reviews);
});

module.exports = router;
