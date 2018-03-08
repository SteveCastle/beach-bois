import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Background = styled.div`
height: 800px;
position:fixed;
background-image: url('backgrounds/${props => props.background}.svg');
background-size: 100%;
background-repeat: no-repeat;
display: flex;
`;

const World = ({ background, children }) => (
  <Background background={background}>
    {children.map(child => child)}
  </Background>
);

World.propTypes = {
  background: PropTypes.string.isRequired,
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
};

export default World;
