/* eslint-disable */
import React from 'react';
import './Card.css';
import PinotImage from './PinotImage.jsx';

const Card = (props) => {
  const { pinotNoir, cardButton } = props;

  return (
    <div className="card">
      <PinotImage x={150} y={150} />
      <p>{pinotNoir}</p>
      {cardButton}
    </div>

  );
};

export default pinotNoir;
