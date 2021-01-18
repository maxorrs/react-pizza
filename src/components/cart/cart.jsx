import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {compose} from 'redux';

import CartList from '../cart-list/cart-list';

import {
  getSumQuantityInCartSelector,
  getSumPriceInCartSelector,
} from '../../store/reducers/cart/selectors';

import './cart.scss';
import {CartActionCreator} from '../../store/reducers/cart/cart';

const Cart = ({sumQuantityInCart, sumPriceInCart, onClearCart}) => {
  return (
    <section className="cart">
      <form className="cart__form" action="#" method="GET">
        <div className="cart__wrapper">
          <div className="cart__header">
            <h1 className="cart__title">Корзина</h1>
            <button className="cart__reset-btn" type="button" onClick={onClearCart}>
              Очистить корзину
            </button>
          </div>
          <CartList />
          <div className="cart__bottom">
            <p className="cart__total-quantity">
              Всего пицц: <span>{sumQuantityInCart} шт.</span>
            </p>
            <p className="cart__total-price">
              Сумма заказа: <span>{sumPriceInCart}Р</span>
            </p>
          </div>
          <div className="cart__actions">
            <Link className="cart__back-btn" to="/">
              Вернуться назад
            </Link>
            <button className="cart__submit" type="submit">
              Оплатить сейчас
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

Cart.propTypes = {
  sumQuantityInCart: PropTypes.number.isRequired,
  sumPriceInCart: PropTypes.number.isRequired,
  onClearCart: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  sumQuantityInCart: getSumQuantityInCartSelector(state),
  sumPriceInCart: getSumPriceInCartSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  onClearCart: () => {
    dispatch(CartActionCreator.clearCart());
  },
});

export default compose(connect(mapStateToProps, mapDispatchToProps))(Cart);
