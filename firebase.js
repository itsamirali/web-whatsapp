import firebase from "firebase"
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDm22G3zcPGjtzz-nyGcf6jb6VfIf7TyCI",
  authDomain: "web-whatsapp-v1.firebaseapp.com",
  projectId: "web-whatsapp-v1",
  storageBucket: "web-whatsapp-v1.appspot.com",
  messagingSenderId: "924102173204",
  appId: "1:924102173204:web:ef3548cfe3ab7a93a9fd01"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = app.firestore()
const auth = app.auth()

const provider = new firebase.auth.GoogleAuthProvider()

export {db, auth, provider}