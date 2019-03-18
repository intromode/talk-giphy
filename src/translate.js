import { results } from '../data/gif-list.js';
import loadGifs from './display-giphy-component.js';
import loadHeader from './header-component.js';
import { readMessageFromQuery } from './hash-component.js';
import updateQuery from './update-query-component.js';


loadHeader();
loadGifs(results);



updateQuery();
window.addEventListener('hashchange', () => {
    const currentQuery = window.location.hash.slice(1);
    const queryValues = readMessageFromQuery(currentQuery);
    const splitMessage = queryValues.message.split(' ');
    console.log('split message', splitMessage);

    

});

//writToQuery(currentQuery, message)



