import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAcYozN2iRUlaxVF6KKLo2niPiVlFnrZ18",
  authDomain: "ai-interview-project-d7343.firebaseapp.com",
  projectId: "ai-interview-project-d7343",
  storageBucket: "ai-interview-project-d7343.firebasestorage.app",
  messagingSenderId: "72423366327",
  appId: "1:72423366327:web:569435ca7528d74af43732",
  measurementId: "G-RYN31QFPRL"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();