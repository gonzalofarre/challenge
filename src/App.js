import { Suspense } from "react";
import { Provider } from 'react-redux';
import {ConnectedRouter} from 'connected-react-router';
import {history} from './store/configureStore';
import Routes from './routes';
import { BrowserRouter as Router } from 'react-router-dom';
import SearchPage from "./components/searchPage/searchPageView";

function App(props) {
const {store} = props;
  return (
    <Provider store={store}>
      
      <ConnectedRouter history={history}>
      <Router>
      <Suspense fallback= {<SearchPage />}>
        <Routes />
        </Suspense>
        </Router>
      </ConnectedRouter>
      
    </Provider>
  );
}

export default App;