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
import IconPlus from '../icons/icon-plus';

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
      <p className="pizza-card__type">{type}</p>
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
            <IconPlus width={10} height={10} className="pizza-card__plus" />
            Добавить
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
