import { expect } from 'chai';

import luhnCheck from './luhn.js';

describe('#luhnCheck', () => {
    it('should return a number for a real number', () => {
        expect(luhnCheck('123')).to.equal(123);
    });

    it('should return NaN for a non-number', () => {
        expect(luhnCheck('string')).to.be.NaN;
    });
});
