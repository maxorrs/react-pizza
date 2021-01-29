import React, {memo, useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {compose} from 'redux';
import PizzaCardContainer from '../pizza-card/pizza-card-container';

import {pizzaPropTypes} from '../../utils/prop-types';

import {getActivePizzaTypeSelector} from '../../store/reducers/app-state/selectors';
import {
  getFilteredPizzasSelector,
  getPizzasSelector,
  getStatusPizzasSelector,
} from '../../store/reducers/data/selectors';

import './pizza-list.scss';
import fetchPizzas from '../../store/api-actions';
import Loader from '../loader/loader';

const PizzaList = ({activePizzaType, filteredPizzas, onLoadPizzas, isLoading}) => {
  useEffect(() => {
    onLoadPizzas();
  }, [onLoadPizzas]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <section className="pizza-list">
      <h2 className="pizza-list__title">{activePizzaType} пиццы</h2>
      <ul className="pizza-list__list">
        {filteredPizzas.map((pizza) => {
          return (
            <li key={pizza.typeId} className="pizza-list__item">
              <PizzaCardContainer pizza={pizza} />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

PizzaList.propTypes = {
  activePizzaType: PropTypes.string.isRequired,
  filteredPizzas: PropTypes.arrayOf(PropTypes.shape({pizzaPropTypes})),
  onLoadPizzas: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  activePizzaType: getActivePizzaTypeSelector(state),
  filteredPizzas: getFilteredPizzasSelector(state),
  isLoading: getStatusPizzasSelector(state),
  pizzas: getPizzasSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  onLoadPizzas: () => {
    dispatch(fetchPizzas());
  },
});

export default compose(connect(mapStateToProps, mapDispatchToProps), memo)(PizzaList);
