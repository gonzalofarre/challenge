import { put, call, all, takeLatest } from 'redux-saga/effects';
import { getProducts as getProductsService } from '../api/apiServices';
import * as resultsActionTypes from '../actions/actionTypes/resultPageActionTypes';
import {setProducts} from '../actions/resultPageActions';
//import { setSearchResult } from '../actions/resultsPageActions';
//import { getProductList } from '../selectors/resultsPageSelectors';

export function* getProducts ({ payload }) {
  //const currentState = yield select(getProductList);
  try {
  const searchValue = payload.substring(payload.indexOf('=') + 1);
  const productList = yield call(getProductsService, searchValue);
  yield put(setProducts(productList));

    //yield put(setProducts(productList));
  } catch (err) {
    //yield put(setSearchResult(currentState));
  }
}

function* getProductsWatcher() {
    yield takeLatest(resultsActionTypes.GET_PRODUCTS, getProducts);
  }
  
  export default function* sagas() {
    yield all([
      getProductsWatcher()
    ]);
  }
  