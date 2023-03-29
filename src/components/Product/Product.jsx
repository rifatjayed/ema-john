import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import './Product.css';


const Product = (props) => {
    const{img, name, seller, price, ratings}= props.product

const handleAddToCart= props.handleAddToCart;
 
    return (
        <div className='product'>
        <img src={img}></img>
      <div className='product-info'>
      <h6 className='product-name'>{name}</h6>
        <p>Price: ${price}</p>
        <p>Manufacturer: {seller}</p>
        <p>ratings: {ratings}</p>
      </div>
      <button onClick={() => handleAddToCart(props.product)} className='btn-cart'>Add to Cart</button>
        </div>
    );
};

export default Product;