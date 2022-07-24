// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8Up4u9XSmDrR23XzQRZt04PzIE5XAYiM",
  authDomain: "ecommerce-dcfa7.firebaseapp.com",
  projectId: "ecommerce-dcfa7",
  storageBucket: "ecommerce-dcfa7.appspot.com",
  messagingSenderId: "969574945201",
  appId: "1:969574945201:web:cc0f1dc2e22a4d4ae22d90",
  measurementId: "G-M676VNT917",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const analytics = getAnalytics(app);
