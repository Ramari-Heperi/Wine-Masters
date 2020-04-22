/* eslint-disable */
import React from 'react';
import './NavBar.css';
import Title from '../../../topics/1-props/components/Title';

const NavBar = (props) => {
    return (
        <div className={NavBar}>
            {props.children}
        </div>
    );
};

export default NavBar;