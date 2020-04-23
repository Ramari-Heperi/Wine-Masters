import React from 'react';
import './Homepage.css';
import Products from '../../products.json';
import Productcard from '../productCard';
const Homepage = () => {

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

  const buyNow = product => <a className="btn btn-primary" href={`mailto:winemasters@gmail.com?subject= I would like to buy ${product.name}`}>Buy Now</a>

  return (
    <div className="homepage">
      <h1 className="home-title">The Wine Masters</h1>
      {Products.map(renderproduct)}


    </div>


  );
};

export default Homepage;
