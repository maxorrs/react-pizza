import {SORT_TYPE_DEFAULT, PIZZA_TYPE_DEFAULT} from '../../../consts';

const initialState = {
  isSortMenuOpen: false,
  activeSortType: SORT_TYPE_DEFAULT,
  activePizzaType: PIZZA_TYPE_DEFAULT,
  cart: [],
};

export const AppStateActionType = {
  TOGGLE_SORT_MENU: 'TOGGLE_SORT_MENU',
  CHANGE_SORT_TYPE: 'CHANGE_SORT_TYPE',
  CHANGE_PIZZA_TYPE: 'CHANGE_PIZZA_TYPE',
  RESET_SORT_MENU: 'RESET_SORT_MENU',
  ADD_TO_CART: 'ADD_TO_CART',
  RESET_FILTERS: 'RESET_FILTERS',
};

export const AppStateActionCreator = {
  toggledSortMenu: () => ({
    type: AppStateActionType.TOGGLE_SORT_MENU,
  }),
  changeSortType: (payload) => ({
    type: AppStateActionType.CHANGE_SORT_TYPE,
    payload,
  }),
  changePizzaType: (payload) => ({
    type: AppStateActionType.CHANGE_PIZZA_TYPE,
    payload,
  }),
  resetSortMenu: () => ({
    type: AppStateActionType.RESET_SORT_MENU,
  }),
  resetFilters: () => ({
    type: AppStateActionType.RESET_FILTERS,
  }),
};

export const appState = (state = initialState, action) => {
  switch (action.type) {
    case AppStateActionType.TOGGLE_SORT_MENU:
      return {...state, isSortMenuOpen: !state.isSortMenuOpen};

    case AppStateActionType.CHANGE_SORT_TYPE:
      return {...state, activeSortType: action.payload};

    case AppStateActionType.CHANGE_PIZZA_TYPE:
      return {...state, activePizzaType: action.payload};

    case AppStateActionType.RESET_SORT_MENU:
      return {...state, isSortMenuOpen: false};

    case AppStateActionType.RESET_FILTERS:
      return {
        ...state,
        isSortMenuOpen: false,
        activePizzaType: PIZZA_TYPE_DEFAULT,
        activeSortType: SORT_TYPE_DEFAULT,
      };

    default:
      return state;
  }
};
