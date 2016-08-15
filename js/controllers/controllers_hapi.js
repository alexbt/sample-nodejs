var myDocModel = require('../dao/models').mydoc();
var mongoDao = require('../dao/mongoDao');

exports.findAll = function(res, reply) {
	mongoDao.find(myDocModel, function(doc){
		reply(doc);
	});
};
exports.findById = function() {
};
exports.save = function(req, reply) {
	var myNewDoc = new myDocModel({field: req.params.field});
	var doc = mongoDao.add(myNewDoc, function(doc){
		reply('Success: added ' + doc);
	});
};
exports.update = function() {
};
exports.delete = function() {
};