/* eslint-disable */
import React from 'react';
import './ChildrenPage.css';
import FlexBox from './components/FlexBox';
import RandomImage from '../1-props/components/RandomImage';
import NavButton from './components/NavButton';
import NavBar from './components/NavBar';
import MasterPage from './components/MasterPage';

const ChildrenPage = () => {
  return (
    <div className="topic-page">
      <h2 className="topic-title">
        <span className="code">props.children</span> Challenges
      </h2>
      <hr />
      {/**
       * 
       * Declare your components below this comment section
       */}
      <MasterPage>

        <FlexBox flexDirection={"col"}>
          <RandomImage x={400} y={400} />
          <RandomImage x={400} y={400} />

        </FlexBox>
        <FlexBox flexDirection="col">
          <RandomImage x={400} y={400} />
          <RandomImage x={400} y={400} />
        </FlexBox>
      </MasterPage>
      {/* <NavBar />
      <NavButton />
      <NavButton />
      <NavButton /> */}
    </div>
  );
};

export default ChildrenPage;
