import React, { useCallback } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import { addProduct, sortProducts } from "./productsSlice";

const StyledDialog = styled.dialog`
  border: 1px solid black;
  border-radius: 10px;

  padding: 0 30px 30px 30px;

  h3 {
    text-align: center;
  }

  form {
    display: flex;
    flex-direction: column;

    margin-top: 10px;

    .input-block {
      display: flex;
      justify-content: flex-end;
      align-items: center;

      input {
        width: 170px;

        margin: 5px 0 10px 10px;
        padding: 3px 0 3px 5px;

        font-size: inherit;
      }

      label {
        padding-bottom: 5px;
      }
    }

    .buttons {
      display: flex;
      justify-content: space-around;

      margin-top: 15px;

      button {
        width: 80px;
        height: 30px;

        border-radius: 10px;

        font-size: inherit;
      }
    }
  }
`;

export const ProductModalWindow = () => {
  const dispatch = useDispatch();

  const formHandler = useCallback(
    (event) => {
      const target = event.target;
      if (target.tagName !== "BUTTON") return;

      const form = event.currentTarget;
      const formElems = form.elements;

      if (target.name === "submit") {
        const [name, price, available] = [
          formElems["name"].value,
          +formElems["price"].value,
          +formElems["available"].value,
        ];

        dispatch(addProduct(name, price, available));
        dispatch(sortProducts());
      }

      form.reset();
    },
    [dispatch]
  );

  return (
    <StyledDialog id="modal">
      <h3>Create New Product</h3>
      <form method="dialog" onClick={formHandler}>
        <div className="input-block">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            placeholder="Apple iPhone"
            minLength="2"
            maxLength="60"
            autoComplete="off"
          />
        </div>

        <div className="input-block">
          <label>Price:</label>
          <input
            type="number"
            name="price"
            placeholder="500"
            min="0"
            max="10000000"
            autoComplete="off"
          />
        </div>

        <div className="input-block">
          <label>Available:</label>
          <input
            type="number"
            name="available"
            placeholder="40"
            min="0"
            max="100000"
            autoComplete="off"
          />
        </div>

        <div className="buttons">
          <button name="submit">Submit</button>
          <button name="cancel">Cancel</button>
        </div>
      </form>
    </StyledDialog>
  );
};
