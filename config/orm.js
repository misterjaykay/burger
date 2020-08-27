var connection = require("./config/connection");

var orm = {
    // SELECT * FROM burgers
    selectAll: function(tableInput, cb) {
        var qString = "SELECT * FROM ??";
        connection.query(qString, tableInput, function(err, result){
            if (err) { throw err; }
            cb(result);
        })
    },

    // INSERT INTO burgers(burger_name, devoured)
    // VALUES ("Cheeseburger", false)
    insertOne: function(tableInput, colInput, colVal, cb) {
        var qString = `INSERT INTO ${tableInput}`;
        qString += `(${colInput}) `;
        qString += `VALUES (${colVal});`
        connection.query(qString, function(err, result){
            if (err) { throw err; }
            cb(result);
        })
    },

    // UPDATE burgers
    // SET devoured = true
    // WHERE CustomerID = 1;
    updateOne: function(tableInput, objColVal, id, cb) {
        console.log("object", objColVal);
        var qString = `UPDATE ${tableInput} `;
        qString += `SET ${colInput} = ${colVal} `;
        qString += `WHERE id=?`;
        connection.query(qString, id, function(err,result){
            if (err) { throw err; }
            cb(result);
        })
    }
}



module.exports = orm;