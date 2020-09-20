import React from "react";
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import styled from "styled-components";
import "./App.css";

import { Header } from "./app/Header";
import { Navbar } from "./app/Navbar";
import { CartList } from "./features/cart/CartList";
import { Summary } from "./features/cart/Summary";
import { ProductModalWindow } from "./features/products/ProductModalWindow";
import { ProductsList } from "./features/products/ProductsList";
import { SortBy } from "./features/products/SortBy";

const Wrapper = styled.div`
  position: absolute;

  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;

  main {
    display: flex;
    flex-grow: 1;

    article {
      flex-grow: 1;
      padding: 0 25px 0 20px;
    }
  }
`;

const isDialogSupported = () =>
  typeof HTMLDialogElement === "function" && <ProductModalWindow />;

function App() {
  return (
    <Router basename="/">
      <Wrapper>
        {isDialogSupported()}
        <Header />
        <main>
          <Navbar />
          <article>
            <Switch>
              <Route exact path="/">
                <SortBy />
                <ProductsList />
              </Route>

              <Route exact path="/cart">
                <CartList />
              </Route>

              <Route exact path="/summary">
                <Summary />
              </Route>

              <Redirect to="/" />
            </Switch>
          </article>
        </main>
      </Wrapper>
    </Router>
  );
}

export default App;
