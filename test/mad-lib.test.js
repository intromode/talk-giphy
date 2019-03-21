/* eslint-disable no-useless-escape */
import madLibTemplate from '../src/mad-lib.js';
const test = QUnit.test;

QUnit.module('MAD-LIB');

test('add li with user\'s info', assert => {
  //arrange
    const name = 'phoebe';
    const noun = 'designer';
    const adj1 = 'blue';
    const adj2 = 'loud';
    const adj3 = 'funny';
    const randomPic = '../assets/wave.gif';

    const expected = `
    <li> <div class=\"dev-img-container\"> <img src=\"funny\"> </div> <div class=\"name\"> <h2>phoebe</h2> <p>Hi, my name is phoebe. I like to designer... I guess. My spirit animal is a blue giraffe. In my spare time I like to loud. </p> </div> </li>
     `;
  //act
    const result = madLibTemplate(name, noun, adj1, adj2, adj3, randomPic);
  //assert
    assert.htmlEqual(result, expected);
});