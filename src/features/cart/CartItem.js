import React, { memo, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { changeItemCount, deleteItem, selectCartItemById } from "./cartSlice";

import { selectAvailableById } from "../products/productsSlice";

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  flex-grow: 1;

  margin-bottom: 20px;
  padding: 0 10px;
  height: 40px;

  border: 1px solid #8f8f8f;
  border-radius: 2px;

  .carrItem-left {
    display: flex;
    align-items: center;
  }

  h4 {
    padding: 0;
    margin-right: 10px;
  }

  input {
    font-size: inherit;
    text-align: right;

    width: 50px;
    margin: 0 20px 0 15px;

    border: 1px solid black;
    border-radius: 5px;

    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      opacity: 1;
    }

    &:focus {
      outline: transparent;
    }
  }

  button {
    margin: 0 0 2px 15px;
    padding: 0 3px 1px 3px;

    font-size: 12px;

    border-radius: 15px;
  }
`;

export const CartItem = memo(({ itemId }) => {
  const dispatch = useDispatch();
  const available = useSelector((state) => selectAvailableById(state, itemId));
  const item = useSelector((state) => selectCartItemById(state, itemId));
  const [isWarningHidden, setIsWarningHidden] = useState("hidden");

  const itemCountHandler = (event) => {
    let value = event.target.value;

    if (value === "") {
      event.target.value = "";
      return;
    }

    if (!value || value <= 0) value = 1;

    if (value > available) {
      value = available;
      setIsWarningHidden("");
    }

    event.target.value = value;
    dispatch(changeItemCount(itemId, value));
  };

  useEffect(() => {
    let timerId;

    if (item.itemCount === available) {
      if (isWarningHidden === "") {
        timerId = setTimeout(() => {
          setIsWarningHidden("hidden");
        }, 2000);
      }
    }

    return () => clearTimeout(timerId);
  }, [item.itemCount, available, isWarningHidden]);

  return (
    <StyledDiv>
      <div className="carrItem-left">
        <h4>{item.name}</h4>
        <span>({item.price * item.itemCount}$)</span>
      </div>
      <div>
        <span className={isWarningHidden}>
          <i>no more in stock</i>
        </span>
        <input
          type="number"
          onInput={itemCountHandler}
          defaultValue={item.itemCount}
        />
        <button onClick={() => dispatch(deleteItem(itemId))}>✖</button>
      </div>
    </StyledDiv>
  );
});
