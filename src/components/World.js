import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Background = styled.div`
  height: 100%;
  width: 100%;
  position:fixed;
  background-image: url('backgrounds/${props => props.background}');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
`;

const World = ({ background, children }) => (
  <Background background={background}>
    {children}
  </Background>
);

World.propTypes = {
  background: PropTypes.string.isRequired,
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
};

export default World;
