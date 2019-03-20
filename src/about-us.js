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
    const name = document.getElementById('name').value;
    const noun = document.getElementById('noun').value;
    const adj1 = document.getElementById('adj1').value;
    const adj2 = document.getElementById('adj2').value;
    const adj3 = document.getElementById('adj3').value;

    const randomPic = userPic[Math.floor(Math.random() * userPic.length)];

    const userLi = madLibTemplate(name, noun, adj1, adj2, adj3, randomPic);
    devDisplayUl.appendChild(userLi);
});