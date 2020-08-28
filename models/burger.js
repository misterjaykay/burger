var orm = require("../config/orm");

var burger = {
  all: function (cb) {
    orm.selectAll("burgers", function (res) {
      cb(res);
    });
  },

  insert: function (column, value, cb) {
    orm.insertOne("burgers", column, value, function (res) {
      cb(res);
    });
  },

  update: function (objColVal, id, cb) {
    orm.updateOne("burgers", objColVal, id, function (res) {
      cb(res);
    });
  },

  delete: function (column, id, cb) {
    orm.deleteOne("burgers", column, id, function (res) {
      cb(res);
    });
  },
};

module.exports = burger;
