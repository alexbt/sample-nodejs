var _ = require('underscore');
var s = require("underscore.string");

exports.rearrangeArrayName = function(arr) {
	var modifiedArray = _.map(arr, function(elem){
		var splitted = s.words(elem.name);
		return {firstName: splitted[0], lastName: splitted[1]};
	});

	return modifiedArray;
};


exports.filterArrayName = function(arr, name) {
	var modifiedArray = exports.rearrangeArrayName(arr);
	modifiedArray = _.filter(modifiedArray, function(elem){
		return s.contains(elem.firstName, name) || s.contains(elem.lastName, name);
	});

	return modifiedArray;
};
