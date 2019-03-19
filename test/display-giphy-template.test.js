import { makeGifTemplate } from '../src/display-giphy-component.js';
const test = QUnit.test;

QUnit.module('DISPLAY-GIPHY-TEMPLATE');

test('make giphy list with template', assert => {
    const gif = {
        id: 'FP2OpdSFCR7hK',
        images: {
            fixed_width: { 
                url: 'https://media3.giphy.com/media/bbshzgyFQDqPHXBo4c/200w.gif',
            }
        },
        title: 'dumb dog GIF'
    };
//Arrange
    const expected = '<li> <img src="https://media3.giphy.com/media/bbshzgyFQDqPHXBo4c/200w.gif" alt="dumb dog GIF"> <span class="favorite-gif">☆ Add to Favorites</span> </li>';
//Act
    const result = makeGifTemplate(gif);
//Assert
    assert.htmlEqual(result, expected);
});