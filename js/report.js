// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCnXrkH-TSb0OwHNnMMBUGXWyaCBM3MfYQ",
    authDomain: "ligahuffazlanding.firebaseapp.com",
    projectId: "ligahuffazlanding",
    storageBucket: "ligahuffazlanding.appspot.com",
    messagingSenderId: "361196459523",
    appId: "1:361196459523:web:eb275685a409a761b72036",
    measurementId: "G-K5YNHKXX06"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
let date = new Date();
logEvent(analytics, 'landing', {
    dateTime: date
});