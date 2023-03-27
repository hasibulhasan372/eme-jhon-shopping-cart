import React from 'react';
import './Product.css'
const Product = (props) => {
    console.log(props.product)
    const {img,name,seller,ratings,price} = props.product;
    return (    
        <div className='product'>
            <img src={img} alt="img" />
          <div className="product-info">
          <h4>{name}</h4>
            <h5>Price: {price} </h5>
            <p className='seller'>Manufacturer: {seller} </p>
            <p>Rating: {ratings} star </p>
          </div>
            
        </div>
    );
};

export default Product; 