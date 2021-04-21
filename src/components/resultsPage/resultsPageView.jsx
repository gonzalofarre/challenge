import React, {useEffect} from 'react';
import SearchBar from '../../containers/searchBarContainer';
import ProductCard from './productCard/productCardView';
import Categories from './categories/categoriesView';

const ResultsPageView = (props) => {
  const {getProducts, history, products, searchInput} = props;

  useEffect(()=> { 
  const searchParams = history.location;
  getProducts(searchParams.search)
  }, [searchInput, getProducts, history]);

  const redirect = (searchValue) => {
    history.push(`/items?search=${searchValue}`);
  }

  const renderProductCard = () => {
    return products.items.map((product, index) => (
      <div key={product.id}>
        <ProductCard product={product} history = {history}/>
        {products.items.length - 1 > index && <hr className="product-card-divider"/>}
      </div>
    ));
  }

    return (
      <div>
        <SearchBar history= {history} redirect = {redirect}/>
        <div className="main-page-container results-page-container">
        <Categories categories={products.categories} />
        <div className="product-list-container">
        {renderProductCard()}
        </div>
      </div>
    </div>
    );
}

export default ResultsPageView;