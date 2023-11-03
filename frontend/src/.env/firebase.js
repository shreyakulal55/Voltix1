// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDls_RTqCR15nqrkuGKG6IYDRjA1zgAO_o",
  authDomain: "voltixteam-2a395.firebaseapp.com",
  projectId: "voltixteam-2a395",
  storageBucket: "voltixteam-2a395.appspot.com",
  messagingSenderId: "108995946756",
  appId: "1:108995946756:web:e4f3e68e55d4dcd7474851",
  measurementId: "G-Y0F0PPLM98"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);