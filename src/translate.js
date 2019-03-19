import loadGifs from './display-giphy-component.js';
import loadHeader from './header-component.js';
import { readMessageFromQuery } from './hash-component.js';
import updateQuery from './update-query-component.js';
import makeApiURL from './make-api-url-component.js';


loadHeader();
// loadGifs(results);



updateQuery();
window.addEventListener('hashchange', () => {
    const currentQuery = window.location.hash.slice(1);
    const queryValues = readMessageFromQuery(currentQuery);
    const splitMessage = queryValues.message.split(' ');
    const numberMessages = splitMessage.length;
    const responseArray = [];

    for(let i = 0; i < numberMessages; i++) {
        const url = makeApiURL(splitMessage[i]);
        fetch(url)
            .then(response => response.json())
            .then(result => {
                const firstGifInResults = result.data[0];
                firstGifInResults['order'] = i;
                responseArray.push(firstGifInResults);
                responseArray.sort((a, b) => a.order - b.order);  
            });    
    }
    function loadGifsList() {
        loadGifs(responseArray);
    }
    setTimeout(loadGifsList, 500);
    
});




