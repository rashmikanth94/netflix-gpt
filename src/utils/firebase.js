// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBX8YBbk7soi_q_cE4VvWxmGwUOXwZUVYc",
  authDomain: "netflixgpt-5f89e.firebaseapp.com",
  projectId: "netflixgpt-5f89e",
  storageBucket: "netflixgpt-5f89e.firebasestorage.app",
  messagingSenderId: "889106000465",
  appId: "1:889106000465:web:445cf2dbd849e463fae670"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();


