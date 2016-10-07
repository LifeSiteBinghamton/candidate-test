// modules =================================================
var express        	= require('express');
var app            	= express();
var mongoose 		= require('mongoose');
var Schema 			= mongoose.Schema; 
const bodyParser 	= require('body-parser');
const MongoClient 	= require('mongodb').MongoClient;
var router 			= express.Router();

// configuration ===========================================
var port = process.env.PORT || 8080; // set our port

app.use(express.static(__dirname + '/public')); // set the static files location /public/img will be /img for users

app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());

// database connection and start app ===============================================
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://sbk041092:sbk041092@ds061325.mlab.com:61325/to-do-list', (err, database) => {
   if (err) return console.log(err) 
	  	db = database
	  	app.listen(port);
		console.log('Connected on port ' + port);
});

// routes ==================================================
require('./app/routes')(app); // pass our application into our routes