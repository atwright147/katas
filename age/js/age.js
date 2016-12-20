#!/usr/bin/env node

'use strict';

function getAge(dob) {
	const dobSplit = dob.split('/');
	const dobDay   = Number(dobSplit[0]);
	const dobMonth = Number(dobSplit[1]);
	const dobYear  = Number(dobSplit[2]);

	const now = new Date();

	const dateObj  = new Date(dobYear, (dobMonth - 1), dobDay);
	const dateDiff = new Date(now.getTime() - dateObj.getTime());
	const age = (dateDiff.getUTCFullYear() - 1970);

	return age;
}

module.exports = getAge;
