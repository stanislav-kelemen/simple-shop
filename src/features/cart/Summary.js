import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import {
  emptyCart,
  selectAllCartItems,
  selectCartCount,
  selectTotalPrice,
} from "./cartSlice";
import { buyCart } from "../products/productsSlice";

const StyledArticle = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  h2,
  h3 {
    margin: 0;
  }

  .congratulations {
    margin: 25px 0 30px 0;

    text-align: center;

    h3 {
      margin-top: 5px;
      font-weight: normal;
    }
  }

  .total {
    display: flex;
    justify-content: space-around;

    margin-top: 25px;

    h3 span {
      font-weight: normal;
    }
  }
`;

const StyledTable = styled.table`
  border: 1px solid black;
  border-collapse: collapse;

  th,
  td {
    border: 1px solid black;

    padding: 5px 10px;

    text-align: center;
  }

  td:first-child {
    text-align: left;
  }

  th {
    background-color: #e9e9e9;
  }
`;

export const Summary = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectAllCartItems);
  const totalPrice = useSelector((state) => selectTotalPrice(state));
  const cartCount = useSelector((state) => selectCartCount(state));

  useEffect(() => {
    return () => {
      dispatch(buyCart(cartItems));
      dispatch(emptyCart());
    };
  }, [dispatch, cartItems]);

  return (
    <StyledArticle>
      <section className="congratulations">
        <h2>Successful shopping!</h2>
        <h3>Thank you</h3>
      </section>
      <section>
        <StyledTable>
          <thead>
            <tr>
              <th>Products</th>
              <th>Price</th>
              <th>Amount</th>
              <th>Sum</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.itemCount}</td>
                <td>{item.price * item.itemCount}</td>
              </tr>
            ))}
          </tbody>
        </StyledTable>
        <div className="total">
          <h3>
            Items: <span>{cartCount} items</span>
          </h3>
          <h3>
            Cost: <span>{totalPrice}$</span>
          </h3>
        </div>
      </section>
    </StyledArticle>
  );
};
