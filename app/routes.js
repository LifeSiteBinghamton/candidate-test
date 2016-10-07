// create Todo ============================================
var Todo = require('./models/todo');

/**
 * Gets all todos in the JSON format.
 * @param res The response.
 * @return
 */
function getTodos(res) {
    Todo.find(function (err, todos) {
        if (err) {
            res.send(err);
        }
        res.json(todos);
    });
};

module.exports = function(app) {

	app.get('/routes', function (req, res) {
        getTodos(res);
    });

    // create todo and send back all todos after creation
    app.post('/routes', function (req, res) {
        // create a todo, information comes from AJAX request from Angular
        Todo.create({
            text: req.body.text,
            done: false
        }, function (err, todo) {
            if (err)
                res.send(err);
            // get and return all the todos after you create another
            getTodos(res);
        });
    });

    // delete a todo
    app.delete('/routes/:todo_id', function (req, res) {
        Todo.remove({
            _id: req.params.todo_id
        }, function (err, todo) {
            if (err)
                res.send(err);
            getTodos(res);
        });
    });

	app.get('*', function(req, res) {
		res.status(200).send();
	});
};