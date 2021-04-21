import { combineReducers } from 'redux';
import resultsPageReducer from './resultsPageReducer';
import productDetailsReducer from './productDetailsReducer';
import {connectRouter} from 'connected-react-router';

const root = history   =>
  combineReducers({
    router: connectRouter(history),
    resultsPageReducer,
    productDetailsReducer
  });

export default root;