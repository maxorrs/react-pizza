import produce from 'immer';
import {load} from 'redux-localstorage-simple';

const {CART: {cart: initalCartState = []} = {}} = load({states: ['CART'], namespace: 'cart'});

const initialState = {
  cart: initalCartState,
};

export const CartActionType = {
  ADD_TO_CART: 'ADD_TO_CART',
  CLEAR_CART: 'CLEAR_CART',
  DELETE_ITEM: 'DELETE_ITEM',
  INC_QUANTITY: 'INC_QUANTITY',
  DEC_QUANTITY: 'DEC_QUANTITY',
};

export const CartActionCreator = {
  addToCart: (payload) => ({
    type: CartActionType.ADD_TO_CART,
    payload,
  }),
  clearCart: () => ({
    type: CartActionType.CLEAR_CART,
  }),
  deleteItem: (payload) => ({
    type: CartActionType.DELETE_ITEM,
    payload,
  }),
  incQuantity: (payload) => ({
    type: CartActionType.INC_QUANTITY,
    payload,
  }),
  decQuantity: (payload) => ({
    type: CartActionType.DEC_QUANTITY,
    payload,
  }),
};

export const cartReducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case CartActionType.ADD_TO_CART: {
        draft.cart.push(action.payload);
        break;
      }

      case CartActionType.CLEAR_CART:
        draft.cart = [];
        break;

      case CartActionType.DELETE_ITEM: {
        const idForDelete = action.payload;
        draft.cart = draft.cart.filter((item) => item.id !== idForDelete);
        break;
      }

      case CartActionType.INC_QUANTITY: {
        const idForInc = action.payload;
        draft.cart.map((item) => {
          if (item.id === idForInc) {
            item.quantity += 1;
            return item;
          }

          return item;
        });
        break;
      }

      case CartActionType.DEC_QUANTITY: {
        const idForDec = action.payload;

        draft.cart.map((item, index) => {
          if (item.id === idForDec) {
            if (item.quantity === 1) {
              return draft.cart.splice(index, 1);
            }

            item.quantity -= 1;
            return item;
          }

          return item;
        });
        break;
      }

      default:
        break;
    }
  });
};
