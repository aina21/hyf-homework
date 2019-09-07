var express = require("express");
var app = express();

const meals = require("./routes/meals.js");
const cheapMeals = require("./routes/cheapMeals.js");
const largeMeals = require("./routes/largeMeals.js");
const randomMeal = require("./routes/randomMeal.js");
const reservations = require("./routes/reservations.js");
const randomReservation = require("./routes/randomReservation.js");

app.get("/meals", meals);
app.get("/cheap-meals", cheapMeals);
app.get("/large-meals", largeMeals);
app.get("/meal", randomMeal);
app.get("/reservations", reservations);
app.get("/reservation", randomReservation);

app.listen(3000);
