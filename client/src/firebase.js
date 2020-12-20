// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAU9FwXGjSR4yTO5vsnSCnFBta0CYwdens',
  authDomain: 'tinder-clone-af013.firebaseapp.com',
  projectId: 'tinder-clone-af013',
  storageBucket: 'tinder-clone-af013.appspot.com',
  messagingSenderId: '120970392747',
  appId: '1:120970392747:web:4150c89c5c866736acf3ee',
  measurementId: 'G-H1031TEZCX',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
