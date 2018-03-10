import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Avatar = styled.div`
  height: 100px;
  width: 100px;
  margin-bottom: 40px;

  img {
    height: 100%;
  }
`;

const Character = ({ character }) => ( //eslint-disable-line
  <Avatar>
    <img src={`characters/${character}.svg`} alt={character} />
  </Avatar>
);

Character.propTypes = {
  character: PropTypes.string.isRequired,
};

export default Character;
