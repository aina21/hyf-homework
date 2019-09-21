var express = require("express");
var app = express();

app.use((req, res, next) => {
  const date = new Date();
  console.log(`${date} request received for path:${req.url}`);
  next();
});

const meals = require("./routes/meals");
const reservations = require("./routes/reservations");
const reviews = require("./routes/reviews");

app.use("/meals", meals);
app.use("/reservations", reservations);
app.use("/reviews", reviews);

const server = app.listen(3000, () => {
  console.log("The app is running on localhost:3000!");
});
