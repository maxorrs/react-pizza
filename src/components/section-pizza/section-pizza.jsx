import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Nav from '../nav/nav';
import Sorting from '../sorting/sorting';

import {
  getActivePizzaTypeSelector,
  getActiveSortTypeSelector,
  getSortTypeSelector,
} from '../../store/reducers/app-state/selectors';

import {AppStateActionCreator} from '../../store/reducers/app-state/app-state';

import './section-pizza.scss';
import {sortTypesPropTypes} from '../../utils/prop-types';

const SectionPizza = ({activePizzaType, activeSortType, sortType, onResetFilters}) => {
  const isShowResetBtn = activePizzaType !== 'Все' || activeSortType !== sortType.POPULAR;

  return (
    <section className="section-pizza">
      <h2 className="visually-hidden">Выбрать вид пиццы</h2>
      <div className="section-pizza__wrapper">
        <Nav />
        <Sorting />
      </div>
      {isShowResetBtn && (
        <button className="section-pizza__reset-btn" type="button" onClick={onResetFilters}>
          Сбросить сортировку
        </button>
      )}
    </section>
  );
};

SectionPizza.propTypes = {
  activePizzaType: PropTypes.string.isRequired,
  activeSortType: sortTypesPropTypes,
  sortType: PropTypes.object.isRequired,
  onResetFilters: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  activePizzaType: getActivePizzaTypeSelector(state),
  activeSortType: getActiveSortTypeSelector(state),
  sortType: getSortTypeSelector(),
});

const mapDispatchToProps = (dispatch) => ({
  onResetFilters: () => {
    dispatch(AppStateActionCreator.resetFilters());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SectionPizza);
