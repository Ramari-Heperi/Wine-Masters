/* eslint-disable */
import React from 'react';
import './PropsPage.css';
import Attribution from './components/Attribution';
import RandomImage from './components/RandomImage';
import Title from './components/Title';
import StyledButton from './components/StyledButton';
import Card from './components/Card';
import FlexLayout from './components/FlexLayout';

const PropsPage = () => {
  const buttonClicked = () => {
    console.log('Design');
  }
  const cardButton = <StyledButton buttonText={'Click'} click={buttonClicked} />;
  const card1 = <Card cardText={'Creative'} cardButton={cardButton} />
  const card2 = <Card cardText={'Creative'} cardButton={cardButton} />
  return (
    <div className="topic-page">
      <h2 className="topic-title">Props Challenges</h2>

      <hr />
      <Title text="Design" weight={500} />
      <Attribution />
      <RandomImage x={400} y={400} />
      <FlexLayout left={card1} right={card2} />

    </div>
  );
};
export default PropsPage;