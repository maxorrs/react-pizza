const initialState = {
  pizzas: [],
  isLoadingPizzas: false,
};

export const DataActionType = {
  LOAD_PIZZAS: 'LOAD_PIZZAS',
  IS_LOADING_PIZZAS: 'IS_LOADING_PIZZAS',
};

export const DataActionCreator = {
  loadPizzas: (payload) => ({
    type: DataActionType.LOAD_PIZZAS,
    payload,
  }),
  toggleLoadingStatusPizzas: (payload) => ({
    type: DataActionType.IS_LOADING_PIZZAS,
    payload,
  }),
};

export const data = (state = initialState, action) => {
  switch (action.type) {
    case DataActionType.LOAD_PIZZAS:
      return {...state, pizzas: action.payload};

    case DataActionType.IS_LOADING_PIZZAS:
      return {...state, isLoadingPizzas: action.payload};

    default:
      return state;
  }
};
