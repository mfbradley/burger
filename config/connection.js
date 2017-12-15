var mysql = require("mysql");
// var inquirer = require("inquirer");

//create connection to burger_db
var connection = mysql.createConnection({
    host: "localhost",
    port: 8080,

    // Your username
    user: "root",

    // Your password
    password: "",
    database: "burger_db"
});

// call showItemsAvailable upon connecting
connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;
