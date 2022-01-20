// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMuqi-bohZDs0GZoW3TGPVCp4b8XJdU8Y",
  authDomain: "aicte-eval.firebaseapp.com",
  projectId: "aicte-eval",
  storageBucket: "aicte-eval.appspot.com",
  messagingSenderId: "16903454207",
  appId: "1:16903454207:web:404ab6d394c8aded613bca",
  measurementId: "G-SR9H9D0L2G",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
