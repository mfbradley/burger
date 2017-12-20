var express = require('express');
var burger = require('../models/burger.js');


var router = express.Router();

router.get("/", function(request, response) {
    burger.all(function(data) {
        var hbsObject = {
            burger: data
        };

        console.log(hbsObject);
        response.render("index", hbsObject);
    });
});

// router.post();
// router.put();

module.exports = router;
