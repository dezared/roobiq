import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';

const SlideBox = styled.div`
  width: 117px;
  height: 66px;
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

const TitleList = styled.ul`
  position: absolute;
  left: 5.21%;
  right: 43.02%;
  top: 26.11%;
  bottom: 56.11%;
  list-style-type: disc;
  list-style-position: inside;
  font-size: 2px;
`;

const TitleLi = styled.li`
  font-weight: 300;
  line-height: 1.5em;
  font-size: 1.2em;
  color: #404041;
`;

const Line = styled.div`
  position: absolute;
  left: 5.16%;
  right: 53.65%;
  top: 52.81%;
  bottom: 50.19%;
  border: 0.1em solid #25A9E0;
  border-radius: 10px;
  
`;

const Description = styled.p`
  position: absolute;
  left: 5.21%;
  right: 14.38%;
  top: 57.22%;
  bottom: 13.15%;
  font-weight: 300;
  line-height: 1em;
  font-size: 0.8em;
  color: #404041;

`;

function ProblSlide({ title, list, desc }) {
  return (
    <SlideBox>
      <Title>{title}</Title>
      <TitleList>
        {list.map((tit) => <TitleLi key={tit.index}>{tit.desc}</TitleLi>)}
      </TitleList>
      <Line/>
      <Description>{desc}</Description>
    </SlideBox>
  )
}

ProblSlide.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  list: PropTypes.array,
}

ProblSlide.defaultProps = {
  title: 'Problem',
  desc: 'Большинство сотрудников разного уровня и людей вообще не обладает достаточным набором навыков и компетенций для создания презентаций и тем более для создания полноценного набора материалов по проекту/стартапу. Проблемы подстерегают всюду: от правильной структуры каждого документа до необходимости искать и анализировать информацию + к этому можно добавить оформление всех материалов.',
  list: [
    {desc: 'We haven`t this skills', index: 1},
    {desc: 'We haven`t this skills 2', index: 2},
    {desc: 'We haven`t this skills 3', index: 3},
  ]
}

export default ProblSlide;
