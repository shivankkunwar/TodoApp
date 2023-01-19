import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyBYu4vCotfs6SMZUag6645fwrP-uXcjD6k",
    authDomain: "todoist-f2f7f.firebaseapp.com",
    projectId: "todoist-f2f7f",
    storageBucket: "todoist-f2f7f.appspot.com",
    messagingSenderId: "857316682087",
    appId: "1:857316682087:web:e34550358c632814eea7c2",
    measurementId: "G-PG7E220W1Q"
});

export  {firebaseConfig as firebase};