import {SORT_TYPE_DEFAULT, PIZZA_TYPE_DEFAULT} from '../../../consts';


const initialState = {
  isSortMenuOpen: false,
  activeSortType: SORT_TYPE_DEFAULT,
  activePizzaType: PIZZA_TYPE_DEFAULT,
  cart: []
};

export const AppStateActionType = {
  TOGGLE_SORT_MENU: `TOGGLE_SORT_MENU`,
  CHANGE_SORT_TYPE: `CHANGE_SORT_TYPE`,
  CHANGE_PIZZA_TYPE: `CHANGE_PIZZA_TYPE`,
  RESET_SORT_MENU: `RESET_SORT_MENU`,
  ADD_TO_CART: `ADD_TO_CART`
}

export const AppStateActionCreator = {
  toggledSortMenu: () => ({
    type: AppStateActionType.TOGGLE_SORT_MENU
  }),
  changeSortType: (payload) => ({
    type: AppStateActionType.CHANGE_SORT_TYPE,
    payload
  }),
  changePizzaType: (payload) => ({
    type: AppStateActionType.CHANGE_PIZZA_TYPE,
    payload
  }),
  resetSortMenu: () => ({
    type: AppStateActionType.RESET_SORT_MENU
  }),
  addToCard: (payload) => ({
    type: AppStateActionType.ADD_TO_CART,
    payload
  })
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
      return {...state, activeSortType: SORT_TYPE_DEFAULT, isSortMenuOpen: false};

    case AppStateActionType.ADD_TO_CART:
      return {...state, cart: [...state.cart, action.payload]}

    default:
      return state;
  }
};
