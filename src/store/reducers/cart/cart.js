import produce from 'immer';

const initialState = {
  cart: []
};

export const CartActionType = {
  ADD_TO_CART: `ADD_TO_CART`,
  CHANGE_QUANTITY: `CHANGE_QUANTITY`
}

export const CartActionCreator = {
  addToCart: (payload) => ({
    type: CartActionType.ADD_TO_CART,
    payload
  }),
  changeQuantityToCart: (payload) => ({
    type: CartActionType.CHANGE_QUANTITY,
    payload
  })
};

export const cartReducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    if (action.type === CartActionType.ADD_TO_CART) {
      draft.cart.push(action.payload);
    }

    if (action.type === CartActionType.CHANGE_QUANTITY) {
      const pizza = action.payload;

      draft.cart.map((item) => {
        if (item.id === pizza.id) {
          item.quantity += 1;
        }
      })
    }
  

  })
  
  
};
