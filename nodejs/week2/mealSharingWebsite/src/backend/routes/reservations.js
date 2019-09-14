const express = require("express");
const router = express.Router();

const reservations = require("../data/reservations.json");

router.get("/reservations/:id", function(req, res) {
  const id = Number(req.params.id);
  const result = reservations.filter(reservation => {
    return reservation.mealId === id;
  });
  res.send(result);
});

router.get("/reservations", function(req, res) {
  res.send(reservations);
});

module.exports = router;
