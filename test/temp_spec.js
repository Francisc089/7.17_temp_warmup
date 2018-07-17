const expect = require('chai').expect;
const temp = require('../temp.js');

describe('temperature converter', () => {
    it('exists', () => {
        expect(temp.convertToFfromC).to.be.ok
        expect(temp.convertToCfromF).to.be.ok
    });

    it('can convert Celsius to Fahrenheit', () => { expect(temp.convertToFfromC(20)).to.equal(68);
    });

    it('can convert Fahrenheit to Celsius', () => {
        expect(temp.convertToCfromF(68)).to.equal(20);
    });
});