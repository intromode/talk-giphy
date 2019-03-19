export function makeGifTemplate(gif) {
    const html = `<img src="${gif.images.fixed_width.url}" alt="${gif.title}">`;

    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

const displayGifs = document.getElementById('gif-display');

export default function loadGifs(gifs){
    console.log('load gifs called', gifs);
    gifs.forEach(gif => {
        const gifDisplay = makeGifTemplate(gif);
        displayGifs.appendChild(gifDisplay);
    });
}