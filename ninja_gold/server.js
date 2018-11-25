var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
const flash = require('express-flash');
var session = require('express-session');
var app = express();

app.use(flash());
app.use(express.static( __dirname + '/public/dist/public' ));
app.use(bodyParser.json());
app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))

mongoose.connect('mongodb://localhost/ninjaNoob', {useNewUrlParser: true});

require('./server/models/Newb.js');
require('./server/config/mongoose.js');

var routes_setter = require('./server/config/routes.js');
routes_setter(app);


app.listen(2100, function(){
    console.log('listening on port 2100');
})