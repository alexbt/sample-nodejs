var expect = require('chai').expect;
var mockgoose = require('mockgoose');
var mongoose = require('mongoose');

var mongoDao = require('../src/nodejs/dao/mongoDao')
var mydoc = require('../src/nodejs/dao/models').mydoc();
var Mydoc = require('../src/nodejs/dao/models').mydoc();
describe('mongoDao.testSave', function testSave() {
	this.timeout(15000);
	it('should save a Mongo Document', function(done) {
		mockgoose(mongoose).then(function() {
			var doc = new mydoc({field : 'test'});
			mongoDao.add(doc, function(docSaved) {
				expect(doc.field).to.equal(docSaved.field);
				done();
			})
		});
	});
});

describe('mongoDao.testFind', function testFind() {
	this.timeout(15000);
	it('should return a Mongo Document', function(done) {
		mockgoose(mongoose).then(function() {
			var doc = new mydoc({field : 'test'});
			mongoDao.find(mydoc, function(docFound) {
				expect('test').to.equal(docFound[0].field);
				done();
			});
		});
	});
});

