import { writeToQuery, readMessageFromQuery } from '../src/hash-component.js';
const test = QUnit.test;

QUnit.module('HASH COMPONENTS');

test('write to query', assert => {
    const currentQuery = '';
    const expected = 'q=dog';
    const message = 'dog';
    const result = writeToQuery(currentQuery, message);
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
