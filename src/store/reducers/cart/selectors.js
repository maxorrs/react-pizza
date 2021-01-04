import {createSelector} from 'reselect';

import {NameSpace} from '../root-reducer';

import {getSumQuantityInCart, getSumPriceInCart} from '../../../utils/cart';

export const getCartSelector = (state) => state[NameSpace.CART].cart;

export const getSumQuantityInCartSelector = createSelector(getCartSelector, getSumQuantityInCart);

export const getSumPriceInCartSelector = createSelector(getCartSelector, getSumPriceInCart);
