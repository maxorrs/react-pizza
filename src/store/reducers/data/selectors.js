import {createSelector} from 'reselect';
import {NameSpace} from '../root-reducer';

import {getTypesFilter, filterPizzas} from '../../../utils/filter';
import {getActivePizzaTypeSelector, getActiveSortTypeSelector} from '../app-state/selectors';

export const getPizzasSelector = (state) => state[NameSpace.DATA].pizzas;

export const getTypesFilterSelector = createSelector(getPizzasSelector, getTypesFilter);

export const getFilteredPizzasSelector = createSelector(
  [getPizzasSelector, getActivePizzaTypeSelector, getActiveSortTypeSelector],
  filterPizzas,
);

export const getStatusPizzasSelector = (state) => state[NameSpace.DATA].isLoadingPizzas;
