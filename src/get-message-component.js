const inputForm = document.getElementById('input-form');

export default function getMessage() {
    inputForm.addEventListener('submit', event => {
        event.preventDefault();
        const input = inputForm.querySelector('input');
        const message = input.value;
        return message;
    });
}