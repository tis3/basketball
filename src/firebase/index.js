import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyB1o0cU34J_sQFu2ZLn43-1OU5cyjrNAXE",
    authDomain: "basquete-pra-vida.firebaseapp.com",
    databaseURL: "https://basquete-pra-vida.firebaseio.com",
    projectId: "basquete-pra-vida",
    storageBucket: "basquete-pra-vida.appspot.com",
    messagingSenderId: "237977744359"
};

firebase.initializeApp(config);

export const facebookProvider = new firebase.auth.FacebookAuthProvider();
export const firebaseAuth = firebase.auth();
export const firebaseRef = firebase.database().ref();
export const storageKey = 'AUTH_TOKEN';
export const storageRef = firebase.storage().ref();
export default firebase;