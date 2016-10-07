// modules =================================================
var express        	= require('express');
var app            	= express();
var mongoose 		= require('mongoose'); 
const bodyParser= require('body-parser');
const MongoClient 	= require('mongodb').MongoClient;

// configuration ===========================================

var port = process.env.PORT || 8080; // set our port

app.use(express.static(__dirname + '/public')); // set the static files location /public/img will be /img for users

// app.set('view engine', 'ejs');

 app.use(bodyParser.urlencoded({extended: true}));

// routes ==================================================
require('./app/routes')(app); // pass our application into our routes

// define model ============================================
var Todo = mongoose.model('Todo', {
    text : String
});

// start app ===============================================
mongoose.connect('mongodb://sbk041092:sbk041092@ds061325.mlab.com:61325/to-do-list', (err, database) => {
   if (err) return console.log(err) 
	  	db = database
	  	app.listen(port);
		console.log('Magic happens on port ' + port); 			// shoutout to the user
})
exports = module.exports = app; 						// expose app

// process app =============================================
// app.get('/', (req, res) => {
// 	db.collection('todos').find().toArray(function(err, result) {
// 		if (err) return console.log(err)
// 		res.render('index.ejs', {todos: result})
// 	})
// })

app.get('/api/todos',function(req, res){
	Todo.find(function(err, todos){
		if(err)
			res.send(err);

		res.json(todos);
	});
});

// create todo and send back all todos after creation
    app.post('/api/todos', function(req, res) {

        // create a todo, information comes from AJAX request from Angular
        Todo.create({
            text : req.body.text,
            done : false
        }, function(err, todo) {
            if (err)
                res.send(err);

            // get and return all the todos after you create another
            Todo.find(function(err, todos) {
                if (err)
                    res.send(err)
                res.json(todos);
            });
        });

    });

    // delete a todo
    app.delete('/api/todos/:todo_id', function(req, res) {
        Todo.remove({
            _id : req.params.todo_id
        }, function(err, todo) {
            if (err)
                res.send(err);

            // get and return all the todos after you create another
            Todo.find(function(err, todos) {
                if (err)
                    res.send(err)
                res.json(todos);
            });
        });
    });