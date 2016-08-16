var myDocModel = require('../dao/models').mydoc();
var mongoDao = require('../dao/mongoDao');
var tryModules = require('../utils/tryModules');

exports.findAll = function(req, res) {
	mongoDao.find(myDocModel, function(doc){
		res.send(doc);
	});
};
exports.save = function(req, res) {
	var myNewDoc = new myDocModel({field: req.params.field});
	var doc = mongoDao.add(myNewDoc, function(doc){
		res.send('Success: added ' + doc);
	});
};


exports.tryUnderscore = function(req, res){
	var arr = [{id:1,name:'John Doe'},{id:2, name:'Will Smith'}, {id:3, name:'John Vanbiesbrouck'}];
	var result = tryModules.rearrangeArrayName(arr);
	res.send(result);
}