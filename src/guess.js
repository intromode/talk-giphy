import { words } from '../data/word-list.js';
import makeApiURL from './make-api-url-component.js';

const generateGifButton = document.getElementById('generate-gif');

generateGifButton.addEventListener('click', () => {
    const randomWordObject = words[Math.floor(Math.random() * words.length)];
    const randomWord = randomWordObject.word;
    const url = makeApiURL(randomWord);
    console.log('page js url', url);
    // fetch(url)


    //create generate button (generate button should reset entire game if a game exists)
    
    //on generate button click get random word, then call API with random word
    
    //take results and display first
});


//write user guess area

//on click of user guess button, guess string is evaluated against random word
    // if randomWord === guess --> win message
    // if randomWord !== guess --> add one more gif to display
    // if gif display === 3 --> lose message
