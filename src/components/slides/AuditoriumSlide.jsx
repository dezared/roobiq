import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';


const SlideBox = styled.div`
  width: 517px;
  height: 266px;
  filter: drop-shadow(0px 2px 4px rgba(107, 115, 137, 0.2));
  border: 2px solid brown;
  border-radius: 8px;
  flex: none;
  order: 0;
  flex-grow: 0;
  font-size: 3px;
`;

const Title = styled.h1`
  position: absolute;
  left: 5.21%;
  right: 73.8%;
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
  font-size: 4px;
  display: flex;
  justify-content: center;
`;

const LeftTitle = styled.p`
  position: absolute;
  left: 14.33%;
  right: 14.33%;
  top: 40%;
  font-weight: 700;
  font-size: 1em;
  color: #FFFFFF;
`;

const TitleList = styled.ul`
  position: absolute;
  left: 41.56%;
  right: 6.67%;
  top: 43.61%;
  bottom: 26.76%;
  list-style-type: disc;
  list-style-position: inside;
  font-size: 15px;
`;

const TitleLi = styled.li`
  font-weight: 300;
  line-height: 1.5em;
  font-size: 1.2em;
  color: #404041;

`;

function audit({ title, leftTitle, titleList }) {
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

audit.propTypes = {
  title: PropTypes.string,
  leftTitle: PropTypes.string,
  titleList: PropTypes.array,
}

audit.defaultProps = {
  title: 'Posledstviya',
  leftTitle: 'Bad presentations',
  titleList: [
    {desc: 'We haven`t this skills', index: 1},
    {desc: 'We haven`t this skills 2', index: 2},
    {desc: 'We haven`t this skills 3', index: 3},
  ],
};

export default audit;
