import pizzas from '../../../mocks/pizzas';

const initialState = {
  pizzas,
};

export const DataActionType = {
  LOAD_PIZZAS: 'LOAD_PIZZAS',
};

export const DataActionCreator = {
  loadPizzas: (payload) => ({
    type: DataActionType.LOAD_PIZZAS,
    payload,
  }),
};

export const data = (state = initialState, action) => {
  switch (action.type) {
    case DataActionType.LOAD_PIZZAS:
      return {...state, pizzas: action.payload};

    default:
      return state;
  }
};
