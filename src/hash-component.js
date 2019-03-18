export function writeToQuery(currentQuery, message) {
    const searchParams = new URLSearchParams(currentQuery);
    searchParams.set('q', message);
    return searchParams.toString();
}

export function readMessageFromQuery(currentQuery) {
    const searchParams = new URLSearchParams(currentQuery);
    const message = searchParams.get('q');
    const queryValues = {
        message: message
    };
    return queryValues;
}
