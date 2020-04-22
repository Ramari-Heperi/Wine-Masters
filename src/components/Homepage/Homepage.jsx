import React from 'react';
import './Homepage.css';
import Products from '../../products.json';

const Homepage = () => {

  const renderproduct = (product) => <p>{product.name}</p>

  return (
    <div className="homepage">
      <h1 className="home-title">The Wine Masters</h1>
      {Products.map(renderproduct)}
    </div>
  );
};

export default Homepage;
