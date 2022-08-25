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
  font-size: 3px;
`;

const Difference = styled.p`
  position: absolute;
  top: 25.28%;
  bottom: 32.87%;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 2%;
  padding-right: 2%;
  font-size: 1em;
  background: #25A9E0;
`;

function DifferenceSlide( { solution } ) {
  return (
    <SlideBox>
      <Difference>{solution}</Difference>
    </SlideBox>
  )
}

DifferenceSlide.propTypes = {
  solution: PropTypes.string,
}

DifferenceSlide.defaultProps = {
  solution: `
    В отличии от текущих решений потенциальных конкурентов или заменителей, в конечном итоге мы планируем создать сервис, которой позволит пользователям моделировать свой проект: создать презентацию, посчитать экономику, проанализировать конкурентов, сформировать бизнес модель, сформировать отчётные материалы и потренировать навыки презентации, выступлений и переговоров.
  `
}

export default DifferenceSlide;
