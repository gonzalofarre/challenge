import {getStateFromReducer} from '../utils/selectorStateHelper';

function getState(state) {
  return getStateFromReducer(state, 'resultsPageReducer');
}

export const getProducts = state => getState(state).get('products');
export const getSearchInput = state => getState(state).get('searchInput');
