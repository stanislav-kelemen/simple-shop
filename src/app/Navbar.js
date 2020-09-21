import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";

import {
  changeActive,
  selectActiveById,
} from "../features/navigation/navigationSlice";

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

const NavLink = ({ id, to, content }) => {
  const active = useSelector((state) => selectActiveById(state, id));

  return (
    <Link id={id} to={to} className={active ? "active" : ""}>
      {content}
    </Link>
  );
};

export const Navbar = () => {
  const dispatch = useDispatch();

  const history = useHistory();

  useEffect(() => {
    if (history.location.pathname === "/") return;
    history.push("/");
  }, [history]);

  const highlightNavLink = (event) => {
    if (event.target.tagName !== "A") return;

    dispatch(changeActive(event.target.id));
  };

  return (
    <StyledNav onClick={highlightNavLink}>
      <NavLink id="products" to="/" content="Products" />
      <NavLink id="cart" to="/cart" content="Cart" />
    </StyledNav>
  );
};
