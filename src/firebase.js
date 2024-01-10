import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: "web-chat-app-50110.firebaseapp.com",
    projectId: "web-chat-app-50110",
    storageBucket: "web-chat-app-50110.appspot.com",
    messagingSenderId: "206451823303",
    appId: "1:206451823303:web:a2f6cc3b0ac05367d164e2",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();