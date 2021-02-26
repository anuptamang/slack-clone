import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyAT1Td46pum735iUwRUjbvTMWVs0Q_HRwg',
  authDomain: 'slack-app-2b40e.firebaseapp.com',
  projectId: 'slack-app-2b40e',
  storageBucket: 'slack-app-2b40e.appspot.com',
  messagingSenderId: '421835385001',
  appId: '1:421835385001:web:466a133102a2ba1a4ce1b8',
  measurementId: 'G-9F7H5CJNK2'
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;

