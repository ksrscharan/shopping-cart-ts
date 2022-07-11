import { addDoc } from "firebase/firestore";
import { ACTION } from "../context/Actions";
import { State } from "../context/types";
import { collectionReference } from "../firebase/firebase";

export const addProducts = (state: State, dispatch: any) => {
  addDoc(collectionReference, {
    title: state.details.title,
    category: state.details.category,
    price: state.details.price,
    image: state.details.image,
  })
    .then(() => {
      alert("Message is sent! ");
    })
    .catch((e: Error) => alert(e.message));
  dispatch({ action: ACTION.RESET_DETAILS });
};
