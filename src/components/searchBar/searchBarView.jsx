import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import LogoML from '../../assets/images/Logo_ML.png';
import IcSearch from '../../assets/images/ic_Search.png';

const SearchBar = (props) =>  {
  const {history, searchInput, setSearchInput, redirect} = props;
  const [searchValue, setSearchValue] = useState(searchInput);
  

  const handleSearchInputChange = e => {
    const { value } = e.target;
    setSearchValue(value);
  }

  const handleOnSubmit = e => {
    e.preventDefault();
    if(searchValue) {
      
    setSearchInput(searchValue);
    if (redirect){
      redirect(searchValue)
    }
    } else {
      setSearchInput(searchValue);

      history.push('/');
    }
  }


  return (
    <div className="search-box-container main-page-container">
      <form
        className="search-box-form"
        onSubmit={e => handleOnSubmit(e)}
      >
        <Link to="/">
          <img alt="Mercado Libre" src={LogoML}/>
        </Link>
        <input
        className="search-input"
        placeholder="Nunca dejes de buscar"
          value={searchValue || ''}
          onChange={e => handleSearchInputChange(e)}
        />
        <button type="submit">
          <img alt="search" src={IcSearch} />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;