import React, { useEffect } from 'react';
import styled from 'styled-components';
import ProblSlide from '../components/slides/ProblemSlide';

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

function SlidesCont() {

  return (
    <SlideCont>
      {/*{slides.map((slide) => (*/}
        <ProblSlide />
        <ProblSlide />
        <ProblSlide />
    </SlideCont>
  );
}

export default SlidesCont;