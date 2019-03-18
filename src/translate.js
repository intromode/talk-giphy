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
    console.log('split message', splitMessage);
    const numberMessages = splitMessage.length;
    console.log('number of messages', numberMessages);

    const responseArray = [];


    for(let i = 0; i < numberMessages; i++) {

        console.log('split message', splitMessage[i]);
        const url = makeApiURL(splitMessage[i]);
        fetch(url)
            .then(response => response.json())
            .then(result => {
                result['order'] = i;
                responseArray.push(result);
                console.log('responseArray', responseArray);
            });
        
        const correctedGifOrder = responseArray.sort((a, b) => {
            if(a.order === b.order) {
                return 0;
            }
            if(a.order > b.order) {
                return -1;
            }
            return 1;
        });
        console.log('newOrder!!!', correctedGifOrder);
    }






    //splitMessage.forEach(message => {
    //  const url = makeApiURL(message);
    //fetch(url)
    //  .then(response => response.json())
    //.then(results => {
    //  console.log('**message**', message, '**results**', results);
    //loadGifs(results);
    //});

    //});




});




