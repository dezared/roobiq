import React from 'react';
import styled from 'styled-components';
import splash_competitors from './CompetitorsSplashSlide';

const SlideCont = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 16px 0 16px 16px;
  gap: 12px;
  overflow-y: hidden;
  -ms-overflow-style: none;  /* Internet Explorer 10+ */
  scrollbar-width: none;  /* Firefox */

  width: 90%;

  &::-webkit-scrollbar {
    display: none;  /* Safari and Chrome */
    }
`;

function SlideContainer() {
  return (
    <SlideCont>
      <splash_competitors />
    </SlideCont>
  )
}

export default SlideContainer;