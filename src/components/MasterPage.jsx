/* eslint-disable */
import React from 'react';
import './MasterPage.css';
import Title from '../../1-props/components/Title';
import NavButton from './NavButton';
import NavBar from './NavBar';


const MasterPage = (props) => {
    return (
        <div className="master-page">
            <Title />

            <NavBar>
                <NavButton text={'Programmes'} destination={'http://www.developers.ac.nz/programmes/web-development'} />
                <NavButton text={'Contact'} destination={'http://www.developers.ac.nz/contact'} />
                <NavButton text={'Apply Now'} destination={'http://www.developers.ac.nz/programmes/apply'} />
            </NavBar>
            <div className="content">
                {props.children}
            </div >
        </div>


    )
};
export default MasterPage;