import { auth } from './firebase.js';

export function makeStaticHeader() {
    const html = `
    <section id="static-header">
            <img src="assets/logo.jpg" alt="talk giphy to me logo">
            <h1>Talk Giphy to Me</h1>
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
const headerNode = document.getElementById('header-container');

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
}