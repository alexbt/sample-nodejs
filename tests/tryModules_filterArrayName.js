var chai = require('chai');
var expect = chai.expect; // we are using the "expect" style of Chai
var tryModules = require('../js/utils/tryModules');

describe('tryModules.filterArrayName', function() {
  it('Test array filtering using underscore.filter', function() {
	var arr = [{id:1,name:'John Doe'},{id:2, name:'Will Smith'}, {id:3, name:'John Vanbiesbrouck'}];
	var obj = tryModules.filterArrayName(arr, 'John');
	expect(obj.length).to.equal(2);

  	expect(obj[0].firstName).to.equal('John');
	expect(obj[0].lastName).to.equal('Doe');
	
	expect(obj[1].firstName).to.equal('John');
	expect(obj[1].lastName).to.equal('Vanbiesbrouck');
	
  });
});