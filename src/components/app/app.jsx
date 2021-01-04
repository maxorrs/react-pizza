import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

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
          <h1>404</h1>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
