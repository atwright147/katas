import { expect } from 'chai';

import luhnCheck from './luhn.js';

describe('#luhnCheck', () => {
    it('should return true for a real number', () => {
        expect(luhnCheck(123)).to.equal(true);
    });

    it('should return false for a non-number', () => {
        expect(luhnCheck('string')).to.equal(false);
    });
});
