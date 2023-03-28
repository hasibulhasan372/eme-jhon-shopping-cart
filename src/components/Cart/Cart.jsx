import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    console.log(cart)
    let totalPrice = 0;
    let totalShipping = 0;
    let totalQuantity = 0;
    for(const product of cart){
        product.quantity = product.quantity || 1;
        totalPrice = totalPrice + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping;
        totalQuantity = totalQuantity + product.quantity;
    }
    const tax  = totalPrice * 0.07;
    const grandTotal = totalPrice + totalShipping + tax;
    return (
        <div className='cart'>
           <h3>Shopping Summery</h3>
           <p>Selected Items: {totalQuantity} </p>
           <p>Total Price: {totalPrice} </p>
           <p>Total Shipping Charge: {totalShipping} </p>
           <p>Tax: {tax.toFixed(2)} </p>
           <p>Grand Total: {grandTotal.toFixed(2)} </p>
        </div>
    );
};

export default Cart;