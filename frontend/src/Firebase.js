// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDkLpfjJ-E5hUKtiYpQo8TN8EVHa9LaBR4",
  authDomain: "new-project-1cc37.firebaseapp.com",
  projectId: "new-project-1cc37",
  storageBucket: "new-project-1cc37.appspot.com",
  messagingSenderId: "326946611901",
  appId: "1:326946611901:web:e8b40974eaf2ba22f60dd4",
  measurementId: "G-Z6QJQLSF2M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);