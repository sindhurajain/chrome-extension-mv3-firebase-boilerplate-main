import { initializeApp } from 'firebase/app';

// TODO Fill Me! 
// Find my details from Firebase Console

// config after registering firebase App 
const config = {
    apiKey: "AIzaSyBTh6714aRtNBNLJ194XgaNMDGa7d3D-do",
    authDomain: "chrome-try-4.firebaseapp.com",
    projectId: "chrome-try-4",
    storageBucket: "chrome-try-4.appspot.com",
    messagingSenderId: "691159423184",
    appId: "1:691159423184:web:070d66e6361a4b083ee6d5",
    measurementId: "G-W6D48SWGSY"
};

// This creates firebaseApp instance
// version: SDK 9
const firebaseApp = initializeApp(config)

export{
    firebaseApp
}