/* eslint-disable */
import React from 'react';
import './NavBar.css';

const NavBar = (props) => {
    const { text, destination } = props;

    return (
        <div className={NavBar}>
            {props.children}

        </div>
    );
};

export default NavBar;