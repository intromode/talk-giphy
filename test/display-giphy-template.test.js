/* eslint-disable no-useless-escape */
import { makeGifTemplate } from '../src/display-giphy-component.js';
const test = QUnit.test;

QUnit.module('DISPLAY-GIPHY-TEMPLATE');

test('make giphy list with template', assert => {
    const gif = {
        id: 'FP2OpdSFCR7hK',
        images: {
            fixed_height: { 
                url: 'https://media3.giphy.com/media/bbshzgyFQDqPHXBo4c/200w.gif',
            }
        },
        title: 'dumb dog GIF'
    };
//Arrange
    const expected = '<li> <div class=\"li-buttons\"> <span class=\"favorite-gif\">☆ Add to Faves</span> <button>Add to Public</button> </div> <img src=\"https://media3.giphy.com/media/bbshzgyFQDqPHXBo4c/200w.gif\" alt=\"dumb dog GIF\"> </li>';
//Act
    const result = makeGifTemplate(gif);
//Assert
    assert.htmlEqual(result, expected);
});