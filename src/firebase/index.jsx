import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDoXcJoUzFdRO4c5MDdCpsvfpwW4rKRXtg',
  authDomain: 'restaurante-g32.firebaseapp.com',
  projectId: 'restaurante-g32',
  storageBucket: 'restaurante-g32.appspot.com',
  messagingSenderId: '611363148422',
  appId: '1:611363148422:web:d49fb7969e350299e07707',
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db, firebase };
