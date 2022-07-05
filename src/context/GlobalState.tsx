import React, { createContext, useReducer, useEffect } from "react";
import { ACTION } from "./Actions";
import AppReducer from "./Reducer";

let url = "https://fakestoreapi.com/products";

const initialState: any = {
  data: [],
  cart: [],
};

export const GlobalContext = createContext(initialState);

export function GlobalProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  const fetcher = async (url: string) => {
    const res = await fetch(url);
    const data = await res.json();
    dispatch({ type: ACTION.ADD_DATA, payload: data });
  };

  useEffect(() => {
    fetcher(url);
    console.log(initialState);
  }, []);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
}
