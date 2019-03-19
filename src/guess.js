import { words } from '../data/word-list.js';

const randomWord = words[Math.floor(Math.random() * words.length)];

console.log(randomWord.word);

