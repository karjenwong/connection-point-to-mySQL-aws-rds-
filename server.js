require("dotenv").config();

const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const cors = require("cors");
const bodyParser = require("body-parser");
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  port: process.env.port
});

app.use(bodyParser.json());
app.use(cors());
connection.connect();
connection.query("USE students_db", function(error, results, fields) {
  if (error) throw error;
  console.log("connected");
});
app.get("/", function(req, res) {
  connection.query("DESCRIBE students", function(error, results, fields) {
    if (error) throw error;
    res.send(results);
    console.log(results);
  });
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
