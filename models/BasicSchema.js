var mongoose = require('mongoose');

var BasicSchema = new mongoose.Schema({
	title: String,
	desc: String
});

mongoose.model('Basic', BasicSchema);