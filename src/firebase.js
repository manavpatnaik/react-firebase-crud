import firebase from "firebase/app";
import "firebase/firestore";

let firebaseConfig = {
  apiKey: "AIzaSyDjZosGPQaK2Gigneej_bDWYlSvOvFLqNA",
  authDomain: "react-movies-crud.firebaseapp.com",
  projectId: "react-movies-crud",
  storageBucket: "react-movies-crud.appspot.com",
  messagingSenderId: "149559052589",
  appId: "1:149559052589:web:fdc436122f4dc6d5faaba4",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default db;
