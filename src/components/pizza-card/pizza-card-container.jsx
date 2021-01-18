import React, {useState, useEffect, memo, useCallback} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {compose} from 'redux';
import PizzaCard from './pizza-card';

import {CartActionCreator} from '../../store/reducers/cart/cart';
import {getCartSelector} from '../../store/reducers/cart/selectors';
import {cartPropTypes, pizzaPropTypes} from '../../utils/prop-types';

import {
  getDoughTypes,
  getDefaultPizzaSize,
  getAvailableMinSizeIndex,
  getAvailableDoughIndex,
} from '../../utils/pizza';

const PizzaCardContainer = (props) => {
  const {onAddToCart, onIncQuantity, pizza, cart} = props;

  const {typeId, title, type, image, options} = pizza;
  const doughTypes = getDoughTypes(pizza);
  const [activeDough, setActiveDough] = useState(doughTypes[0]);

  const {conditions} = options.find((option) => option.dough === activeDough);
  const defaultSize = getDefaultPizzaSize(conditions);
  const [activeSize, setActiveSize] = useState(defaultSize);
  const {price, id} = conditions.find((condition) => condition.size === activeSize) || {
    price: 0,
    id: 0,
  };

  const formSubmitHandler = useCallback((evt) => {
    evt.preventDefault();

    const newPizza = {
      id,
      typeId,
      dough: activeDough,
      image,
      type,
      title,
      size: activeSize,
      price,
      quantity: 1,
    };

    const isAvailableInCart = cart.findIndex((item) => item.id === id) === -1;

    if (isAvailableInCart) {
      onAddToCart(newPizza);
    } else {
      onIncQuantity(id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setActiveSize(defaultSize);
  }, [activeDough, defaultSize]);

  const availableMinSizeIndex = getAvailableMinSizeIndex(conditions);
  const availableDoughIndex = getAvailableDoughIndex(options);

  const quantity = cart
    .slice()
    .filter((item) => item.typeId === typeId)
    .reduce((acc, item) => acc + item.quantity, 0);

  return (
    <PizzaCard
      pizza={pizza}
      onFormSubmit={formSubmitHandler}
      onChangeActiveSize={setActiveSize}
      onChangeActiveDough={setActiveDough}
      availableMinSizeIndex={availableMinSizeIndex}
      availableDoughIndex={availableDoughIndex}
      conditions={conditions}
      activeDough={activeDough}
      price={price}
      quantity={quantity}
    />
  );
};

PizzaCardContainer.propTypes = {
  cart: cartPropTypes,
  pizza: pizzaPropTypes,
  onAddToCart: PropTypes.func.isRequired,
  onIncQuantity: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  cart: getCartSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  onAddToCart: (pizza) => {
    dispatch(CartActionCreator.addToCart(pizza));
  },
  onIncQuantity: (id) => {
    dispatch(CartActionCreator.incQuantity(id));
  },
});

const areEqualById = (prevProps, nextProps) => {
  const {typeId} = prevProps.pizza;
  const isEqualById = nextProps.cart.some((item) => item.typeId === typeId);

  return !isEqualById;
};

export default compose(connect(mapStateToProps, mapDispatchToProps), memo)(
  PizzaCardContainer,
  areEqualById,
);
