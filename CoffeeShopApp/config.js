import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAUvtwB4NqNm50VmDS9YHL38U-yNoXqY4k",
  authDomain: "expo-7b3c1.firebaseapp.com",
  projectId: "expo-7b3c1",
  storageBucket: "expo-7b3c1.firebasestorage.app",
  messagingSenderId: "843660951518",
  appId: "1:843660951518:web:186f910e8f792a8fd6a74f",
  measurementId: "G-HB5F1XY7LS"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {app, auth, db };
