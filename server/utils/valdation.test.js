const expect = require('expect');
const {isRealString} = require('./validation.js');

describe('isRealString', () => {
    it('should reject non string values', () => {
        var str = isRealString(true);
        expect(str).toNotBeA('string');
    });

    it('should reject strings with only spaces', () => {
        var str = isRealString('     ');
        expect(str).toBe(false);
    });

    it('hould allow strings with non-space characters', () => {
        var str = isRealString('joh eia olo ');
        expect(str).toBe(true);
    });
});