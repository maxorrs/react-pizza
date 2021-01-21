import React, {memo} from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';

import Header from '../../header/header';
import Cart from '../../cart/cart';
import CartEmpty from '../../cart-empty/cart-empty';
import Footer from '../../footer/footer';

import {getCartSelector} from '../../../store/reducers/cart/selectors';
import {cartPropTypes} from '../../../utils/prop-types';

import './cart-page.scss';

const CartPage = ({cart}) => {
  const isEmptyCart = cart.length === 0;

  return (
    <div className="page page--yellow page--cart">
      <Header />
      {isEmptyCart ? <CartEmpty /> : <Cart />}
      <Footer />
    </div>
  );
};

CartPage.propTypes = {
  cart: cartPropTypes,
};

const mapStateToProps = (state) => ({
  cart: getCartSelector(state),
});

export default compose(connect(mapStateToProps), memo)(CartPage);
