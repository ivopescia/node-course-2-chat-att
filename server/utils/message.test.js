const expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

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

describe('generateLocationMessage', () => {
    it('should generate the correct location object', () => {
        let from = 'Admin';
        let latitude = 49;
        let longitude = 12;
        let url = 'https://www.google.com/maps?q=49,12';
        let res = generateLocationMessage(from, latitude, longitude);
        expect(res.createdAt).toBeA('number');
        expect(res).toInclude({from, url});
    });
});
