var mongoose 		= require('mongoose');
var Schema 			= mongoose.Schema; 

// define model ============================================
var todoSchema = new Schema({
	text : String
});

module.exports = mongoose.model('Todo', todoSchema);