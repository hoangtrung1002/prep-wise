// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAJMFLc-ppHdw83ChL4HvYd0UgnwrQvAHw",
  authDomain: "prepwise-48808.firebaseapp.com",
  projectId: "prepwise-48808",
  storageBucket: "prepwise-48808.firebasestorage.app",
  messagingSenderId: "869119556245",
  appId: "1:869119556245:web:debab54ad90d775c55f99c",
  measurementId: "G-155S94MJ3V",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
