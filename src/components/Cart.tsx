import React, { useContext } from "react";

import { ACTION } from "../context/Actions";
import { GlobalContext } from "../context/GlobalState";
import { CartItem, NumberType } from "../context/types";
import NavBar from "./NavBar";

function Cart(): JSX.Element {
  const { state, dispatch } = useContext(GlobalContext);

  return (
    <>
      <NavBar />
      <div className="container-fluid">
        <div className="row justify-content-center">
          {state.cart.map((cartItem: CartItem, i: NumberType) => (
            <div className="card col-md-3 m-2 bg-light" key={i}>
              <div className="card-body">
                <h2>
                  {cartItem.item.title}: $ {cartItem.item.price}
                </h2>
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    dispatch({
                      type: ACTION.DELETE_CART_ITEM,
                      payload: cartItem.id,
                    });
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
        {!state.cart.length && (
          <h2 style={{ textAlign: "center" }}>
            Your Cart Is Empty!
            <br />
            Try Adding A Laptop or an Bracelet!
          </h2>
        )}
      </div>
    </>
  );
}

export default Cart;
