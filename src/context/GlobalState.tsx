import { getDocs } from "firebase/firestore";
import React, { createContext, useReducer, useEffect } from "react";
import { colref, db } from "../firebase";
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

  getDocs(colref).then((snapshot) => {
    let docs: any = [];
    snapshot.forEach((doc) => {
      docs.push({ ...doc.data(), id: doc.id });
    });
    dispatch({ type: ACTION.SET_RES, payload: docs });
  });
  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
}
