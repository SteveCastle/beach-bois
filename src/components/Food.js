import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { times } from 'underscore';

const FoodContainer = styled.div`
width: 80px;
align-items: flex-end;
img {
  height: 20px;
  width: 20px;
}
.disabled {
  opacity: .3;
}
`;

const Food = ({ startingWeight, currentWeight, food = 'burger' }) => ( // eslint-disable-line
  <FoodContainer>
    {times(Math.floor((startingWeight - currentWeight) / 2), () =>
      (<img src="items/star.svg" alt="star" key={Math.random()} />))}
    {times(Math.floor(currentWeight / 2), () => (<img src={`food/${food}.svg`} alt="burger" key={Math.random()} />))}

  </FoodContainer>
);

Food.propTypes = {
  startingWeight: PropTypes.number.isRequired,
  currentWeight: PropTypes.number.isRequired,
  food: PropTypes.string.isRequired,
};

export default Food;
