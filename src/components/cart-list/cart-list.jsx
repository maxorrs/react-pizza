import React from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';

import PizzaCart from '../pizza-cart/pizza-cart';

import {getCartSelector} from '../../store/reducers/cart/selectors';
import {cartPropTypes} from '../../utils/prop-types';

import './cart-list.scss';

const CartList = ({cart}) => {
  return (
    <ul className="cart__cart-list cart-list">
      {cart.map((pizza) => {
        return (
          <li className="cart-list__item" key={pizza.id}>
            <PizzaCart pizza={pizza} />
          </li>
        );
      })}
    </ul>
  );
};

CartList.propTypes = {
  cart: cartPropTypes,
};

const mapStateToProps = (state) => ({
  cart: getCartSelector(state),
});

const areEqualByLength = (prevProps, nextProps) => {
  /*eslint-disable*/
  console.log(prevProps);
  return prevProps.cart.length !== nextProps.cart.length;
};

export default compose(connect(mapStateToProps))(CartList, areEqualByLength);
