import loadHeader from './header-component.js';
import { auth, publicRef } from './firebase.js';
import loadGifs from './display-giphy-component.js';
import objectToArray from './object-to-array.js';
import loadFooter from './footer-component.js';

loadHeader();
loadFooter();
const options = {
    public: true
};

auth.onAuthStateChanged(() => {
    publicRef.once('value')
        .then(snapshot => {
            const value = snapshot.val();
            const gifs = objectToArray(value);
            loadGifs(gifs, options);
        });

});