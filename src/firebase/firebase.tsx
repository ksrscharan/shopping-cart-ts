import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
import { firebaseConfig } from "./firebaseConfig";

initializeApp(firebaseConfig);
var database = getFirestore();

export const collectionReference = collection(database, "products");

export { database };
