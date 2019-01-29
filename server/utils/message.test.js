const expect = require('expect');

var {generateMessage} = require('./message');

describe ('generateMessage', () => {
    it('should generate the correct message object', () => {
        let from = 'ivo'
        let text = 'hello world';
        let res = generateMessage(from, text);
        expect(res.from).toBe('ivo');
        expect(res.text).toBe('hello world');
        expect(res.createdAt).toBeA('number');
        expect(res).toInclude({from, text});
    });
});


