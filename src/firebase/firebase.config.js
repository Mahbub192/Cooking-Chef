// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBj9aLjX3s0NHYIX6gFx0-lsYfBj7T1byg",
  authDomain: "cooking-chef-aef2c.firebaseapp.com",
  projectId: "cooking-chef-aef2c",
  storageBucket: "cooking-chef-aef2c.appspot.com",
  messagingSenderId: "43192614975",
  appId: "1:43192614975:web:562764e98997e0f169788a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;