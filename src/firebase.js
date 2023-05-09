// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkksZmJsytyFElN4B5efHU3LvSm81-ReU",
  authDomain: "react-project-90d77.firebaseapp.com",
  projectId: "react-project-90d77",
  storageBucket: "react-project-90d77.appspot.com",
  messagingSenderId: "750419513452",
  appId: "1:750419513452:web:3bbf28e6c306675d5a8849",
  measurementId: "G-GXNNLN2D2Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);