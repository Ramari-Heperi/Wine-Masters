import React, { useState } from 'react';
import './Homepage.css';
import Products from '../../products.json';
import Productcard from '../productCard';
import Cart from '../Cart/Cart';
import Counter from '../Cart/Counter';
const Homepage = () => {
  const [cartItems, setCartItems] = useState([]);
  const renderproduct = (product) =>
    <Productcard productCard={
      <div>
        {product.name}
        <p>
          {product.description}
        </p>
      </div>}
      imageurl={product.image} cardButton={buyNow(product)}
    />
  const addCartItem = (product) => {
    setCartItems(cartItems.concat([product]))
  }
  const buyNow = product => <a className="btn btn-dark" href='#' onClick={() => addCartItem(product)}>Add to Cart</a>

  return (
    <div className="homepage">
      <h1 className="home-title">The Wine Masters</h1>
      <Cart cartItems={cartItems} />
      {Products.map(renderproduct)}
    </div>


  );
};



export default Homepage;
