var express = require("express");
var burger = require("../models/burger.js");

var router = express.Router();

router.get("/", function(req, res){
    burger.all(function(data) {
        var hbsObj = {
            burgers: data
        };
        console.log('hbsObj', hbsObj);
        res.render("index", hbsObj);
    });
});

router.post("/api/burgers", function(req, res){
    console.log('user input',req.body);
    burger.insert(['burger_name'],[req.body.name],function(data) {
        res.json({ id: data.insertId });
    });
});

router.put("/api/burgers/:id", function(req, res) {
    console.log('body',req.body);
    console.log('param',req.params);
    var idNumb = req.params.id;
    burger.update(
        {
            devoured: req.body.devoured
        },
        idNumb,
        function(result) {
            if (result.changedRows === 0) {
                res.status(404).end();
            } 
            res.status(200).end();
        }
    );
});

module.exports = router;