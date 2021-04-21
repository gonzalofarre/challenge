import React from 'react';
import { Link } from 'react-router-dom';
import { CURRENCY_SYMBOL_MAPPER } from '../../../utils/productMappers';
import shippingImage from '../../../assets/images/ic_shipping.png';


const  ProductCard = ({
    product: {
      id,
      title,
      free_shipping,
      picture,
      origin,
      price: {
        currency,
        amount,
        decimals
      }
    }
  }) => {

  return (
    <div className="product-card-container">
      <Link to={`/items/${id}`}>
        <img alt="product" src={picture} className="product-image"/>
      </Link>
      <div className="product-detail-container">
        <p className="price-text">
          {`${CURRENCY_SYMBOL_MAPPER[currency]} ${Number(amount + decimals).toLocaleString('de-DE') } `}
          {free_shipping && <span><img alt="free shipping" src={shippingImage} /></span>}
        </p>
        <p className="right-text">{ origin }</p>
        <p className="product-title">{ title }</p>
      </div>
    </div>
  );
}

export default ProductCard;