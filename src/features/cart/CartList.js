import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { CartItem } from "./CartItem";

import { selectCartItemsIds, selectTotalPrice } from "./cartSlice";

const StyledSection = styled.section`
  margin-top: 20px;

  h2 {
    font-weight: normal;
    margin-bottom: 20px;
  }

  .button-container {
    display: flex;
    justify-content: center;

    button {
      font-size: inherit;

      padding: 6px 20px 5px 20px;

      border-radius: 2px;
    }
  }
`;

export const CartList = () => {
  const cartIds = useSelector(selectCartItemsIds);
  const totalPrice = useSelector((state) => selectTotalPrice(state));

  const cartItems = cartIds.map((itemId) => (
    <CartItem key={itemId} itemId={itemId} />
  ));

  return (
    <StyledSection>
      {cartIds.length === 0 ? (
        <span>Your cart is empty</span>
      ) : (
        <React.Fragment>
          <h2>Total price: {totalPrice}$</h2>
          {cartItems}
          <div className="button-container">
            <Link to="/summary">
              <button>Next</button>
            </Link>
          </div>
        </React.Fragment>
      )}
    </StyledSection>
  );
};
