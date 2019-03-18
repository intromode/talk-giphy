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
    splitMessage.forEach(message => {
        const url = makeApiURL(message);
        fetch(url)
            .then(response => response.json())
            .then(results => {
                console.log(message, results);
                loadGifs(results);
            });

    });
    
// renderarray = []
// gif 1 = const url1 = makeapiurl(splitmessage[0])
    // fetch(url1) blah blah blah 

    //gif 2
    //gif 3

    //loadgifs(renderarray)
    


});

//writToQuery(currentQuery, message)



