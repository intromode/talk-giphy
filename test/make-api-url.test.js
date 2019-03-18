const test = QUnit.test;

QUnit.module('MAKE-API-URL');

const BASE_URL = 'http://api.giphy.com/v1/gifs/search?';
const API_KEY = 'kk0i6M6rAbhZ9kP6R0MGVoAUafZgC5rI';

function makeApiURL(messageSingleTerm) {
    const url = new URL(BASE_URL);
    url.searchParams.set('api_key', API_KEY);
    url.searchParams.set('q', messageSingleTerm);
    return url.toString();
}

test('make api url', assert => {
    //Arrange
    const messageSingleTerm = 'dog'; 
    const expected = 'http://api.giphy.com/v1/gifs/search?api_key=kk0i6M6rAbhZ9kP6R0MGVoAUafZgC5rI&q=dog';
    //Act
    const result = makeApiURL(messageSingleTerm);
    //Assert
    assert.equal(result, expected);
});