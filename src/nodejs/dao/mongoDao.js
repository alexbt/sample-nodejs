//var mockgoose = require('mockgoose');
var mongoose = require('mongoose');
var debug = require('debug');
//mockgoose(mongoose);

exports.find = function(mydoc, callback) {
	if(!mongoose.connection.readyState){
		mongoose.connect(process.env.DB_HOST);
	}
	mydoc.find(function(err, doc) {
		console.log(doc);
		callback(doc);
		mongoose.connection.close();
	})
};

exports.add = function(myDoc, callback) {
	if(!mongoose.connection.readyState){
		mongoose.connect(process.env.DB_HOST);
	}
	var resultsDoc;
	myDoc.save(function(err, doc) {	
		resultsDoc = doc;
		mongoose.connection.close();
		callback(resultsDoc);
	})
};

function openConnection(mongoose){
	var db = mongoose.createConnection();
	mongoose.connect(process.env.DB_HOST);
}
