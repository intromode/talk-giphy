import { auth, favoritesByUserRef } from './firebase.js';

export function makeGifTemplate(gif) {
    const html = `
    <li>
    <img src="${gif.images.fixed_width.url}" alt="${gif.title}">
    <span class="favorite-gif">☆ Add to Favorites</span>
    </li>`;

    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

const displayGifs = document.getElementById('gif-list');


export default function loadGifs(gifs){
    while(displayGifs.children.length > 0) {
        displayGifs.lastElementChild.remove();
    }

    gifs.forEach(gif => {
        const gifDisplay = makeGifTemplate(gif);
        const favoriteGif = gifDisplay.querySelector('span');
        console.log(auth);
        const userId = auth.currentUser.uid;
        const userFavoritesRef = favoritesByUserRef.child(userId);
        const userFavoriteGifRef = userFavoritesRef.child(gif.id);
        userFavoriteGifRef.once('value')
            .then(snapshot => {
                const value = snapshot.val();

                let isFavorite = false;
                if(value) {
                    isFavorite = true;
                }
                else {
                    isFavorite = false;
                }

                //is its a favorite, remove the favorite 
                //if its not already a fave, add the fav
                //addeventlistener 
                favoriteGif.addEventListener('click', () => {
                    if(isFavorite) {
                        isFavorite = false;
                        userFavoriteGifRef.remove();
                        favoriteGif.textContent = '☆ Add to Favorites';
                    }
                    else {
                        isFavorite = true;
                        userFavoriteGifRef.set({
                            id: gif.id,
                            url: gif.images.fixed_width.url
                        });    
                        favoriteGif.textContent = '★ Gif Favorited';
                    }
                });
        
            });
        displayGifs.appendChild(gifDisplay);
    });
}