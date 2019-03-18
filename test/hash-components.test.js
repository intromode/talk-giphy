const test = QUnit.test;


QUnit.module('HASH COMPONENTS');

function writeToQuery(currentQuery, message) {
    const searchParams = new URLSearchParams(currentQuery);
    searchParams.set('q', message);
    return searchParams.toString();
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

