import { results } from '../data/gif-list.js';
import loadGifs from './display-giphy-component.js';
import loadHeader from './header-component.js';
import getMessage from './get-message-component.js';
import { writeToQuery, readMessageFromQuery, } from './hash-component.js';


loadHeader();
loadGifs(results);



getMessage();

//writToQuery(currentQuery, message)



