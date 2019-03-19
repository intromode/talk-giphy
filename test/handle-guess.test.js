const test = QUnit.test;

QUnit.module('HANDLE-GUESS');
const guessLimit = 4;
function handleGuesses(originalData, currentGuess) {
    if(currentGuess === guessLimit) {
        return;
    }
    else {
        const slicedData = originalData.slice(0, (currentGuess + 1));
        console.log(slicedData);
        return slicedData;

    }
}

test('create slices untill guess limit', assert => {
    //Arrange
    const originalData = [
        { url1: 'url1' },
        { url2: 'url2' },
        { url3: 'url3' },
        { url4: 'url4' },
        { url5: 'url5' }
    ];
    const currentGuess = 3;
    const expected = [
        { url1: 'url1' },
        { url2: 'url2' },
        { url3: 'url3' },
        { url4: 'url4' }
    ];
    //Act
    const result = handleGuesses(originalData, currentGuess);
    //Assert
    assert.deepEqual(result, expected);
});