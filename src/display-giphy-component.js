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
        console.log(gif);
        const gifDisplay = makeGifTemplate(gif);
        const favoriteGif = gifDisplay.querySelector('span');
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

                favoriteGif.addEventListener('click', () => {
                    if(isFavorite) {
                        isFavorite = false;
                        userFavoriteGifRef.remove();
                        favoriteGif.textContent = '☆ Add to Favorites';
                        favoriteGif.classList.remove('fave');
                    }

                    else {
                        isFavorite = true;
                        userFavoriteGifRef.set({
                            id: gif.id,
                            images: {
                                fixed_width: {
                                    url:gif.images.fixed_width.url
                                }
                            } 
                        });    
                        favoriteGif.textContent = '★ Gif Favorited';
                        favoriteGif.classList.add('fave');
                    }
                });
        
            });
        displayGifs.appendChild(gifDisplay);
    });
}