import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import {
  changeActive,
  selectNavigationIds,
} from "../features/navigation/navigationSlice";
import { NavLink } from "../features/navigation/NavLink";

const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;

  padding-top: 20px;

  width: 200px;

  font-size: 18px;
  line-height: 1.4em;
  text-align: center;

  border-right: 2px solid black;

  .active {
    box-shadow: 0 0 0 1px black;
    background-color: #e9e9e9;
  }
`;

export const Navbar = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const navigationIds = useSelector(selectNavigationIds);

  useEffect(() => {
    if (history.location.pathname === "/") return;
    history.push("/");
  }, [history]);

  const links = navigationIds.map((linkId) => (
    <NavLink key={linkId} linkId={linkId} />
  ));

  const highlightNavLink = (event) => {
    if (event.target.tagName !== "A") return;

    dispatch(changeActive(event.target.id));
  };

  return <StyledNav onClick={highlightNavLink}>{links}</StyledNav>;
};
