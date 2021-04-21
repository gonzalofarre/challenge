import {getStateFromReducer} from '../utils/selectorStateHelper';

function getState(state) {
  return getStateFromReducer(state, 'productDetailsReducer');
}

export const getProductDetails = state => getState(state).get('productDetails');
