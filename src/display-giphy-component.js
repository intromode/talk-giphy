import { auth, favoritesByUserRef, publicRef } from './firebase.js';

export function makeGifTemplate(gif) {
    const html = `
    <li>
    <div class="li-buttons">
        <span class="favorite-gif">☆ Add to Faves</span>
        <button>Add to Public</button>
    </div>
    <img src="${gif.images.fixed_height.url}" alt="${gif.title}">
    </li>`;

    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

export function makePublicTemplate(gif) {
    const html = `
    <li>
    <img src="${gif.images.fixed_height.url}" alt="${gif.title}">
    </li>`;

    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

const displayGifs = document.getElementById('gif-list');

export default function loadGifs(gifs, options){
    while(displayGifs.children.length > 0) {
        displayGifs.lastElementChild.remove();
    }

    gifs.forEach(gif => {
        let gifDisplay;
        if(options && options.public) {
            gifDisplay = makePublicTemplate(gif);
        } else {
            gifDisplay = makeGifTemplate(gif);
        }
        const favoriteGif = gifDisplay.querySelector('span');
        const publicGif = gifDisplay.querySelector('button');
        const userId = auth.currentUser.uid;
        const userFavoritesRef = favoritesByUserRef.child(userId);
        const userFavoriteGifRef = userFavoritesRef.child(gif.id);
        const userPublicRef = publicRef.child(gif.id);
        userFavoriteGifRef.once('value')
            .then(snapshot => {
                const value = snapshot.val();

                let isFavorite = false;
                if(value) {
                    isFavorite = true;
                    favoriteGif.textContent = '★ Gif Favorited';
                    favoriteGif.classList.add('fave');
                }
                else {
                    isFavorite = false;
                    favoriteGif.textContent = '☆ Add to Faves';
                    favoriteGif.classList.remove('fave');
                }
                publicGif.addEventListener('click', () => {
                    userPublicRef.set({
                        id: gif.id,
                        images: {
                            fixed_height: {
                                url:gif.images.fixed_height.url
                            }
                        } 
                    });
                });        
                favoriteGif.addEventListener('click', () => {
                    if(isFavorite) {
                        isFavorite = false;
                        userFavoriteGifRef.remove();
                        favoriteGif.textContent = '☆ Add to Faves';
                        favoriteGif.classList.remove('fave');
                    }

                    else {
                        isFavorite = true;
                        userFavoriteGifRef.set({
                            id: gif.id,
                            images: {
                                fixed_height: {
                                    url:gif.images.fixed_height.url
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