  
import React, {lazy} from 'react';
import {
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
// COMPONENTS
const ResultsPageContainer = lazy(()=> import ('../containers/resultsPageContainer'));
const ProductDetailsContainer =  lazy(() => import('../containers/productDetailsContainer'));
const SearchPage = lazy(() =>import('../components/searchPage/searchPageView')) ;

const Routes = () => 
    <Switch>
      
      <Route exact path= "/" component= {SearchPage} key= 'search-bar'/>
      <Route exact path="/items" component={ResultsPageContainer} key= 'results'/>
      <Route path="/items/:id" component={ProductDetailsContainer} key= 'details'/>
      <Redirect to="/" />
      
    </Switch>

export default Routes;