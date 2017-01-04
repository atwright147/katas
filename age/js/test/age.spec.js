'use strict';

const mocha  = require('mocha');
const expect = require('expect');
const sinon  = require('sinon');

const getAge = require('../age');

let clock;

describe('Age calculator', () => {

	beforeEach(() => {
		const testDate = new Date(2016, 8, 23);
		clock = sinon.useFakeTimers(testDate.getTime());
	});

	afterEach(() => {
		clock.restore();
	});

	const nowObj = new Date();

	const now = nowObj.getDate() + '/' + nowObj.getMonth() + '/' + nowObj.getFullYear();
	
	it('should calculate age as 38 for 22/09/1978', () => {
		expect(getAge('22/09/78')).toEqual(38);
		expect(getAge('22/09/1978')).toEqual(38);
	});

	it('should calculate age as 0 for now', () => {
		expect(getAge(now)).toEqual(0);
	});

	it('should handle "/", "-" or "." as date separator', () => {
		expect(getAge('22/09/78')).toBe(38);
		expect(getAge('22-09-78')).toBe(38);
		expect(getAge('22.09.78')).toBe(38);
	});

	it('should handle none date strings gracefully', () => {
		expect(getAge('aa/bb/cc')).toBe(false);
		expect(getAge('aa/bb/cccc')).toBe(false);
	});

});
