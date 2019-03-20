import { words } from '../data/word-list.js';
import makeApiURL from './make-api-url-component.js';
import loadGifs from './display-giphy-component.js';
import loadHeader from './header-component.js';
import loadFooter from './footer-component.js';

loadHeader();
loadFooter();

const GUESS_LIMIT = 3;
let guessCount = 0;

const generateGifButton = document.getElementById('generate-gif');
const guessForm = document.getElementById('guess-form');
const gameOutcomeDisplay = document.getElementById('game-outcome-display');
let originalData = [];
let randomWord = '';

generateGifButton.addEventListener('click', () => {
    while(gameOutcomeDisplay.children.length > 0) {
        gameOutcomeDisplay.lastElementChild.remove();
    }
    const randomWordObject = words[Math.floor(Math.random() * words.length)];
    randomWord = randomWordObject.word;
    const url = makeApiURL(randomWord);
    fetch(url)
        .then(
            response => response.json()
        ).then(
            result => {
                originalData = result.data;
                loadGifs(originalData.slice(0, 1));
            });    
});
        
        
guessForm.addEventListener('submit', event => {
    event.preventDefault();
    const formData = new FormData(guessForm);
    const guess = formData.get('guess-input');
    guessCount++;
        
    if(guess === randomWord) {
        guessCount = 0;
        const winMessage = document.createElement('p');
        winMessage.textContent = `Congrats, you win! The correct word is ${randomWord}.`;
        gameOutcomeDisplay.appendChild(winMessage);

    } if(guessCount === GUESS_LIMIT) {
        const loseMessage = document.createElement('p');
        loseMessage.textContent = `Sorry, you lose. The correct word is ${randomWord}.`;
        gameOutcomeDisplay.appendChild(loseMessage);
        guessCount = 0;
    }
    else {
        const slicedData = originalData.slice(0, (guessCount + 1));
        loadGifs(slicedData);
    }
               
});


