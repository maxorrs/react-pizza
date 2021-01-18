import React from 'react';
import {Switch, Route, BrowserRouter, Redirect} from 'react-router-dom';

import MainPage from '../pages/main-page/main-page';
import CartPage from '../pages/cart-page/cart-page';

import '../../scss/style.scss';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route exact path="/cart">
          <CartPage />
        </Route>
        <Route>
          <Redirect to="/" />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
