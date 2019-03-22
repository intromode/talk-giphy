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

export function makeShareButton() {
    const html = `<div class="fb-share-button" data-href="https://talkgiphytome.netlify.com" data-layout="button_count" data-size="small">
    <a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Ftalkgiphytome.netlify.com&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore">Share</a>
</div>`;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

export function makeProfileHeader(user) {
    const avatar = user.photoURL || './assets/user-icon.jpg';
    const html = `<section id="user-profile">
        <img src="${avatar}">
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
        <a href="public.html" class="home-nav">Public</a>
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
        const shareButton = makeShareButton();
        headerNode.appendChild(shareButton);
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

    const headerNav = makeHeaderNav();
    headerNavNode.appendChild(headerNav);
}