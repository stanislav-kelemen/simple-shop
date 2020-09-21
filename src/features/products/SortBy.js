import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import {
  changeIsAscending,
  changeIsOutVisible,
  changeSortBy,
  reverseOrder,
  selectIsAscending,
  selectIsOutVisible,
  selectSortBy,
  sortProducts,
} from "./productsSlice";

const StyledDiv = styled.div`
  display: flex;
  align-items: center;

  margin: 15px 0 15px 10px;

  select {
    font-size: inherit;
    font-family: inherit;

    height: 30px;
    width: 110px;

    border-radius: 0;

    &:focus {
      outline: transparent;
    }
  }

  button {
    margin-left: 5px;
    padding-bottom: 3px;

    background-color: #e9e7e7;

    font-size: inherit;

    height: 30px;
    width: 30px;

    border: 1px solid black;
  }

  .checkbox-container {
    display: flex;
    align-items: center;

    margin: 3px 0 0 25px;

    input {
      margin-right: 10px;
    }
  }
`;

const SelectSortBy = () => {
  const dispatch = useDispatch();
  const sortBy = useSelector(selectSortBy);

  return (
    <select
      onChange={(e) => {
        dispatch(changeSortBy(e.target.value));
        dispatch(sortProducts());
      }}
      defaultValue={sortBy}
    >
      <option value="name">Name</option>
      <option value="price">Price</option>
      <option value="availability">Available</option>
    </select>
  );
};
const OrderButton = () => {
  const dispatch = useDispatch();
  const isAscending = useSelector(selectIsAscending);

  return (
    <button
      onClick={() => {
        dispatch(changeIsAscending(!isAscending));
        dispatch(reverseOrder());
      }}
    >
      {isAscending ? "↑" : "↓"}
    </button>
  );
};

const OutCheckbox = () => {
  const dispatch = useDispatch();
  const isOutVisible = useSelector(selectIsOutVisible);

  return (
    <div className="checkbox-container">
      <input
        type="checkbox"
        onClick={() => dispatch(changeIsOutVisible())}
        defaultChecked={isOutVisible}
      />
      <label>Show non-available</label>
    </div>
  );
};

export const SortBy = () => (
  <StyledDiv>
    <SelectSortBy />
    <OrderButton />
    <OutCheckbox />
  </StyledDiv>
);
