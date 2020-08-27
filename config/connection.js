var mysql = require("mysql");
var dotenv = require('dotenv').config();

var connection = mysql.createConnection({
  host: "us-cdbr-east-02.cleardb.com",
  port: 3306,
  user: "bda09b16297265",
  password: process.env.MYSQL_KEY,
  database: "heroku_4c9e6987b7b92ac"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);
});

module.exports = connection;