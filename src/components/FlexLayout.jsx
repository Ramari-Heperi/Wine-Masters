/* eslint-disable */
import React from 'react';
import './FlexLayout.css';

const FlexLayout = (props) => {
  const { left, right } = props;

  return (
    <div className="flex-layout">
      <div className="left"></div>
      <div className="right"></div>

    </div>
  );
};

export default FlexLayout;
