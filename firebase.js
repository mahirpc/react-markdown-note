// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD_RaeJyexyqlaJMMxn5KALtKYMxQ29-1k",
    authDomain: "react-markdown-note-a3248.firebaseapp.com",
    projectId: "react-markdown-note-a3248",
    storageBucket: "react-markdown-note-a3248.appspot.com",
    messagingSenderId: "683923469407",
    appId: "1:683923469407:web:058814035b9809b09c17ea"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); 

export const notesCollection = collection(db, "notes");