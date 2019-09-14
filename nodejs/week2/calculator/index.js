var express = require("express");
var app = express();

app.get("/numbers/add", (req, res) => {
  const first = Number(req.query.first);
  const second = Number(req.query.second);

  res.send(`${first} + ${second} = ${first + second}`);
});

app.get("/numbers/multiply/:first/:second", (req, res) => {
  const first = Number(req.params.first);
  const second = Number(req.params.second);

  res.send(`${first} * ${second} = ${first * second}`);
});
app.listen(3000);
