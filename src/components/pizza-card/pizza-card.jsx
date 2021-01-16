import React, {useState, memo, useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {compose} from 'redux';
import classNames from 'classnames';

import {CartActionCreator} from '../../store/reducers/cart/cart';
import {cartPropTypes, pizzaPropTypes} from '../../utils/prop-types';

import {
  getDoughTypes,
  getDefaultPizzaSize,
  getAvailableMinSizeIndex,
  getAvailableDoughIndex,
} from '../../utils/pizza';

import {getCartSelector} from '../../store/reducers/cart/selectors';

import './pizza-card.scss';

const PizzaCard = ({pizza, onAddToCart, cart, onChangeQuantityToCart}) => {
  const {typeId, title, type, image, options, isHot, isVegan, isNew, structure} = pizza;
  const doughTypes = getDoughTypes(pizza);
  const [activeDough, setActiveDough] = useState(doughTypes[0]);

  const {conditions} = options.find((option) => option.dough === activeDough);
  const defaultSize = getDefaultPizzaSize(conditions);
  const [activeSize, setActiveSize] = useState(defaultSize);
  const {price, id} = conditions.find((condition) => condition.size === activeSize) || {
    price: 0,
    id: 0,
  };
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
      quantity: 1,
    };

    const index = cart.findIndex((item) => item.id === id);

    if (index === -1) {
      onAddToCart(newPizza);
    } else {
      onChangeQuantityToCart(newPizza);
    }

    setQuantity((prev) => prev + 1);
  };

  useEffect(() => {
    setActiveSize(defaultSize);
  }, [activeDough, defaultSize]);

  const [isShownPopup, setIsShownPopup] = useState(false);

  const enablePopupHandler = () => {
    setIsShownPopup(true);
  };

  const disablePopupHandler = () => {
    setIsShownPopup(false);
  };

  const imageRef = useRef(null);

  useEffect(() => {
    const {current} = imageRef;
    current.addEventListener('mouseover', enablePopupHandler);
    current.addEventListener('mouseout', disablePopupHandler);

    return () => {
      current.removeEventListener('mouseover', enablePopupHandler);
      current.removeEventListener('mouseout', disablePopupHandler);
    };
  }, []);

  const availableMinSizeIndex = getAvailableMinSizeIndex(conditions);
  const availableDoughIndex = getAvailableDoughIndex(options);

  const classNamesCard = classNames('pizza-list__item pizza-card', {
    'pizza-card--new': isNew,
    'pizza-card--popup-active': isShownPopup,
  });

  const classNameTitle = classNames('pizza-card__title', {
    'pizza-card__title--hot': isHot,
    'pizza-card__title--vegan': isVegan,
  });

  return (
    <article className={classNamesCard}>
      <div ref={imageRef} className="pizza-card__img-wrapper">
        <img src={image} width="260" height="260" alt={`Пицца ${title}`} />
      </div>
      <h3 className={classNameTitle}>{title}</h3>
      <form onSubmit={formSubmitHandler} className="pizza-card__form" method="#">
        <div className="pizza-card__controls">
          <fieldset className="pizza-card__field">
            <legend className="visually-hidden">Вид теста</legend>

            {options.map(({dough, id: idDough, isAvailableDough}, index) => {
              const isDefaultChecked = index === availableDoughIndex;

              return (
                <p key={`${dough}-${idDough}`} className="pizza-card__input-wrapper">
                  <input
                    onChange={() => setActiveDough(dough)}
                    className="pizza-card__input visually-hidden"
                    type="radio"
                    id={idDough}
                    name="dough"
                    value={idDough}
                    defaultChecked={isDefaultChecked}
                    disabled={!isAvailableDough}
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
            {conditions.map(({size, isAvailable}, index) => {
              const isDefaultChecked = index === availableMinSizeIndex;

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
                    disabled={!isAvailable}
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
              <path
                d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001
                9.6C4.42985 9.6 4.00001 9.17016 4.00001
                8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001
                0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z"
                fill="currentColor"
              />
              <path
                d="M5.75998 5.92001L3.83998 5.92001L0.959977
                5.92001C0.429817 5.92001 -2.29533e-05 5.49017
                -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817
                4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998
                4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998
                5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"
                fill="currentColor"
              />
            </svg>
            <span className="pizza-card__button-text">Добавить</span>
            <span className="pizza-card__quantity">{quantity}</span>
          </button>
        </div>
      </form>
      {isShownPopup && (
        <div className="pizza-card__popup-info">
          <p className="pizza-card__structure">Состав: {structure.toLowerCase()}</p>
        </div>
      )}
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
  cart: getCartSelector(state),
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
