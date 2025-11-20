// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsccU5l5-0_DqlNNqibLyVFSoZPZQJcbg",
  authDomain: "fanzone-cdadc.firebaseapp.com",
  projectId: "fanzone-cdadc",
  storageBucket: "fanzone-cdadc.firebasestorage.app",
  messagingSenderId: "213915809851",
  appId: "1:213915809851:web:d7eea71e1f51d365abc41e",
  measurementId: "G-DTSS8YS2EV"
};

// Initialize Firebase (only once)
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

// Initialize Analytics only in browser environment
const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;

// Initialize Firestore
const db = getFirestore(app);

export { app, analytics, db };