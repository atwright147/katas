#!/usr/bin/env node

'use strict';

function getAge(dob) {
	if (!dob.match(/\d{2}(\/|\.|\-)\d{2}(\/|\.|\-)\d{2,4}/i)) {
		return false;
	}

	const [dobDay, dobMonth, dobYear] = dob.split(/\/|\-|\./i);

	const now = new Date();

	const dateObj  = new Date(dobYear, (dobMonth - 1), dobDay);
	const dateDiff = new Date(now.getTime() - dateObj.getTime());
	const age = (dateDiff.getUTCFullYear() - 1970);

	return age;
}

module.exports = getAge;
