import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { GlobalContext } from "../context/GlobalState";
import { CartItem, NumberType } from "../context/types";

function NavBar(): JSX.Element {
  const { state } = useContext(GlobalContext);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-warning">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            Shopping Cart
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <Link to="/cart" className="navbar-text">
            Cart{" "}
            <small>
              ${" "}
              {state.cart
                .map((eachCart: CartItem) => eachCart.item.price)
                .reduce((a: NumberType, b: NumberType) => a + b, 0)
                .toFixed(2)}{" "}
              [ {state.cart.length} ]
            </small>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
