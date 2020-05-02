import firebase from 'firebase/app';
import 'firebase/firebase-firestore';
import 'firebase/firebase-auth';
import 'firebase/firebase-storage';


const firebaseConfig = {
  apiKey: "AIzaSyBHXS8JoCZL2VLiNclsi2dYiOcwsPcZbv4",
  authDomain: "etutoring-version1.firebaseapp.com",
  databaseURL: "https://etutoring-version1.firebaseio.com",
  projectId: "etutoring-version1",
  storageBucket: "etutoring-version1.appspot.com",
  messagingSenderId: "664401817574",
  appId: "1:664401817574:web:299cda2a7fcead9a447027",
  measurementId: "G-TKDTQJJ9Y8"
};

firebase.initializeApp(firebaseConfig);

export const firestore=firebase.firestore();
export const fireauth=firebase.auth();
export const firestorage=firebase.storage();

export const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => fireauth.signInWithPopup(provider);
export const signOut = () => fireauth.signOut();

export const storage=firebase.storage();

export default firebase;