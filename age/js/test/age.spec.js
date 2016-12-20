const mocha = require('mocha');
const expect = require('expect');

const getAge = require('../age');

describe('Age calculator', function() {
	const nowObj = new Date();
	const now = nowObj.getDate() + '/' + nowObj.getMonth() + '/' + nowObj.getFullYear();
	
	it('should calculate age as 38 for 22/09/1978', function() {
		expect(getAge('22/09/1978')).toEqual(38);
	});

	it('should calculate age as 0 for now', function() {
		expect(getAge(now)).toEqual(0);
	});
});
