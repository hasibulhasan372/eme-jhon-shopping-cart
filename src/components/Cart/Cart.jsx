import React from 'react';

const Cart = ({cart}) => {
    console.log(cart)
    let total = 0;

    for(const product of cart){
        total = total + product.price
    }

    return (
        <div>
           <h3>Shopping Summery</h3>
           <p>Selected Items: {cart.length} </p>
           <p>Total Price: {total} </p>
           <p>Total Shipping Charge: </p>
           <p>Tax: </p>
           <p>Grand Total: </p>
        </div>
    );
};

export default Cart;