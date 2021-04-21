import { put, call, takeLatest, all } from 'redux-saga/effects';
import { getProductDetails as  getProductDetailsService } from '../api/apiServices';
import { setProductDetails } from '../actions/productDetailsActions';
import * as t from '../actions/actionTypes/productDetailsActionTypes';

export function* getProductDetailsSagas ({ payload }) {
  
  try {
      
    const productDetails = yield call(getProductDetailsService, payload)
    
    yield put(setProductDetails(productDetails));
  } catch (err) {
    
  }
}


function* getProductDetailsWatcher() {
    yield takeLatest(t.GET_PRODUCT_DETAILS, getProductDetailsSagas);
  }
  
  export default function* sagas() {
    yield all([
        getProductDetailsWatcher()
    ]);
  }