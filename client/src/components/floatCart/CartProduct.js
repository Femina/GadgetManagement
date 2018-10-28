import React, { Component } from 'react';
import PropTypes from "prop-types";

import Thumb from './../Thumb';

import util from '../../util';


class CartProduct extends Component {

  state = {
    isMouseOver: false,
  }

  handleMouseOver = () => {
    this.setState({isMouseOver: true});
  }

  handleMouseOut = () => {
    this.setState({isMouseOver: false});
  }


  render(){
    const { product, removeProduct } = this.props;

    const classes = ['shelf-item'];

    if(!!this.state.isMouseOver){
      classes.push('shelf-item--mouseover');
    }

    return (
      <div className={classes.join(' ')}>
        <div
          className="shelf-item__del"
          onMouseOver={() => this.handleMouseOver()}
          onMouseOut={() => this.handleMouseOut()}
          onClick={() => removeProduct(product)}
        />
        <Thumb
          classes="shelf-item__thumb"
          src='https://openclipart.org/download/231368/iPhone-6s-Rose-Gold.svg'
          alt={product.DeviceName}
        />
        <div className="shelf-item__details">
          <p className="title">{product.DeviceName}</p>
          
        </div>
        <div className="shelf-item__price">
          <p>{`${product.price}`}</p>
        </div>

        <div className="clearfix" />
      </div>
    );
  }
}


CartProduct.propTypes = {
  product: PropTypes.object.isRequired,
  removeProduct: PropTypes.func.isRequired,
};

export default CartProduct;
