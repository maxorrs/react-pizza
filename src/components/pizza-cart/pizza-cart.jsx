import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {CartActionCreator} from '../../store/reducers/cart/cart';
import {pizzaCartPropTypes} from '../../utils/prop-types';

import './pizza-cart.scss';

const PizzaCart = ({pizza, onDeleteItem, onIncQuantity, onDecQuantity}) => {
  const {title, size, price, quantity, image, dough, id} = pizza;
  const sumPrice = quantity * price;

  return (
    <section className="cart-list__pizza-cart pizza-cart">
      <div className="pizza-cart__info">
        <div className="pizza-cart__img-wrapper">
          <img
            className="pizza-cart__img"
            src={image}
            width="80"
            height="80"
            alt={`Пицца ${title}`}
          />
        </div>
        <div className="pizza-cart__name">
          <h3 className="pizza-cart__title">{title}</h3>
          <p className="pizza-cart__subtitle">
            {dough}, {size} см.
          </p>
        </div>
      </div>
      <div className="pizza-cart__actions">
        <button
          className="pizza-cart__action-btn pizza-cart__action-btn--dec"
          type="button"
          onClick={() => onDecQuantity(id)}
        >
          <span className="visually-hidden">Удалить одну пиццу из корзины</span>
        </button>
        <p className="pizza-cart__quantity">{quantity}</p>
        <button
          className="pizza-cart__action-btn pizza-cart__action-btn--inc"
          type="button"
          onClick={() => onIncQuantity(id)}
        >
          <span className="visually-hidden">Добавить еще одну пиццу в корзину</span>
        </button>
      </div>
      <p className="pizza-cart__price">{sumPrice}Р</p>
      <button
        className="pizza-cart__action-btn pizza-cart__action-btn--delete"
        type="button"
        onClick={() => onDeleteItem(id)}
      >
        <span className="visually-hidden">Удалить пиццу из корзины</span>
      </button>
    </section>
  );
};

PizzaCart.propTypes = {
  pizza: pizzaCartPropTypes,
  onDeleteItem: PropTypes.func.isRequired,
  onIncQuantity: PropTypes.func.isRequired,
  onDecQuantity: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onDeleteItem: (id) => {
    dispatch(CartActionCreator.deleteItem(id));
  },
  onIncQuantity: (id) => {
    dispatch(CartActionCreator.incQuantity(id));
  },
  onDecQuantity: (id) => {
    dispatch(CartActionCreator.decQuantity(id));
  },
});

export default connect(null, mapDispatchToProps)(PizzaCart);
