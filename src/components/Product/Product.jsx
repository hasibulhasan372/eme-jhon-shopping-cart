import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';
const Product = (props) => {
    const {img,name,seller,ratings,price} = props.product;

    const handleAddToCart = props.handleAddToCart;
    return (    
        <div className='product'>
          <div className="product-img">
          <img src={img} alt="img" />
          </div>
          <div className="product-info">
          <h4>{name}</h4>
            <h5>Price: {price} </h5>
            <p className='seller'>Manufacturer: {seller} </p>
            <p>Rating: {ratings} star </p>
          </div>
            <button onClick={() =>handleAddToCart(props.product)} className='btn-cart'>Add To Cart <FontAwesomeIcon icon={faShoppingCart} /></button>
        </div>
    );
};

export default Product; 