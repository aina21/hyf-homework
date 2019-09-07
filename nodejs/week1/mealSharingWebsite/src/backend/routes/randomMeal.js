const express = require("express");
const fs = require("fs");
const router = express.Router();

const mealData = fs.readFileSync(__dirname + "/../data/meals.json");
const reservationData = fs.readFileSync(
  __dirname + "/../data/reservations.json"
);

const meals = JSON.parse(mealData);
const reservations = JSON.parse(reservationData);

router.get("/meal", function(req, res) {
  const randomMeal = meals[Math.floor(Math.random() * meals.length)];
  const result = checkReservation(randomMeal).map(reservation => {
    return {
      id: randomMeal.id,
      title: randomMeal.title,
      maxNumberOfGuests: randomMeal.maxNumberOfGuests,
      description: randomMeal.description,
      createdAt: randomMeal.createdAt,
      price: randomMeal.price,
      email: reservation.email
    };
  });
  res.send(result);
});

function checkReservation(meal) {
  return reservations.filter(reservation => {
    return reservation.mealId === meal.id;
  });
}

// function addEmails(meal) {
//     let data = JSON.stringify(result);
//     fs.writeFileSync(`/../data/${meal}.json`, data);
// }
module.exports = router;
