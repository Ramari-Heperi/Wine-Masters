/* eslint-disable */
import React from 'react';
import './Title.css';

const Title = (props) => {
    const { text, weight } = props;
    const style = { fontWeight: weight };

    return (
        <div>
            <h1 className="title" style={style}>{text}</h1>
        </div>
    );

};

export default Title;