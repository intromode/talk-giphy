import { auth } from './firebase.js';

export function makeStaticHeader() {
    const html = `
    <section id="static-header">
            <h1>Talk</h1><img src="assets/logo.png" alt="talk giphy to me logo"><h1>Giphy to Me</h1>
        </section>`;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

export function makeProfileHeader(user) {
    const html = `<section id="user-profile">
        <img src="${user.photoURL}">
        <p>${user.displayName}</p>
        <button>Sign Out</button>
    </section>`;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

export function makeHeaderNav() {
    const html = `
    <nav>
        <a href="./favorites.html" class="favorites-nav">See Your Faves</a>
        <a href="translate.html" class="translate-nav">Giphy Translate</a>
        <a href="guess.html" class="guess-nav">Giphy Guess</a>
        <a href="index.html" class="home-nav">Home</a>
    </nav>`;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

const headerNode = document.getElementById('header-container');
const headerNavNode = document.getElementById('header-nav-container');

export default function loadHeader(options) {
    const staticHeader = makeStaticHeader();
    headerNode.appendChild(staticHeader);
    if(options && options.skipAuth) {
        return;
    }
    auth.onAuthStateChanged(user => {
        if(user) {
            const profile = makeProfileHeader(user);
            const signOutButton = profile.querySelector('button');
            signOutButton.addEventListener('click', () => {
                auth.signOut();
                window.location.hash = '';
            });
            headerNode.appendChild(profile);
        } else {
            window.location = 'auth.html';
        }
    });

    //append headernav to headernav container
    const headerNav = makeHeaderNav();
    headerNavNode.appendChild(headerNav);
}