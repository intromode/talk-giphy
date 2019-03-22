import makeApiURL from '../src/make-api-url-component.js';
const test = QUnit.test;

QUnit.module('MAKE-API-URL');

test('make api url', assert => {
    const messageSingleTerm = 'dog'; 
    const expected = 'https://api.giphy.com/v1/gifs/search?api_key=kk0i6M6rAbhZ9kP6R0MGVoAUafZgC5rI&q=dog';
    const result = makeApiURL(messageSingleTerm);
    assert.equal(result, expected);
});