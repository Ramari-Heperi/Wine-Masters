/* eslint-disable */
import React from 'react';
import './MasterPage.css';
import NavButton from './components/Navbar/NavButton.jsx';
import NavBar from './components/NavBar/NavBar.jsx';


const MasterPage = (props) => {
    return (
        <div className="master-page">
            <Title />

            <NavBar>
                <NavButton />
                <NavButton />
                <NavButton />
            </NavBar>
            <div className="content">
                {props.children}
            </div >
        </div>


    );
};
export default MasterPage;