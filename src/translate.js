import loadGifs from './display-giphy-component.js';
import loadHeader from './header-component.js';
import { readMessageFromQuery } from './hash-component.js';
import updateQuery from './update-query-component.js';
import makeApiURL from './make-api-url-component.js';


loadHeader();

updateQuery();
window.addEventListener('hashchange', () => {
    const currentQuery = window.location.hash.slice(1);
    const queryValues = readMessageFromQuery(currentQuery);
    const splitMessage = queryValues.message.trim().split(' ');
    const responseArray = [];

    splitMessage.forEach((message, i) => {
        const url = makeApiURL(message);
        fetch(url)
            .then(response => response.json())
            .then(result => {
                const firstGifInResults = result.data[0];
                firstGifInResults['order'] = i;
                responseArray.push(firstGifInResults);
                responseArray.sort((a, b) => a.order - b.order); 
                if(responseArray.length === splitMessage.length) {
                    loadGifs(responseArray);
                }
            });
    });
});




