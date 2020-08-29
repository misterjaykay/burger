var mysql = require("mysql");
var dotenv = require('dotenv').config();

var db_config = {
  host: "us-cdbr-east-02.cleardb.com",
  port: 3306,
  user: "bda09b16297265",
  password: process.env.MYSQL_KEY,
  database: "heroku_4c9e6987b7b92ac"
};

var connection;

function handleDisconnect() {
  connection = mysql.createConnection(db_config); 

  connection.connect(function(err) {              
    if(err) {                                     
      console.log('error when connecting to db:', err);
      setTimeout(handleDisconnect, 2000); 
    }                                     
  });                                     
  connection.on('error', function(err) {
    console.log('db error', err);
    if(err.code === 'PROTOCOL_CONNECTION_LOST') { 
      handleDisconnect();                         
    } else {                                      
      throw err;                                  
    }
  });
}

handleDisconnect();

// var connection = mysql.createConnection({
//   host: "us-cdbr-east-02.cleardb.com",
//   port: 3306,
//   user: "bda09b16297265",
//   password: process.env.MYSQL_KEY,
//   database: "heroku_4c9e6987b7b92ac"
// });

// connection.connect(function(err) {
//   if (err) {
//     console.error("error connecting: " + err.stack);
//     return;
//   }

//   console.log("connected as id " + connection.threadId);
// });

module.exports = connection;