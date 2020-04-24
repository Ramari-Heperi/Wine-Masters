/* eslint-disable */
import React, { useState } from 'react';
import './Cart.css';
import Counter from './Counter';

const Cart = (props) => {
    const items = props.cartItems
    return (
        <div>
        <Counter num = {items.length}></Counter>
        </div>
    )
};

export default Cart;