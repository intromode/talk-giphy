import { writeToQuery } from './hash-component.js';

const inputForm = document.getElementById('input-form');

export default function updateQuery() {
    inputForm.addEventListener('submit', event => {
        event.preventDefault();
        const input = inputForm.querySelector('input');
        const message = input.value;
        const currentQuery = window.location.hash.slice(1);
        const newQuery = writeToQuery(currentQuery, message);
        window.location.hash = newQuery;
        // callback(message);
    });
}