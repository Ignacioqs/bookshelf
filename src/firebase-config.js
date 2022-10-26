import { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCJFQkYXeTGUkdjss2S10WkJwWekSlzjZY",
  authDomain: "bookshelf-3e64e.firebaseapp.com",
  projectId: "bookshelf-3e64e",
  storageBucket: "bookshelf-3e64e.appspot.com",
  messagingSenderId: "191324703135",
  appId: "1:191324703135:web:eb084a82f0df568a02d5aa",
  measurementId: "G-1HCNSS7WJZ",
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export function signup(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export const logout = () => {
  return signOut(auth);
};

export function useAuth() {
  const [currentUser, setCurrentUser] = useState();
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
    return unsub;
  }, []);
  return currentUser;
}
