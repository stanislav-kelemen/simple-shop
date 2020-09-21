import React, {memo} from "react";
import {useDispatch, useSelector} from "react-redux";
import styled from "styled-components";

import {selectIsHiddenById, selectProductById} from "./productsSlice";
import {addToCart, selectCartItemById} from "../cart/cartSlice";

const StyledDiv = styled.div`
  padding: 15px 10px;
  margin: 10px;

  border: 1px solid black;

  width: 150px;
  height: 110px;

  line-height: 1.4em;

  h3 {
    margin: 0 0 8px 0;
  }

  .in-stock {
    color: #008000;
  }

  .few-in-stock {
    color: #ddb059;
  }

  .out-of-stock {
    color: red;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 10px;

  button {
    font-size: inherit;
    padding: 3px 15px;
    border-radius: 10px;
  }

  .all-in-cart {
    padding-top: 3px;
    font-style: italic;
  }
`;

export const ProductExcerpt = memo(({productId}) => {
  const dispatch = useDispatch();
  const product = useSelector((state) => selectProductById(state, productId));
  const cartItem = useSelector((state) => selectCartItemById(state, productId));
  const isHidden = useSelector((state) => selectIsHiddenById(state, productId));

  const itemsInStock = product.available;

  const isAvailable = itemsInStock > 0;

  const isFew = itemsInStock < 5;
  const isMaxInCart = cartItem && cartItem.itemCount >= itemsInStock;

  const newCartItem = {
    id: product.id,
    name: product.name,
    price: product.price,
    itemCount: 1,
  };

  return (
    <StyledDiv className={isHidden ? 'hidden' : ''}>
      <h3>{product.name}</h3>
      <div>
        Price: <i>{product.price}</i>
      </div>
      <div>
        {isAvailable ? (
          <span title={`${itemsInStock} left`}>
            {isFew ? (
              <span className="few-in-stock">A few left</span>
            ) : (
              <span className="in-stock">In stock</span>
            )}
          </span>
        ) : (
          <span className="out-of-stock">Out of stock</span>
        )}
      </div>
      <ButtonContainer>
        {isMaxInCart ? (
          <span className="all-in-cart">all in cart</span>
        ) : (
          <button
            disabled={!isAvailable}
            onClick={() => dispatch(addToCart(newCartItem))}
          >
            add to cart
          </button>
        )}
      </ButtonContainer>
    </StyledDiv>
  )
});
