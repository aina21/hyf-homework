var express = require("express");
var app = express();

app.get("/calculator/add", (req, res) => {
  const numbers = [];
  for (const key in req.query) {
    if (req.query.hasOwnProperty(key)) {
      numbers.push(Number(req.query[key]));
    }
  }
  const result = numbers.reduce((sub, num) => {
    return sub + num;
  }, 0);
  res.send(`${result}`);
});

app.get("/calculator/multiply", (req, res) => {
  const numbers = [];
  for (const key in req.query) {
    if (req.query.hasOwnProperty(key)) {
      numbers.push(Number(req.query[key]));
    }
  }
  const result = numbers.reduce((multiply, num) => {
    return multiply * num;
  }, 1);
  console.log(`${result}`);
  res.send(`${result}`);
});

app.get("/calculator/sub", (req, res) => {
  const numbers = [];
  for (const key in req.query) {
    if (req.query.hasOwnProperty(key)) {
      numbers.push(Number(req.query[key]));
    }
  }
  const result = numbers.reduce((sub, num) => {
    return num - sub;
  }, 0);
  res.send(`${result}`);
});

app.get("/calculator/div", (req, res) => {
  const numbers = [];
  for (const key in req.query) {
    if (req.query.hasOwnProperty(key)) {
      numbers.push(Number(req.query[key]));
    }
  }

  const result = numbers.reduce((div, num) => {
    //console.log(num , div)
    div = num / div;
    return div;
  }, 1);

  res.send(`${result}`);
});

app.listen(3000);
