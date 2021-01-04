import React, {useState, memo} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {compose} from 'redux';

import {CartActionCreator} from '../../store/reducers/cart/cart';
import {cartPropTypes, pizzaPropTypes} from '../../utils/prop-types';

import {getDoughTypes, getDefaultPizzaSize} from '../../utils/pizza';

import './pizza-card.scss';
import IconPlus from '../icons/icon-plus';

const PizzaCard = ({pizza, onAddToCart, cart, onChangeQuantityToCart}) => {
  const {typeId, title, type, image, options} = pizza;
  const doughTypes = getDoughTypes(pizza);
  const [activeDough, setActiveDough] = useState(doughTypes[0]);

  const {conditions} = options.find((option) => option.dough === activeDough);
  const defaultSize = getDefaultPizzaSize(conditions);
  const [activeSize, setActiveSize] = useState(defaultSize);
  const {price, id} = conditions.find((condition) => condition.size === activeSize);

  const [quantity, setQuantity] = useState(0);

  const formSubmitHandler = (evt) => {
    evt.preventDefault();

    const newPizza = {
      id,
      typeId,
      type,
      title,
      size: activeSize,
      price,
      quantity: quantity + 1,
    };

    const index = cart.findIndex((item) => item.id === id);

    if (index === -1) {
      onAddToCart(newPizza);
    } else {
      onChangeQuantityToCart(newPizza);
    }

    setQuantity((prev) => prev + 1);
  };

  const changeDoughHandler = (dough) => {
    setActiveDough(dough);
    setActiveSize(defaultSize);
  };

  return (
    <article className="pizza-list__item pizza-card">
      <div className="pizza-card__img-wrapper">
        <img src={image} width="260" height="260" alt={`Пицца ${title}`} />
      </div>
      <h3 className="pizza-card__title">{title}</h3>
      <p className="pizza-card__type">{type}</p>
      <form onSubmit={formSubmitHandler} className="pizza-card__form" method="#">
        <div className="pizza-card__controls">
          <fieldset className="pizza-card__field">
            <legend className="visually-hidden">Вид теста</legend>

            {options.map(({dough, id: idDough}, index) => {
              const isDefaultChecked = index === 0;

              return (
                <p key={`${dough}-${idDough}`} className="pizza-card__input-wrapper">
                  <input
                    onChange={() => changeDoughHandler(dough)}
                    className="pizza-card__input visually-hidden"
                    type="radio"
                    id={idDough}
                    name="dough"
                    value={idDough}
                    defaultChecked={isDefaultChecked}
                  />
                  <label className="pizza-card__label" htmlFor={idDough}>
                    {dough}
                  </label>
                </p>
              );
            })}
          </fieldset>
          <fieldset className="pizza-card__field">
            <legend className="visually-hidden">Размер пиццы</legend>
            {conditions.map(({size}, index) => {
              const isDefaultChecked = index === 0;

              return (
                <p key={`${typeId}-${activeDough}-${size}`} className="pizza-card__input-wrapper">
                  <input
                    onChange={() => {
                      setActiveSize(size);
                    }}
                    className="pizza-card__input visually-hidden"
                    id={`${typeId}-${activeDough}-${size}`}
                    type="radio"
                    name="size"
                    value={size}
                    defaultChecked={isDefaultChecked}
                  />
                  <label className="pizza-card__label" htmlFor={`${typeId}-${activeDough}-${size}`}>
                    {`${size} см.`}
                  </label>
                </p>
              );
            })}
          </fieldset>
        </div>

        <div className="pizza-card__bottom">
          <p className="pizza-card__price">от {price} Р</p>
          <button className="pizza-card__button" type="submit">
            <IconPlus width={10} height={10} className="pizza-card__plus" />
            Добавить
            <span className="pizza-card__quantity">{quantity}</span>
          </button>
        </div>
      </form>
    </article>
  );
};

PizzaCard.propTypes = {
  cart: cartPropTypes,
  pizza: pizzaPropTypes,
  onAddToCart: PropTypes.func.isRequired,
  onChangeQuantityToCart: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  cart: state.APP_STATE.cart,
});

const mapDispatchToProps = (dispatch) => ({
  onAddToCart: (pizza) => {
    dispatch(CartActionCreator.addToCart(pizza));
  },
  onChangeQuantityToCart: (pizza) => {
    dispatch(CartActionCreator.changeQuantityToCart(pizza));
  },
});

export default compose(connect(mapStateToProps, mapDispatchToProps), memo)(PizzaCard);
