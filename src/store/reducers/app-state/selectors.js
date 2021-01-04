import {NameSpace} from '../root-reducer';
import {SortType} from '../../../consts';

export const getActiveSortTypeSelector = (state) => state[NameSpace.APP_STATE].activeSortType;
export const getSortMenuStatusSelector = (state) => state[NameSpace.APP_STATE].isSortMenuOpen;
export const getSortTypeSelector = () => SortType;
export const getActivePizzaTypeSelector = (state) => state[NameSpace.APP_STATE].activePizzaType;
