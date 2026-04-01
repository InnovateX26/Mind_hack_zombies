import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-life-interview.firebaseapp.com",
  projectId: "real-life-interview",
  storageBucket: "real-life-interview.firebasestorage.app",
  messagingSenderId: "860641653675",
  appId: "1:860641653675:web:7582983654655a5c0718ee",
  measurementId: "G-DVYZ77587W"
};
const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();