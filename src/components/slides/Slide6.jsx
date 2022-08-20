import styled from 'styled-components';
import React from 'react';

const SlideBox = styled.div`
  width: 117px;
  height: 66px;
  filter: drop-shadow(0px 2px 4px rgba(107, 115, 137, 0.2));
  border: 2px solid brown;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  order: 0;
  flex-grow: 0;
  font-size: 3px;
`;

const MapConcurents = styled.h1`
  font-size: 3em;
  position: absolute;
  top: 45%;
  color: #25A9E0;
`;

function Slide_6() {
  return (
    <SlideBox>
      <MapConcurents>Карта конкурентов</MapConcurents>
    </SlideBox>
  )
}

export default Slide_6;
