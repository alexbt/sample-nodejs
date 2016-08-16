var mongoose = require('mongoose');
var mydoc =  mongoose.model('mydoc', {field : String}, 'mydoc');

exports.mydoc = function(){
	return mydoc;
}