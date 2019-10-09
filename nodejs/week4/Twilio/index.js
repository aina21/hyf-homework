require.apply()
const express = require("express");
const localtunnel = require("localtunnel");
const app = express();
const { PORT } = process.env;
const { SUBDOMAIN } = process.env;

app.get("./check", (req, res) => {
  res.send("Hello");
});

const tunnel = localtunnel(PORT, { subdomain: SUBDOMAIN }, (err, tunnel) => {
  if (!err) console.log("Tunnel is open");
  else console.log("Error opening tunnel: ", err);
});

tunnel.on("close", function() {
  // When the tunnel is closed
  console.log("Tunnel is closed");
});
