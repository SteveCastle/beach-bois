import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Avatar = styled.div`
  height: 60px;
  width: 60px;
  margin-bottom: 40px;
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
