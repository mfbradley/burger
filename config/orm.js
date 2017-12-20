// Import MySQL connection.
var connection = require("../config/connection.js");

function selectAll() {

}

function insertOne() {


}

function updateOne() {

}

var orm = {
    all: function(burgers, cb) {
        var queryString = "SELECT * FROM " + burgers + ";";
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
};

// Export the orm object for the model (burger.js)
module.exports = orm;
