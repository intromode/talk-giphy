const test = QUnit.test;


QUnit.module('HASH COMPONENTS');

function writeToQuery(currentQuery, message) {
    const searchParams = new URLSearchParams(currentQuery);
    searchParams.set('q', message);
    return searchParams.toString();
}

function readMessageFromQuery(currentQuery) {
    const searchParams = new URLSearchParams(currentQuery);
    const message = searchParams.get('q');
    const queryValues = {
        message: message
    };
    return queryValues;
}

test('write to query', assert => {
    //arrange
    const currentQuery = '';
    const expected = 'q=dog';
    const message = 'dog';
    //act
    const result = writeToQuery(currentQuery, message);
    //assert
    assert.equal(result, expected);
});

test('read message from query', assert => {
    const currentQuery = 'q=dog';
    const expected = {
        message: 'dog'
    };
    const result = readMessageFromQuery(currentQuery);

    assert.deepEqual(result, expected);
});
