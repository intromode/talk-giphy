const test = QUnit.test;

QUnit.module('OBJECT TO ARRAY');
function objectToArray(input) {
    const keys = Object.keys(input);
    return keys.map(key => input[key]);
}

test('turning the gif object into an array', assert => {
    //Arrange
    const input = {
        a: { id: 'abc', url:'abc' },
        b: { id: 'def', url:'def' },
        c: { id: 'ghi', url:'ghi' }
    };
    const expected = [{ id: 'abc', url:'abc' }, { id: 'def', url:'def' }, { id: 'ghi', url:'ghi' }];
    //Act
    const result = objectToArray(input);
    //Assert
    assert.deepEqual(result, expected);
});