// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyARV8aVbL-ehIfJzkVV-ua7jJiVj0aOJkw",
  authDomain: "rw-gandhinagar.firebaseapp.com",
  projectId: "rw-gandhinagar",
  storageBucket: "rw-gandhinagar.firebasestorage.app",
  messagingSenderId: "634401431300",
  appId: "1:634401431300:web:d126be7e7b57944626ba51",
  measurementId: "G-L1R71T7J3M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);