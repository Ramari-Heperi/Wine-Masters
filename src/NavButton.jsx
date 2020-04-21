/* eslint-disable */
import React from 'react';
import './NavButton.css';

const NavButton = (props) => {
  const { text, destination } = props;

  return (
    <a href={destination} target="_blank" noreferrer noopener>
      <button className="nav-button">{text}</button>
    </a>
  );
};

export default NavButton;
