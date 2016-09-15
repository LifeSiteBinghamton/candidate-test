// modules =================================================
var express        = require('express');
var app            = express();
var mongoose	   = require('mongoose');

// configuration ===========================================

var port = process.env.PORT || 8080; // set our port

app.use(express.static(__dirname + '/public')); // set the static files location /public/img will be /img for users

var db = mongoose.connect('mongodb://localhost/grocery_list');

// routes ==================================================
require('./app/routes')(app); // pass our application into our routes

var items = require('./app/items');
app.use('/grocery-list', items);

// start app ===============================================
app.listen(port);
console.log('Magic happens on port ' + port); 			// shoutout to the user
exports = module.exports = app; 						// expose app
