import React from 'react';
import PropTypes from "prop-types";

import Thumb from '../Thumb';

const MAX_CHAR = 70;
var originalPrice = 'About 100 USD ';
const Product = (props) => {
  const product = props.product;

  product.quantity = 1;

  if(product.price) 
  {
    originalPrice = product.price;
    var price = product.price.replace(/\D/g, "");
    product.price = price;
  }

  return (
    <div className="shelf-item" key={product.DeviceName}>
      <p className="shelf-item__title">{product.DeviceName}</p>
      { 
        <div className="shelf-stopper">Available</div>
      }
      <Thumb
        classes="shelf-item__thumb"
        src='https://openclipart.org/download/231368/iPhone-6s-Rose-Gold.svg'
        alt={product.DeviceName}
      />
      <div className="shelf-item__price">
       { product.price && 
        <div className="shelf-item__details">{originalPrice} </div>
        }
       </div>
       <div className="shelf-item__title">
        {product._2g_bands && 
        <div className="shelf-item__details">2G: {product._2g_bands}</div>
        }
        {product._3g_bands && 
        <div className="shelf-item__details">3G: {product._3g_bands}</div>
        }
         {product._4g_bands && product._4g_bands.length <= MAX_CHAR && 
        <div className="shelf-item__details">4G: {product._4g_bands}</div>
        }
        {product.technology}
      </div>
      <div onClick={() => props.addProduct(product)} className="shelf-item__buy-btn">Book</div>
    </div>
  );
}


Product.propTypes = {
  product: PropTypes.object.isRequired,
  addProduct: PropTypes.func.isRequired,
};

export default Product;