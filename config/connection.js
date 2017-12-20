var mysql = require("mysql");
// var inquirer = require("inquirer");

//create connection to burgers_db
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "burgers_db"
});

// call showItemsAvailable upon connecting
connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});


module.exports = connection;
