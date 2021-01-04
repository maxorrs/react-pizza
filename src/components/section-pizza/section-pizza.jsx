import React from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import classNames from 'classnames';

import {AppStateActionCreator} from '../../store/reducers/app-state/app-state';
import {
  getSortTypeSelector,
  getActiveSortTypeSelector,
  getSortMenuStatusSelector,
  getActivePizzaTypeSelector,
} from '../../store/reducers/app-state/selectors';

import './section-pizza.scss';

const pizzaTypes = ['Все', 'Мясные', 'Вегетарианские'];

const SectionPizza = ({
  isSortMenuOpen,
  onToggledSortMenu,
  sortType,
  activeSortType,
  onChageSortType,
  onChangePizzaType,
  activePizzaType,
}) => {
  const sortMenuStatusClassNames = classNames('section-pizza__options', {
    'section-pizza__options--opened': isSortMenuOpen,
  });

  const toggledSortMenuEnterHandler = (evt) => {
    if (evt.code === 'Enter') {
      onToggledSortMenu();
    }
  };

  const changePizzaTypeHandler = (evt) => {
    if (evt.target.innerText === activePizzaType) {
      return;
    }

    onChangePizzaType(evt.target.innerText);
  };

  return (
    <section className="section-pizza">
      <h2 className="visually-hidden">Выбрать вид пиццы</h2>
      <div className="section-pizza__wrapper">
        <nav className="section-pizza__nav">
          <ul className="section-pizza__nav-list">
            {pizzaTypes.map((type) => {
              const classes = classNames('section-pizza__nav-item', {
                'section-pizza__nav-item--active': type === activePizzaType,
              });
              return (
                <li key={type} className={classes}>
                  <Link className="section-pizza__nav-link" to="/" onClick={changePizzaTypeHandler}>
                    {type}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="section-pizza__sorting">
          <span className="section-pizza__sorting-caption">Сортировка по:</span>
          <span
            onClick={onToggledSortMenu}
            onKeyDown={toggledSortMenuEnterHandler}
            className="section-pizza__sorting-type"
            tabIndex="0"
            role="button"
          >
            {activeSortType}
          </span>
          <ul className={sortMenuStatusClassNames}>
            {Object.values(sortType).map((type) => {
              return (
                <li
                  key={type}
                  className={classNames('section-pizza__option', {
                    'section-pizza__option--active': activeSortType === type,
                  })}
                  tabIndex="-1"
                >
                  <Link
                    className="section-pizza__link"
                    to="/"
                    onClick={() => onChageSortType(type)}
                  >
                    {type}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

SectionPizza.propTypes = {
  isSortMenuOpen: PropTypes.bool.isRequired,
  onToggledSortMenu: PropTypes.func.isRequired,
  sortType: PropTypes.object.isRequired,
  activeSortType: PropTypes.string,
  onChageSortType: PropTypes.func.isRequired,
  onChangePizzaType: PropTypes.func.isRequired,
  activePizzaType: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  isSortMenuOpen: getSortMenuStatusSelector(state),
  activeSortType: getActiveSortTypeSelector(state),
  sortType: getSortTypeSelector(),
  activePizzaType: getActivePizzaTypeSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  onToggledSortMenu: () => {
    dispatch(AppStateActionCreator.toggledSortMenu());
  },
  onChageSortType: (type) => {
    dispatch(AppStateActionCreator.changeSortType(type));
    dispatch(AppStateActionCreator.toggledSortMenu());
  },
  onChangePizzaType: (type) => {
    dispatch(AppStateActionCreator.changePizzaType(type));
    dispatch(AppStateActionCreator.resetSortMenu());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SectionPizza);
