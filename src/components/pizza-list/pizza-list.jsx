import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import PizzaCard from '../pizza-card/pizza-card';

import pizzas from '../../mocks/pizzas';

import './pizza-list.scss';
import {getActivePizzaTypeSelector} from '../../store/reducers/app-state/selectors';

const PizzaList = ({activePizzaType}) => {
  return (
    <section className="pizza-list">
      <h2 className="pizza-list__title">{activePizzaType} пиццы</h2>
      <ul className="pizza-list__list">
        {pizzas.map((pizza) => {
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
};

const mapStateToProps = (state) => ({
  activePizzaType: getActivePizzaTypeSelector(state),
});

export default connect(mapStateToProps)(PizzaList);
