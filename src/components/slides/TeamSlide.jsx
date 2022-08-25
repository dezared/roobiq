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
  right: 73.8%;
  top: 9.26%;
  bottom: 78.89%;
  font-weight: 500;
  font-size: 2em;
  color: #25A9E0;
`;

const ListCont = styled.div`
  width: 100%;
  height: 70%;
  position: absolute;
  top: 20%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Human = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 20%;
`;

const DevDesc = styled.ul`
  list-style-type: disc;
`;

const DevDescLi = styled.li`
  font-size: 0.7em;
`;

const HumanName = styled.h2`
  color: #25A9E0;
  font-size: 1.5em;
`;

const HumanJob = styled.h3`
  color: #082C4E;
  font-size: 0.5em;
`;

function TeamSlide({ title, people }) {
  return (
    <SlideBox>
      <Title>{title}</Title>
      <ListCont>
        {people.map((ppl) => <Human>
          <img src="#" alt="Photo"/>
          <HumanName>{ppl.name}</HumanName>
          <HumanJob>{ppl.job}</HumanJob>
          <DevDesc>{ppl.desc.map((li) => <DevDescLi key={li}>{li}</DevDescLi>)}</DevDesc>
        </Human>)}
      </ListCont>
    </SlideBox>
  )
}

TeamSlide.propTypes = {
  title: PropTypes.string,
  people: PropTypes.array,
}

TeamSlide.defaultProps = {
  title: 'Команда',
  people: [
    {
      name: 'Олег Князев',
      job: 'Аналитик',
      desc: [
        '1 год опыта где-то там',
      ],
    },
    {
      name: 'Антон Лошкарев',
      job: 'Технический лидер',
      desc: [
        'Студент чего-то там',
      ],
    },
    {
      name: 'Вячеслав Харламов',
      job: 'Маркетолог',
      desc: [
        '25 лет опыта в дизайне',
      ],
    },
    {
      name: 'Лев Погосов',
      job: 'Консультант и продуктовый дизайнер',
      desc: [
        '13 лет опыта в разработке',
      ],
    },
  ],
}

export default TeamSlide;