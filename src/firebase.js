import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDPlgmTFmoz5pce0BtlhjK5MZx6iE9wTXM",
  authDomain: "chat-e2cda.firebaseapp.com",
  projectId: "chat-e2cda",
  storageBucket: "chat-e2cda.appspot.com",
  messagingSenderId: "246695594803",
  appId: "1:246695594803:web:ecb4d5bb0f8a2b4cc2cc46"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()