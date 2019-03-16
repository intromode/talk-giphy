import { makeStaticHeader, makeProfileHeader } from '../src/header-component.js';
const test = QUnit.test;

test('make static header area', assert => {

    const expected = `
    <section id="static-header">
            <img src="assets/logo.jpg" alt="talk giphy to me logo">
            <h1>Talk Giphy to Me</h1>
        </section>`;

    const result = makeStaticHeader();

    assert.htmlEqual(result, expected);
});

test('make auth profile header area', assert => {
    const user = {
        displayName: 'Display Name',
        photoURL: 'assets/logo.jpg'
    };

    const expected = `<section id="user-profile">
        <img src="assets/logo.jpg">
        <p>Display Name</p>
        <button>Sign Out</button>
    </section>`;

    const result = makeProfileHeader(user);

    assert.htmlEqual(result, expected);
});
