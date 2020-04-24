import firebase from 'firebase/app';
import 'firebase/firebase-firestore';
import 'firebase/firebase-auth';

const firebaseConfig = {
    apiKey: "AIzaSyDo_jngNKiKJer6Vt02rS2hRbc-Afb0JOQ",
    authDomain: "etutoring-dc0f0.firebaseapp.com",
    databaseURL: "https://etutoring-dc0f0.firebaseio.com",
    projectId: "etutoring-dc0f0",
    storageBucket: "etutoring-dc0f0.appspot.com",
    messagingSenderId: "863849899471",
    appId: "1:863849899471:web:c4b140e39195701e091eba",
    measurementId: "G-FWWDQKXTQD"
  };

firebase.initializeApp(firebaseConfig);

export const firestore=firebase.firestore();
export const fireauth=firebase.auth();
export default firebase;