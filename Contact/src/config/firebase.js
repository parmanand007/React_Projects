// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDp5z74Mhh-HCCge9qvuCf8Nu_fYgLCFck",
  authDomain: "vite-contact-7f336.firebaseapp.com",
  projectId: "vite-contact-7f336",
  storageBucket: "vite-contact-7f336.appspot.com",
  messagingSenderId: "522552055177",
  appId: "1:522552055177:web:cdbb7eb50cc38ce1387d58"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db =  getFirestore(app);