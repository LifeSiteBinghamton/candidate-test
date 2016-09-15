var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var itemSchema = new Schema({
	"item_id": ObjectId,
	"name": String
});

module.exports = mongoose.model('Item', itemSchema);
