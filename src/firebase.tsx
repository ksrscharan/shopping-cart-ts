// import firebase from "firebase/app";
// import 'firebase/firestore'
import { Config } from "./context/types";
import {initializeApp} from 'firebase/app'
import {
  getFirestore, collection, getDocs
} from 'firebase/firestore'
import { useContext } from "react";
import { GlobalContext } from "./context/GlobalState";


const firebaseConfig: Config = {
  apiKey: "AIzaSyCMOFfFhwdiatu0xVeNjtWHzhil4EvC1iE",
  authDomain: "react-shopping-cart-34a83.firebaseapp.com",
  projectId: "react-shopping-cart-34a83",
  storageBucket: "react-shopping-cart-34a83.appspot.com",
  messagingSenderId: "232619776290",
  appId: "1:232619776290:web:a0942a2c599e7f9b2b2d7b",
};

initializeApp(firebaseConfig);
var db = getFirestore()

export const colref = collection(db, 'products')

//get data


export { db };
