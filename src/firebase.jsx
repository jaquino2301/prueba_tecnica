import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyBwW8lE8DpL8mKUDsTG0W9F4Jm3wixkCUE",
  authDomain: "prueba-tecnica-7055b.firebaseapp.com",
  databaseURL: "https://prueba-tecnica-7055b-default-rtdb.firebaseio.com",
  projectId: "prueba-tecnica-7055b",
  storageBucket: "prueba-tecnica-7055b.appspot.com",
  messagingSenderId: "234509519646",
  appId: "1:234509519646:web:0cdab8249b69c8ec0cd70f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
