// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyBbXHYnsmlflB6tbXggTjKynfBmcQFpSPE',
    authDomain: 'instagram-clone-2-3e93b.firebaseapp.com',
    projectId: 'instagram-clone-2-3e93b',
    storageBucket: 'instagram-clone-2-3e93b.appspot.com',
    messagingSenderId: '765457595442',
    appId: '1:765457595442:web:f808dbf895170434fb902b',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };
