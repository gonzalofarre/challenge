import React, { useEffect } from 'react';
import SearchBar from '../../containers/searchBarContainer';
import { PRODUCT_CONDITION_MAPPER, CURRENCY_SYMBOL_MAPPER } from '../../utils/productMappers';
import CategoriesView from '../resultsPage/categories/categoriesView';

const ProductDetailsView = ({
  history,
  match,
  getProductDetails,
  productDetails: {
    item: {
      picture,
      categories,
      condition,
      sold_quantity,
      title,
      description,
      price: {
        amount,
        decimals,
        currency
      }
    }
  }
}) => {
  
  useEffect(() => {
    if(match.params) {
      getProductDetails(match.params.id);
    }
  }, [match, getProductDetails]);

  const redirect = (searchValue) => {
    history.push(`/items?search=${searchValue}`);
  }

  return (
    <div>
    <SearchBar history={history} redirect= {redirect}/>
    <div className="main-page-container results-page-container">
      <CategoriesView categories={categories} />
      <div className="product-details-container">
        <div className="product-details">
          <img className="product-image" alt="Product" src={picture} />
          <div className="product-conditions-container">
            <span>{`${PRODUCT_CONDITION_MAPPER[condition]} - ${sold_quantity} vendidos`}</span>
            <p>{ title }</p>
            <h3>{`${CURRENCY_SYMBOL_MAPPER[currency]} ${Number(amount + decimals).toLocaleString('de-DE') }`}</h3>
            <button> Comprar </button>
          </div>
        </div>
        <div className="description-container">
          <h4> Descripción del producto</h4>
          <p>{ description }</p>
        </div>
      </div>
    </div>
  </div>
  );
}

export default ProductDetailsView;