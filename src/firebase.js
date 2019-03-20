var config = {
    apiKey: 'AIzaSyBqfe4jjrZ8WTXkSftzkRliEYGFiZSGgBA',
    authDomain: 'talk-giphy.firebaseapp.com',
    databaseURL: 'https://talk-giphy.firebaseio.com',
    projectId: 'talk-giphy',
    storageBucket: 'talk-giphy.appspot.com',
    messagingSenderId: '916515783240'
};

export const app = firebase.initializeApp(config);
export const auth = firebase.auth();
const db = firebase.database();
export const usersRef = db.ref('user');
export const favoritesByUserRef = db.ref('favorites-by-user');
export const publicRef = db.ref('public');