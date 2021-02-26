import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './product.css'
const Product = (props) => {
    const {img,name,seller,price,stock}=props.products;
    return (
        <div className='product'>
            <div className='product-img'>
                <img src={img} alt=""/>
            </div>
            <div className='product-details'>
            <h3  className='product-name'>{name}</h3>
            <div className='product-info'>
            <p>by: {seller}</p>
            <h3>${price}</h3>
            <p>only {stock} left in stock-order soon</p>
            <button
                 className='btn'
                 onClick={()=>props.handleAdd(props.products)}>
                <FontAwesomeIcon icon={faShoppingCart} />add to cart</button>
            </div>
            </div>
        </div>
    );
};

export default Product;