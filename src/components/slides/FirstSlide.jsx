import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';

const SlideBox = styled.div`
  width: 117px;
  height: 66px;
  filter: drop-shadow(0px 2px 4px rgba(107, 115, 137, 0.2));
  border-radius: 8px;
  order: 0;
  flex-grow: 0;
  font-size: 5px;
`;

const Title = styled.h1`
  position: absolute;
  left: 6.51%;
  right: 74.48%;
  top: 34.81%;
  bottom: 53.33%;
  font-weight: 700;
  font-size: 2em;
  letter-spacing: 0.1em;
  color: #25A9E0;
`;

const Description = styled.p`
  position: absolute;
  left: 6.41%;
  right: 22.03%;
  top: 57.78%;
  bottom: 30.37%;
  font-weight: 400;
  font-size: 1em;
  color: #404041;
`;

function FirstSlide({ title, desc }) {
  return (
    <SlideBox>
      <Title>{ title }</Title>
      <Description>{ desc }</Description>
    </SlideBox>
  )
}

FirstSlide.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
}

FirstSlide.defaultProps = {
  title: 'ROOBIQ',
  desc: 'Конструктор презентаций с экономическими расчетами',
}

export default FirstSlide;
