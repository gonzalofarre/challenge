import { fork, all } from 'redux-saga/effects';

import resultsPageSagas from  './resultsPageSagas';
import productDetailsSagas from './productDetailsSagas';

export default function* startForman() {
  
  yield all([fork(resultsPageSagas), fork(productDetailsSagas)]);
}