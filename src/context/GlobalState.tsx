import React, { createContext, useReducer, useEffect } from "react";
import { db } from "../firebase";
import { ACTION } from "./Actions";
import AppReducer from "./Reducer";

// const url = "https://fakestoreapi.com/products";

const initialState: any = {
  data: [],
  cart: [],
  details: {},
  res: [],
};

export const GlobalContext = createContext(initialState);

export function GlobalProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // const fetcher = async (url: string) => {
  //   const res = await fetch(url);
  //   const data = await res.json();
  //   dispatch({ type: ACTION.ADD_DATA, payload: data });
  // };

  // const [details, setDetails] = useState({ title: "", category: "", price: "" });
  // const [res, setRes]: any = useState([]);

  useEffect(() => {
    let dataFromFirebase: any = [];
    const subscriber = db.collection("products").onSnapshot((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        dataFromFirebase.push(
          {
            ...doc.data(),
            key: doc.id,
          })
          dispatch({ type: ACTION.SET_RES, payload: dataFromFirebase.pop() });
        });
    });

    return () => subscriber();
  }, []);
  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
}
