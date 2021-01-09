import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import classNames from 'classnames';

import {AppStateActionCreator} from '../../store/reducers/app-state/app-state';
import {getActivePizzaTypeSelector} from '../../store/reducers/app-state/selectors';

import './nav.scss';

const pizzaTypes = ['Все', 'Мясные', 'Вегетарианские'];

const Nav = ({onChangePizzaType, activePizzaType}) => {
  const changePizzaTypeHandler = (evt) => {
    if (evt.target.innerText === activePizzaType) {
      return;
    }

    onChangePizzaType(evt.target.innerText);
  };

  return (
    <nav className="section-pizza__nav nav">
      <ul className="nav__list">
        {pizzaTypes.map((type) => {
          const classes = classNames('nav__item', {
            'nav__item--active': type === activePizzaType,
          });
          return (
            <li key={type} className={classes}>
              <Link className="nav__link" to="/" onClick={changePizzaTypeHandler}>
                {type}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

Nav.propTypes = {
  onChangePizzaType: PropTypes.func.isRequired,
  activePizzaType: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  activePizzaType: getActivePizzaTypeSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  onChangePizzaType: (type) => {
    dispatch(AppStateActionCreator.changePizzaType(type));
    dispatch(AppStateActionCreator.resetSortMenu());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
