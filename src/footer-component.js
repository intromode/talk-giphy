export function makeFooter() {
    const html = `
    <section>
    <p>&copy; Team Dancing Pug 2019</p>
    <p>This site powered by: <a target="blank" href="https://giphy.com/">Giphy.com</a></p>
    <p><a href="about-us.html">About Us</a></p>
    <p><a href="translate.html">Giphy Translate</a></p>
    <p><a href="guess.html">Giphy Guess</a></p>
    <p><a href="favorites.html">Your Faves</a></p>
    <p><a href="/">Home</a></p>
</section>`;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

const footerContainer = document.getElementById('footer-container');

export default function loadFooter() {
    const footer = makeFooter();
    footerContainer.appendChild(footer);
}