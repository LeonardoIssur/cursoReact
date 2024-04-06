import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAlIcA9J7t86kKpKS9PxOJ534gdB9vOV_E",
  authDomain: "issurgames.firebaseapp.com",
  projectId: "issurgames",
  storageBucket: "issurgames.appspot.com",
  messagingSenderId: "975920679879",
  appId: "1:975920679879:web:ff8b7a788079696908a7e2"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)