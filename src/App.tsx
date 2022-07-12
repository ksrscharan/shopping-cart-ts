import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { GlobalProvider } from "./context/GlobalState";
import HomePage from "./components/HomePage";
import Cart from "./components/Cart";
import Submit from "./components/SubmitToFirebase";

function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/submit" element={<Submit />} />
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;
