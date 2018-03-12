import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Food from './Food';
import Character from './Character';
import Label from './Label';

const StyledPlayer = styled.div`
  display: flex;
  height: 100%;
  justify-content: flex-end;
  flex-direction: column;
  align-items: flex-end;
  padding: 0 30px;
`;

const StyledCharacter = styled.div`
  display: flex;
  align-self: bottom;
  justify-content: flex-start;
  align-items: flex-end;
`;

const Player = ({
  name,
  startingWeight,
  currentWeight,
  character,
  food = 'burger',
}) => (
  <StyledPlayer>
    <StyledCharacter>
      <Character character={character} />
      <Food startingWeight={startingWeight} currentWeight={currentWeight} food={food} />
    </StyledCharacter>
    <Label name={name} startingWeight={startingWeight} currentWeight={currentWeight} />
  </StyledPlayer>
);

Player.propTypes = {
  name: PropTypes.string.isRequired,
  startingWeight: PropTypes.number.isRequired,
  currentWeight: PropTypes.number.isRequired,
  character: PropTypes.string.isRequired,
  food: PropTypes.string, //eslint-disable-line
};

export default Player;
