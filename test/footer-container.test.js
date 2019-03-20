import { makeFooter } from '../src/footer-component.js';
const test = QUnit.test;

QUnit.module('MAKE FOOTER TEST');

test('make a static footer', assert => {
    //Arrange
    const expected = `
    <section>
    <p>&copy; Team Dancing Pug 2019</p>
    <p>This site powered by: <a target="blank" href="https://giphy.com/">Giphy.com</a></p>
    <p><a href="about-us.html">About Us</a></p>
    <p><a href="translate.html">Giphy Translate</a></p>
    <p><a href="guess.html">Giphy Guess</a></p>
    <p><a href="favorites.html">Your Faves</a></p>
    <p><a href="/">Home</a></p>
</section>`;
    //Act
    const result = makeFooter();
    //Assert
    assert.htmlEqual(result, expected);
});