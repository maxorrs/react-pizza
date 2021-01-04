import {combineReducers} from 'redux';
import {appState} from './app-state/app-state';
import {cartReducer} from './cart/cart';
import {data} from './data/data';

export const NameSpace = {
  APP_STATE: 'APP_STATE',
  DATA: 'DATA',
  CART: 'CART',
};

export default combineReducers({
  [NameSpace.APP_STATE]: appState,
  [NameSpace.DATA]: data,
  [NameSpace.CART]: cartReducer,
});
