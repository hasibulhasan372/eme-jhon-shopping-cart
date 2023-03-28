import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect( () => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))

    },[]);
    useEffect(() =>{
        const storedCart = getShoppingCart();
        let savedCart = []
        for(const id in storedCart){
            const addedProduct = products.find(product => product.id === id);
            if(addedProduct){
            const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct)
            };
            setCart(savedCart);
        }
    },[products])
    const handleAddToCart = (product) =>{
    //    const newCart = [...cart,product];
        let newCart = [];
        const productExist = cart.find(pd => pd.id === product.id);
        if(!productExist){
            product.quantity = 1;
            newCart = [...cart,product];
        } 
        else{
            product.quantity = product.quantity + 1;
            const remaining = cart.filter(pd => pd.id !==  product.id);
            newCart = [...remaining, productExist]
        }


       setCart(newCart);
       addToDb(product.id)
    }

    return (
        <div className='shopping-container'> 
        <div className="products-container">
           {
            products.map(product => <Product
            key = {product.id} 
            product = {product}
            handleAddToCart = {handleAddToCart}
            ></Product>)
           }
        </div>
        <div className="cart-summery">
            <Cart cart={cart}></Cart>
        </div>
            
        </div>
    );
};

export default Shop;