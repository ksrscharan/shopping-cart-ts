import React, { useContext } from "react";
import { ACTION } from "../context/Actions";
import { GlobalContext } from "../context/GlobalState";
import { addProducts } from "../service/addProducts";
import NavBar from "./NavBar";

function SubmitToFirebase() {
  const { state, dispatch } = useContext(GlobalContext);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addProducts(state, dispatch);
    dispatch({ action: ACTION.RESET_DETAILS });
  };
  return (
    <>
      <NavBar />
      <div className="form-group container">
        <form className="row justify-content-lg-center" onSubmit={handleSubmit}>
          <h2 className="text-center">SUBMIT PRODUCTS</h2>
          <input
            className="form-control m-3"
            type="text"
            value={state.details.title}
            placeholder="Item Title"
            onChange={(e) => {
              dispatch({
                type: ACTION.SET_DETAILS_TITLE,
                payload: e.target.value,
              });
            }}
          />

          <input
            type="text"
            className="form-control m-3"
            value={state.details.category}
            placeholder="Item Category"
            onChange={(e) => {
              dispatch({
                type: ACTION.SET_DETAILS_CATEGORY,
                payload: e.target.value,
              });
            }}
          />
          <input
            type="text"
            className="form-control col mt-3"
            value={state.details.price}
            placeholder="Price"
            onChange={(e) => {
              dispatch({
                type: ACTION.SET_DETAILS_PRICE,
                payload: e.target.value,
              });
            }}
          />
          <input
            type="text"
            className="form-control col mt-3"
            value={state.details.image}
            placeholder="Image URL"
            onChange={(e) => {
              dispatch({
                type: ACTION.SET_DETAILS_IMAGE,
                payload: e.target.value,
              });
            }}
          />
          <button className="btn btn-success mt-3" type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default SubmitToFirebase;
