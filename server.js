require("dotenv").config();

const express = require("express");
const app = express();
const PORT = 8080;
const cors = require("cors");
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(cors());

var mysql = require("mysql");
var connection = mysql.createConnection({
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  port: process.env.port
});

connection.connect();

connection.query("USE students_db", function(error, results, fields) {
  if (error) throw error;
  console.log("Connection to amazon rds established.");
});

app.get("/", (req, res) => {
  connection.query("DESCRIBE students", function(error, results, fields) {
    if (error) throw error;
    res.json(results)
  });

});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
