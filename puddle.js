#!/usr/bin/env node

var array1 = [2,5,1,2,3,4,7,7,6];
var array2 = [2,5,1,3,1,2,1,7,5,6];
var array3 = [2,7,2,7,4,7,1,7,3,7];
var array4 = [2,7,2,7,4,7,1,7,3,6,4,3,5];

function puddle(array) {
	var highest = [];
	array.forEach(function(element) {
		if (element > highest) {
			highest = element;
		}
	}, this);
	console.log(highest);
}

// run
puddle(array1);