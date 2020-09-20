import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

import { changeActive } from "../features/navigation/navigationSlice";
import { selectCartCount } from "../features/cart/cartSlice";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;

  padding: 10px 50px 10px 50px;

  border-bottom: 2px solid black;

  h1 {
    font-size: 30px;
  }

  .header-right {
    display: flex;
    align-items: center;

    button {
      margin-right: 40px;

      height: 30px;
      width: 120px;

      border-radius: 2px;
      border: 1px solid black;

      font-size: inherit;
    }

    h2 {
      width: 100px;
      font-weight: normal;
    }
  }
`;

export const Header = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const cartCount = useSelector((state) => selectCartCount(state));

  const highlightNavLink = (event) => {
    const clickedElementId = event.target.id;
    if (!clickedElementId || !["products", "cart"].includes(event.target.id))
      return;
    dispatch(changeActive(event.target.id));
  };

  const isShoppingFinished = () =>
    location.pathname === "/summary" ? 0 : cartCount;

  const isDialogSupported = () =>
    typeof HTMLDialogElement === "function" && (
      <button onClick={() => document.getElementById("modal").showModal()}>
        new product
      </button>
    );

  return (
    <StyledHeader onClick={highlightNavLink}>
      <h1>
        <Link id="products" to="/">
          My simple shop
        </Link>
      </h1>
      <div className="header-right">
        {isDialogSupported()}
        <Link id="cart" to="/cart">
          <h2>Cart {isShoppingFinished()}</h2>
        </Link>
      </div>
    </StyledHeader>
  );
};
