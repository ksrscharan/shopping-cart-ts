import { getDocs } from "firebase/firestore";
import { useContext } from "react";
import { ACTION } from "../context/Actions";
import { GlobalContext } from "../context/GlobalState";
import { collectionReference } from "../firebase/firebase";

const GetProducts = () => {
  const { dispatch } = useContext(GlobalContext);

  getDocs(collectionReference).then((snapshot) => {
    let docs: { id: string }[] = [];
    snapshot.forEach((doc) => {
      docs.push({
        ...doc.data(),
        id: doc.id,
      });
    });
    dispatch({ type: ACTION.SET_PRODUCTS, payload: docs });
  });
};
export { GetProducts };
