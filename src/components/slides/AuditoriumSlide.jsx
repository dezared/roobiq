import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';


const SlideBox = styled.div`
  width: 100%;
  height: 100%;
  filter: drop-shadow(0px 2px 4px rgba(107, 115, 137, 0.2));
  border-radius: 8px;
  flex: none;
  order: 0;
  flex-grow: 0;
  font-size: 1em;
`;

const Title = styled.h1`
  position: absolute;
  left: 5.21%;
  top: 9.26%;
  bottom: 78.89%;
  font-weight: 500;
  font-size: 2em;
  color: #25A9E0;
`;

const LeftBlock = styled.div`
  position: absolute;
  width: 35%;
  height: 40%;
  left: 0;
  top: 39.6%;
  background: #25A9E0;
  font-size: 1em;
  display: flex;
  justify-content: center;
`;

const LeftTitle = styled.p`
  position: absolute;
  left: 14.33%;
  right: 14.33%;
  top: 40%;
  font-weight: 700;
  font-size: 1.2em;
  color: #FFFFFF;
`;

const TitleList = styled.ul`
  position: absolute;
  left: 50.56%;
  top: 43.61%;
  list-style-type: disc;
  list-style-position: inside;
  font-size: 1em;
`;

const TitleLi = styled.li`
  font-weight: 300;
  line-height: 1.5em;
  font-size: 1em;
  color: #404041;

`;

function AuditoriumSlide({ title, leftTitle, titleList }) {
  return (
    <SlideBox>
      <Title>{ title }</Title>
      <div>
        <LeftBlock>
          <LeftTitle>
            { leftTitle }
          </LeftTitle>
        </LeftBlock>
        <TitleList>
          {titleList.map((tit) => <TitleLi key={tit.index}>{tit.desc}</TitleLi>)}
        </TitleList>
      </div>
    </SlideBox>
  )
}

AuditoriumSlide.propTypes = {
  title: PropTypes.string,
  leftTitle: PropTypes.string,
  titleList: PropTypes.array,
}

AuditoriumSlide.defaultProps = {
  title: 'Последствия',
  leftTitle: 'Плохие презентации',
  titleList: [
    {desc: 'We haven`t this skills', index: 1},
    {desc: 'We haven`t this skills 2', index: 2},
    {desc: 'We haven`t this skills 3', index: 3},
  ],
};

export default AuditoriumSlide;