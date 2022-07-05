import React, { useContext } from "react";

import { ACTION } from "../context/Actions";
import { GlobalContext } from "../context/GlobalState";
import { Element, NumberType } from "../context/types";

function Cards(): JSX.Element {
  const { state, dispatch } = useContext(GlobalContext);

  return (
    <>
      {state.data.map((element: Element, index: NumberType) => (
        <div
          className="card col-md-6 m-2 bg-light"
          style={{ maxWidth: "540px" }}
          key={index}
        >
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={element.image}
                className="img-fluid rounded-start"
                alt="Product_Image"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{element.title}</h5>
                <p className="card-text">Category: {element.category}</p>{" "}
                <h5 className="card-text">
                  <small className="text-muted">$ </small>
                  {element.price}
                </h5>
                <button
                  className="btn btn-outline-warning"
                  onClick={() => {
                    dispatch({
                      type: ACTION.ADD_TO_CART,
                      payload: { id: Date.now(), item: element },
                    });
                  }}
                >
                  ADD TO CART
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Cards;
