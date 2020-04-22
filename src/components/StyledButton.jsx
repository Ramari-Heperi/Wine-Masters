/* eslint-disable */
import React from 'react';
import './StyledButton.css'

function StyledButton(props) {
    const { buttonText, click } = props;
    return (
        <div>
            <button className="btn" onClick={click} >{buttonText}</button>
        </div>
    );

};
export default StyledButton;




