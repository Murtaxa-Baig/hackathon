// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCh14DUBc_zi49syBcuGdXybtLQ3jw1600",
  authDomain: "hackathon-61f83.firebaseapp.com",
  projectId: "hackathon-61f83",
  storageBucket: "hackathon-61f83.appspot.com",
  messagingSenderId: "145290652496",
  appId: "1:145290652496:web:912c446bbe227f8fd4da55"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)