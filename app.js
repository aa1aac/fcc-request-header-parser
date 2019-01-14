// basic imports for server.js
var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
// import for user-agent
var useragent = require("express-useragent");
// app initiation for express.js
var app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(useragent.express());

// api url
const api = "/api/whoami";

// get request
app.get(api, (req, res, next) => {
  console.log("STATUS 100");
  let language = req.acceptsLanguages();
  let software =
    "OS:" + req.useragent.os + " , Browser:" + req.useragent.browser;
  let ipadress = req.ip;

  // respond to the request
  res.json({
    ipadress,
    language: language[0],
    software
  });
});

// listen on the port
app.listen(3000, () => {
  console.log("server loaded on port 3000");
});
