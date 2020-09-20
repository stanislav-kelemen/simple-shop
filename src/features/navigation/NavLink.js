import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";

import { selectNavigationById } from "./navigationSlice";

const StyledDiv = styled.div`
  display: flex;
  margin-bottom: 3px;

  a {
    padding: 1px 0;
    width: 100%;
    height: 100%;
  }
`;

export const NavLink = ({ linkId }) => {
  const link = useSelector((state) => selectNavigationById(state, linkId));

  return (
    <StyledDiv className={link.className}>
      <Link id={linkId} to={link.to}>
        {link.content}
      </Link>
    </StyledDiv>
  );
};
