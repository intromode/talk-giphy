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
// const userProfileHeaderNode = document.getElementById('user-profile');

export default function loadHeader() {
    const staticHeader = makeStaticHeader();
    headerNode.appendChild(staticHeader);
    //get current user id
    auth.onAuthStateChanged(user => {
        const userID = user.uid;
        if(userID) {
            console.log('userid exists');
        } else {
            console.log('user does not exist');
        }
    });
    //if current user id exist then load profile

    //if current user id doesn't exist exist function and reroute to auth page
}