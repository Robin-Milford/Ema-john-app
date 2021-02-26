import React from 'react';

const Cart = (props) => {
    const cart=props.cart;
    //using reduce
    //const total=cart.reduce((total,product)=> total+product.price,0)
    // using loop
    let total=0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total=total+product.price;
    }
    let shipping=0;
    if (total>40) {
        shipping=12;
    }
    else if (total>0) {
        shipping=12.99;
    }

    return (
        <div>
            <h2>Shopping Cart</h2>
            <h3>Item Summary:{cart.length}</h3>
            <p>Shipping cost: ${shipping}</p>
            <h3>Total price: ${total+shipping}</h3>
        </div>
    );
};

export default Cart;