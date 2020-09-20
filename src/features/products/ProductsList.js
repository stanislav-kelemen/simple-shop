import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import {
  fetchProducts,
  selectProductsIds,
  sortProducts,
} from "./productsSlice";

import { ProductExcerpt } from "./ProductExcerpt";

const StyledSection = styled.section`
  display: flex;
  flex-wrap: wrap;
`;

export const ProductsList = () => {
  const dispatch = useDispatch();
  const orderedProductsIds = useSelector(selectProductsIds);

  const productsStatus = useSelector((state) => state.products.status);
  const error = useSelector((state) => state.products.error);

  useEffect(() => {
    if (productsStatus === "idle") {
      dispatch(fetchProducts());
      dispatch(sortProducts());
    }
  }, [productsStatus, dispatch]);

  let renderedProducts = () => {
    switch (productsStatus) {
      case "loading":
        return <div>Loading...</div>;
      case `succeeded`:
        return orderedProductsIds.map((productId) => (
          <ProductExcerpt key={productId} productId={productId} />
        ));
      case "failed":
        return <div>{error}</div>;
      default:
        break;
    }
  };

  return <StyledSection>{renderedProducts()}</StyledSection>;
};
