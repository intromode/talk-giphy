import loadHeader from './header-component.js';
import { auth, favoritesByUserRef } from './firebase.js';
import loadGifs from './display-giphy-component.js';
import objectToArray from './object-to-array.js';

loadHeader();

///get current favorite user list

auth.onAuthStateChanged(user => {
    const userId = user.uid;
    console.log(userId);
    const userFavoritesRef = favoritesByUserRef.child(userId);
    console.log(userFavoritesRef);
    userFavoritesRef.once('value')
        .then(snapshot => {
            const value = snapshot.val();
            const gifs = objectToArray(value);
            loadGifs(gifs);
        });

});