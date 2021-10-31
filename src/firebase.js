// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyA_3GgkYOF1HgcOpbc0dl65Pt25k5Dp55c',
    authDomain: 'instagram-clone-f6002.firebaseapp.com',
    projectId: 'instagram-clone-f6002',
    storageBucket: 'instagram-clone-f6002.appspot.com',
    messagingSenderId: '722548961733',
    appId: '1:722548961733:web:f3edb8606e79bf364e1bac',
    measurementId: 'G-5ZDYVQCC2X',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };
