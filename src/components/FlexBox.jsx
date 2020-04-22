/* eslint-disable */
import React from 'react';
import './FlexBox.css';

const FlexBox = (props) => {
    const { flexDirection } = props;

    return (
        <div className={flexDirection} >
            {props.children}

        </div>

    );
};

export default FlexBox;

