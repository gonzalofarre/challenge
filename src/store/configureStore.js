import { 
    createStore, 
    applyMiddleware, 
    compose 
  } from 'redux';
  import {createBrowserHistory} from 'history';
  import {routerMiddleware} from 'connected-react-router'
  import createSagaMiddleware from 'redux-saga';
  import rootSaga from '../sagas/index';
  import createRootReducer from '../reducers';
  
  const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
      : compose;
  
  export const history = createBrowserHistory();
  const sagaMiddleware = createSagaMiddleware();
  
  export const store = createStore(
        createRootReducer(history),
        composeEnhancers(
          applyMiddleware(routerMiddleware(history), sagaMiddleware))
      );

  sagaMiddleware.run(rootSaga);