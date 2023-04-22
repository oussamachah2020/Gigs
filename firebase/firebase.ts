// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCHIM1_cbJolkKcqIzda1PglRilj1t9btM",
  authDomain: "gigs-8e940.firebaseapp.com",
  projectId: "gigs-8e940",
  storageBucket: "gigs-8e940.appspot.com",
  messagingSenderId: "397382650471",
  appId: "1:397382650471:web:3163023dd552351cefa2c2",
  measurementId: "G-QDW1B8801Q",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebaseApp.auth();
export { auth };
