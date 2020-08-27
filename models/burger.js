var orm = require("./config/orm");

var burger = {
    all: function(cb) {
        orm.selectAll("burger", function(res) {
            cb(res);
        });
    },

    insert: function(column, value, cb) {
        orm.insertOne("burger", column, value, function(res) {
            cb(res);
        });
    },

    update: function(objColVal, id, cb) {
        orm.updateOne("burger", objColVal, id, function(res) {
            cb(res);
        });
    }
  
};


module.exports = burger;