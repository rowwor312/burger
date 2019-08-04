var express = require("express");
var methodOverride = require('method-override');
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var path = require("path");

var app = express();
app.use(express.static(__dirname + '/public'));

// Sets up the Express app to handle data parsing.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Handlebars setup.
app.use(methodOverride('_method'));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


var routes = require('./controllers/burgers_controller.js');
app.use('/', routes);



var PORT = process.env.PORT || 8080;
app.listen(PORT);