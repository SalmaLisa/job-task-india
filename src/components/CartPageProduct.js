import React from 'react';
import cart from '../assets/cart.png'
import Products from './Products';

const CartPageProduct = () => {
  return (
    <div>
      <h1 className='flex items-center'>
        <span className='text-3xl font-bold '>Similar Product</span>
        <img src={cart} alt="" />
      </h1>
      <Products></Products>
    </div>
  );
};

export default CartPageProduct;