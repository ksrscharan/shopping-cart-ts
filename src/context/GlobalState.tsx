import React, { createContext, useReducer } from "react";
import AppReducer from "./Reducer";

const initialState: React.ComponentState = {
  cart: [],
  details: {},
  products: [],
};

export const GlobalContext = createContext(initialState);

export function GlobalProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
}
