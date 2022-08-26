import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';

const SlideBox = styled.div`
  width: 100%;
  height: 100%;
  filter: drop-shadow(0px 2px 4px rgba(107, 115, 137, 0.2));
  border-radius: 8px;
  flex-wrap: nowrap;
  order: 0;
  flex-grow: 0;
  font-size: 1em;
  background: #25A9E0 ;
`;

const Title = styled.h1`
  position: absolute;
  left: 5.21%;
  right: 73.8%;
  top: 9.26%;
  bottom: 78.89%;
  font-weight: 500;
  font-size: 2em;
  color: #fff;
`;

const SolutionList = styled.div`
  display: flex;
  flex-direction: row;
  gap: calc((100% / 3) - 2rem);
  position: absolute;
  left: 5.21%;
  top: 33.61%;
`;

const SolutionItem = styled.div`
  flex: calc((100% / 3) - 2rem);
  font-size: 1em;
`;

const SolutionItemIcon = styled.h2`
  top: 5%;
  //position: absolute;
  font-size: 1.7em;
  line-height: 1.8em;
  color: #fff;
`;

const SolutionItemTitle = styled.h2`
  //position: absolute;
  top: 45%;
  font-weight: 500;
  font-size: 0.8em;
  line-height: 1em;
  color: #FFFFFF;
`;

const SolutionItemList = styled.ol`
  //position: absolute;
  top: 60%;
  list-style-type: disc;
  list-style-position: inside;
  font-size: 1em;
`;

const SolutionItemLi = styled.li`
  font-weight: 300;
  //line-height: 1.5em;
  font-size: 0.5em;
  color: #fff;
`;

function SolutionSlide({ title, solutionList }) {
  return (
    <SlideBox>
      <Title>{title}</Title>
      <SolutionList>
        {solutionList.map((Sl) => (
          <SolutionItem key={Sl.id}>
            <SolutionItemIcon>{Sl.SolutionItemIcon}</SolutionItemIcon>
            <SolutionItemTitle>{Sl.SolutionItemTitle}</SolutionItemTitle>
            <SolutionItemList>
              {Sl.SolutionItemList.map((solLi) => {solLi.desc.map((point) =>
                <SolutionItemLi key={solLi.index}>{point}</SolutionItemLi>)})}
            </SolutionItemList>
          </SolutionItem>
        ))}
      </SolutionList>
    </SlideBox>
  );
}

SolutionSlide.propTypes = {
  title: PropTypes.string,
  solutionList: PropTypes.array,
};
SolutionSlide.defaultProps = {
  title: 'Solution and product',
  solutionList: [
    {
      SolutionItemIcon: '1',
      SolutionItemTitle: 'Constructor',
      SolutionItemList: [
        {
          desc: [
            'Четкая структура',
            'Акцент на композиции, типографике и колористике',
            'Нельзя испортить внешний вид',
            'Экспорт в популярные форматы',
            'Совместная работа в режиме реального времени',
            'Интеграция с популярными сервисами',
          ],
          index: 1,
        },
      ],
      id: 1,
    },
    {
      SolutionItemIcon: '1',
      SolutionItemTitle: 'Constructor',
      SolutionItemList: [
        {
          desc: [
            'Четкая структура',
            'Акцент на композиции, типографике и колористике',
            'Нельзя испортить внешний вид',
            'Экспорт в популярные форматы',
            'Совместная работа в режиме реального времени',
            'Интеграция с популярными сервисами',
          ],
          index: 2,
        },
      ],
      id: 2,
    },
    {
      SolutionItemIcon: '1',
      SolutionItemTitle: 'Constructor',
      SolutionItemList: [
        {
          desc: [
            'Четкая структура',
            'Акцент на композиции, типографике и колористике',
            'Нельзя испортить внешний вид',
            'Экспорт в популярные форматы',
            'Совместная работа в режиме реального времени',
            'Интеграция с популярными сервисами',
          ],
          index: 3,
        },
      ],
      id: 3,
    },
  ],
};

export default SolutionSlide;
