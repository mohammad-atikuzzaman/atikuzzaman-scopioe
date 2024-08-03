// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcX4yKiV3bLRTpMoT2hkgNxWuqUThuadY",
  authDomain: "scopioe-4b402.firebaseapp.com",
  projectId: "scopioe-4b402",
  storageBucket: "scopioe-4b402.appspot.com",
  messagingSenderId: "893708139897",
  appId: "1:893708139897:web:0ce5e4bef5cd3e03b103a8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth