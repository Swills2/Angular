var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');
var app = express();

require('./server/config/mongoose.js');
mongoose.connect('mongodb://localhost/authors');
mongoose.Promise = global.Promise;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static( __dirname + '/public/dist/public'));

var routes_setter = require('./server/config/routes.js');

routes_setter(app);

app.listen(8000, function() {
    console.log("listening on port 8000");
});