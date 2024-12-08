// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "poem-app-1fcfa.firebaseapp.com",
  projectId: "poem-app-1fcfa",
  storageBucket: "poem-app-1fcfa.firebasestorage.app",
  messagingSenderId: "972899762942",
  appId: "1:972899762942:web:0274389c982e511dee1baf",
  measurementId: "G-0PTR7F3SDR"
};


export const app = initializeApp(firebaseConfig);
