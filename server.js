var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');

var app = express();

app.use(express.static(process.cwd + '/==========filepath========'));

app.use(bodyParser.urlencoded({
    extended: false
}));
