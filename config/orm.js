var connection = require("./connection");
const { connect } = require("./connection");

function convertObj(object) {
  var arr = [];

  for (var key in object) {
    var value = object[key];
    if (Object.hasOwnProperty.call(object, key)) {
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      arr.push(key + "=" + value);
    }
  }
  return arr.toString();
}

var orm = {
  // SELECT * FROM burgers
  selectAll: function (tableInput, cb) {
    var qString = "SELECT * FROM ??";
    connection.query(qString, tableInput, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  insertOne: function (tableInput, colInput, colVal, cb) {
    var qString = `INSERT INTO ${tableInput}`;
    qString += `(${colInput}) `;
    qString += `VALUES ("${colVal}");`;
    connection.query(qString, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  // UPDATE burgers
  // SET devoured = true
  // WHERE CustomerID = 1;
  updateOne: function (tableInput, objColVal, id, cb) {
    convertObj(objColVal);
    var qString = `UPDATE ${tableInput} `;
    qString += `SET `;
    qString += convertObj(objColVal);
    qString += ` WHERE id=?`;
    connection.query(qString, id, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  // DELETE FROM burgers WHERE id = ?;
  deleteOne: function (tableInput, id, cb) {
    var qString = `DELETE FROM ${tableInput} `;
    qString += `WHERE ID = ?`;

    connection.query(qString, id, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  }
};

module.exports = orm;
