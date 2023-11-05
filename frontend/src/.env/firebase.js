// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkiamlOPtf7yFustMbcmZIp3fNHk4S2Qo",
  authDomain: "voltixcloud.firebaseapp.com",
  projectId: "voltixcloud",
  storageBucket: "voltixcloud.appspot.com",
  messagingSenderId: "91471382924",
  appId: "1:91471382924:web:6f1eab29f4bdbd2fe62ea9",
  measurementId: "G-N2RRB34HHC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);