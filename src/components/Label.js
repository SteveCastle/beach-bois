import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledLabel = styled.div`
  width: 100%;
  color: white;
  font-size: 1.2rem;
  margin: 20px 0 20px 0;
  background: black;
  padding: 8px;
  border-radius: 4px;
`;

const Name = styled.span`
  display: block;

`;

const StartingWeight = styled.span`
    display: block;
    font-size: 0.6rem;
`;

const CurrentWeight = styled.span`
    display: block;
    font-size: 0.6rem;
`;


const Label = ({ name, startingWeight, currentWeight }) => ( //eslint-disable-line
  <StyledLabel>
    <Name>{name}</Name>
    <StartingWeight>Starting Weight: {startingWeight}</StartingWeight>
    <CurrentWeight>Current Weight: {currentWeight}</CurrentWeight>
  </StyledLabel>
);

Label.propTypes = {
  name: PropTypes.string.isRequired,
  startingWeight: PropTypes.number.isRequired,
  currentWeight: PropTypes.number.isRequired,
};

export default Label;
