import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import PizzaCard from '../pizza-card/pizza-card';

import {pizzaPropTypes} from '../../utils/prop-types';

import {getActivePizzaTypeSelector} from '../../store/reducers/app-state/selectors';
import {getFilteredPizzasSelector} from '../../store/reducers/data/selectors';

import './pizza-list.scss';

const PizzaList = ({activePizzaType, filteredPizzas}) => {
  return (
    <section className="pizza-list">
      <h2 className="pizza-list__title">{activePizzaType} пиццы</h2>
      <ul className="pizza-list__list">
        {filteredPizzas.map((pizza) => {
          return (
            <li key={pizza.typeId} className="pizza-list__item">
              <PizzaCard pizza={pizza} />
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
};

const mapStateToProps = (state) => ({
  activePizzaType: getActivePizzaTypeSelector(state),
  filteredPizzas: getFilteredPizzasSelector(state),
});

export default connect(mapStateToProps)(PizzaList);
