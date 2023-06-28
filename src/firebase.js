// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {GoogleAuthProvider} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7DHrxEHRZF-KxZ2_oMb1aml5d10v2L5k",
  authDomain: "fir-login-54ed2.firebaseapp.com",
  projectId: "fir-login-54ed2",
  storageBucket: "fir-login-54ed2.appspot.com",
  messagingSenderId: "83958935720",
  appId: "1:83958935720:web:e527eaa40be3e24280929d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {auth, provider}