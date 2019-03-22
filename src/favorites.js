import loadHeader from './header-component.js';
import { auth, favoritesByUserRef } from './firebase.js';
import loadGifs from './display-giphy-component.js';
import objectToArray from './object-to-array.js';
import loadFooter from './footer-component.js';


loadHeader();
loadFooter();
auth.onAuthStateChanged(user => {
    const userId = user.uid;
    const userFavoritesRef = favoritesByUserRef.child(userId);
    userFavoritesRef.on('value', snapshot => {
        const value = snapshot.val();
        const gifs = objectToArray(value);
        loadGifs(gifs);
    });

});