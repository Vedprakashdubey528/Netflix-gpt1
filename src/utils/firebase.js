// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAvbfZfIEb7yG8Y0XMMRhQ4puXCxYsiV-U",
    authDomain: "netflixgpt-7a0ac.firebaseapp.com",
    projectId: "netflixgpt-7a0ac",
    storageBucket: "netflixgpt-7a0ac.appspot.com",
    messagingSenderId: "415886408180",
    appId: "1:415886408180:web:cb03722c024bc78071e1a1",
    measurementId: "G-C7D9RH2HE0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();