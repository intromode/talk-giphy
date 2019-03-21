import madLibTemplate from './mad-lib.js';
import loadHeader from './header-component.js';
import loadFooter from './footer-component.js';

loadHeader();
loadFooter();

const addUserForm = document.getElementById('add-user-form');
const devDisplayUl = document.getElementById('dev-display-container');

const userPic = ['../assets/wave.gif', '../assets/piggy.webp', '../assets/breakfast-club.webp', '../assets/girl-glasses.gif'];

addUserForm.addEventListener('submit', event => {
    event.preventDefault();
    const name = document.getElementById('name').value.toUpperCase();
    const activity = document.getElementById('activity').value.toUpperCase();
    const adj1 = document.getElementById('adj1').value.toUpperCase();
    const activity2 = document.getElementById('activity2').value.toUpperCase();

    const randomPic = userPic[Math.floor(Math.random() * userPic.length)];

    const userLi = madLibTemplate(name, activity, adj1, activity2, randomPic);
    devDisplayUl.appendChild(userLi);
});