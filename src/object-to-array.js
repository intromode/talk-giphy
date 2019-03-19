export default function objectToArray(input) {
    const keys = Object.keys(input);
    return keys.map(key => input[key]);
}