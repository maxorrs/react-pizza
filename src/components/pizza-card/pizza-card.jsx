import React, { useState, memo } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { CartActionCreator } from '../../store/reducers/cart/cart';

import { getDoughTypes, getDefaultPizzaSize } from '../../utils/pizza';

import './pizza-card.scss';

const PizzaCard = ({ pizza, onAddToCart, cart, onChangeQuantityToCart }) => {
  console.log(cart);
  const { typeId, title, type, image, options } = pizza;
  const doughTypes = getDoughTypes(pizza);
  const [activeDough, setActiveDough] = useState(doughTypes[0]);

  const { conditions } = options.find((option) => option.dough === activeDough);
  const defaultSize = getDefaultPizzaSize(conditions);
  const [activeSize, setActiveSize] = useState(defaultSize);
  const { price, id } = conditions.find((condition) => condition.size === activeSize);

  const [quantity, setQuantity] = useState(0);

  const formSubmitHandler = (evt) => {
    evt.preventDefault();

    const pizza = {
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
      onAddToCart(pizza);
    } else {
      onChangeQuantityToCart(pizza);
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

            {options.map(({ dough, id }, index) => {
              const isDefaultChecked = index === 0 ? true : false;

              return (
                <p key={`${dough}-${id}`} className="pizza-card__input-wrapper">
                  <input
                    onChange={() => changeDoughHandler(dough)}
                    className="pizza-card__input visually-hidden"
                    type="radio"
                    id={id}
                    name="dough"
                    value={id}
                    defaultChecked={isDefaultChecked}
                  />
                  <label className="pizza-card__label" htmlFor={id}>
                    {dough}
                  </label>
                </p>
              );
            })}
          </fieldset>
          <fieldset className="pizza-card__field">
            <legend className="visually-hidden">Размер пиццы</legend>
            {conditions.map(({ size }, index) => {
              const isDefaultChecked = index === 0 ? true : false;

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
            <svg className="pizza-card__plus" width="10" height="10" viewBox="0 0 10 10">
              <path d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z" />
              <path d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z" />
            </svg>
            Добавить
            <span className="pizza-card__quantity">{quantity}</span>
          </button>
        </div>
      </form>
    </article>
  );
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
