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
     <li>
       <p>phoebe</p>
       <img src="../assets/wave.gif">
       <p>Description: phoebe is a designer something. Lorem ipsum dolor sit amet, consectetur adipiscing blue, sed do eiusmod tempor incididunt ut labore et loud magna aliqua. Ut enim ad funny veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
     </li>
     `;
  //act
    const result = madLibTemplate(name, noun, adj1, adj2, adj3, randomPic);
  //assert
    assert.htmlEqual(result, expected);
});