import { initializeApp } from 'firebase/app';
import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBhdvbeOAA-9lrjBkiDGXESuHCif-A7Pec",
    authDomain: "drag-and-drop-f8f53.firebaseapp.com",
    projectId: "drag-and-drop-f8f53",
    storageBucket: "drag-and-drop-f8f53.appspot.com",
    messagingSenderId: "883290131941",
    appId: "1:883290131941:web:23593e36bd1d0a0580730c",
    measurementId: "G-159N8NBMST"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, doc, setDoc, getDoc };
