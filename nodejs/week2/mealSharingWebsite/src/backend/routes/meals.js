const express = require("express");
const router = express.Router();

const meals = require("../data/meals.json");

router.get("/:id", function(req, res) {
  const id = Number(req.params.id);
  const result = meals.filter(meal => {
    return meal.id === id;
  });
  res.send(result);
});

router.get("/", function(req, res) {
  const { maxPrice = 9000 } = req.query;
  const { title = "" } = req.query;
  const { createdAfter = "1970-01-01" } = req.query;
  const { limit = meals.length } = req.query;

  const result = getCreatedAfter(splitDay(createdAfter))
    .filter(meal => {
      return meal.price <= Number(maxPrice);
    })
    .filter(meal => {
      return meal.title.includes(String(title));
    })
    .slice(0, limit);

  res.send(result);
});

function splitDay(time) {
  return {
    year: time.split("-")[0],
    month: time.split("-")[1],
    day: time.split("-")[2]
  };
}

function getCreatedAfter(createdAfter) {
  return meals.filter(meal => {
    if (createdAfter.year < splitDay(meal.createdAt).year) {
      return meal;
    } else if (
      createdAfter.year === splitDay(meal.createdAt).year &&
      createdAfter.month < splitDay(meal.createdAt).month
    ) {
      return meal;
    } else if (
      createdAfter.year === splitDay(meal.createdAt).year &&
      createdAfter.month === splitDay(meal.createdAt).month &&
      createdAfter.day < splitDay(meal.createdAt).day
    ) {
      return meal;
    }
  });
}

module.exports = router;
