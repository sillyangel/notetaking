// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCa7-TQS9bJsa2QYNKtnlNn5fI6h0S41Tk",
  authDomain: "notetakingsm.firebaseapp.com",
  projectId: "notetakingsm",
  storageBucket: "notetakingsm.appspot.com",
  messagingSenderId: "798766539790",
  appId: "1:798766539790:web:a1b7059376aa1c087a485f",
  measurementId: "G-7C0PZ5VHG1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);