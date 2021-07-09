import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBc1yE1j_AkpIhPurJFhFfcnUIGiParUoo",
    authDomain: "linkedin-clone-68602.firebaseapp.com",
    projectId: "linkedin-clone-68602",
    storageBucket: "linkedin-clone-68602.appspot.com",
    messagingSenderId: "604087118926",
    appId: "1:604087118926:web:2c89d6afd7a6a40592271f"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };