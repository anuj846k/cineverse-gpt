// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1nnM_tHP4y2Qe7xeOjJbX0AbLCuurB6A",
  authDomain: "cineversegpt-a66af.firebaseapp",
  projectId: "cineversegpt-a66af",
  storageBucket: "cineversegpt-a66af.appspot.com",
  messagingSenderId: "201349572852",
  appId: "1:201349572852:web:317617f818df47678656a1",
  measurementId: "G-EVGD1WTL2Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
