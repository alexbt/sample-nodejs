var chai = require('chai');
var expect = chai.expect; // we are using the "expect" style of Chai
var tryModules = require('../src/nodejs/utils/tryModules');

describe('tryModules.rearrangeArrayName', function() {
  it('Test array transformation using underscore.map', function() {
	  var arr = [{id:1,name:'John Doe'},{id:2, name:'Will Smith'}, {id:3, name:'John Vanbiesbrouck'}];
	  var obj = tryModules.rearrangeArrayName(arr);
	 
  expect(obj[0].firstName).to.equal('John');
	expect(obj[0].lastName).to.equal('Doe');
	
	expect(obj[1].firstName).to.equal('Will');
	expect(obj[1].lastName).to.equal('Smith');
	
	expect(obj[2].firstName).to.equal('John');
	expect(obj[2].lastName).to.equal('Vanbiesbrouck');
  });
});