import React, { useState } from 'react';
import fakeData from '../../fakeData'
import Cart from '../Cart/Cart';
import Product from '../Products/Product';
import './shop.css'

const Shop = () => {
    const first10=fakeData.slice(0,10);
    const[products,setProducts]=useState(first10);
    const [cart,setCart]=useState([])

    const handleAdd=(products)=>{
      const newCart=[...cart,products];
      setCart(newCart);
    }
    return (
        <div className='main-container'>
            <div className='shop-container'>
            <h2>All Products:</h2>
            <ul>
                {
                    products.map(pd => <Product products={pd} handleAdd={handleAdd}></Product>)
                }
            </ul>
            </div>

            <div className='cart-container'>
                <Cart cart={cart}></Cart> 
            </div>
            
        </div>
    );
};

export default Shop;