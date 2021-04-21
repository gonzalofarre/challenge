import React from 'react';
import SearchBar from '../../containers/searchBarContainer';

const SearchPage = ({ history }) => {

const redirect  = (searchValue) => {
    history.push(`/items?search=${searchValue}`);
}

  return (
    <div className="search-page-container">
      <SearchBar history={history} redirect= {redirect}/>
    </div>
  )
};

export default SearchPage;