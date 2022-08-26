import React, { useEffect } from 'react';
import styled from 'styled-components';
import Slide from '../components/Slides';
import PropTypes from 'prop-types';

const SlideCont = styled.div`
  display: flex;
  position: absolute;
  top: 60%;
  flex-direction: row;  
  align-items: flex-start;
  padding: 16px 0 16px 16px;
  gap: 12px;
  overflow-y: hidden;
  -ms-overflow-style: none;  /* Internet Explorer 10+ */
  scrollbar-width: none;  /* Firefox */
  
  width: 100%;
  
  &::-webkit-scrollbar {
    display: none;  /* Safari and Chrome */
  }
`;

function SlidesCont( { slides } ) {

  return (
    <SlideCont>
      {slides.map((slide) => <Slide key={slide.id}/>)}
    </SlideCont>
  );
}

SlidesCont.propTypes = {
  slides: PropTypes.array,
}

SlidesCont.defaultProps = {
  slides: [
    {name: 'bdkjvsZD', id: 1,},
    {name: 'bdkjvsZD', id: 2,},
    {name: 'bdkjvsZD', id: 3,}
  ]
}

export default SlidesCont;