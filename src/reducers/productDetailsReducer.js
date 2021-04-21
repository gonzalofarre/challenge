import { Map } from 'immutable';
import * as t from '../actions/actionTypes/productDetailsActionTypes';

const initialState = Map({
  productDetails: {
    author: {},
    item: {
      categories: [],
      price: {}
    }
  }
});

const reducer = function productDetailsReducer(state = initialState, { type, payload }) {
  switch (type) {
    case t.SET_PRODUCT_DETAILS:
      return state.set('productDetails', payload);
    default:
      return state;
  }
}

export default reducer;