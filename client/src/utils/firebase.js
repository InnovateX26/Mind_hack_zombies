import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey:"AIzaSyAiL6soTy0x4_IT54IQwkbYSPo-5GMrFlI",
  authDomain: "ai-interview-simulator-af8b4.firebaseapp.com",
  projectId:"ai-interview-simulator-af8b4",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();