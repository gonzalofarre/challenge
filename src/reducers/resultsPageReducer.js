import { Map } from 'immutable';
import * as t from '../actions/actionTypes/resultPageActionTypes';

const initialState = Map({
  products: {  
    author: null,
    categories: [],
    items: []
  },
  searchInput: '' 
});

const reducer = function resultsPageReducer(state = initialState, {type, payload}) {
  switch (type) {
    case t.SET_PRODUCTS:
      return state.set('products', payload);
    case t.SET_SEARCH_INPUT:
      return state.set('searchInput', payload);
    default:
      return state;
  }
}

export default reducer;