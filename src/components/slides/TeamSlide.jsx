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
  font-weight: 500;
  font-size: 2em;
  color: #25A9E0;
`;

const ListCont = styled.div`
  width: 90%;
  height: 50%;
  position: absolute;
  top: 50%;
  left: 5%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
`;

const Human = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: auto;
`;

const DevDesc = styled.ul`
  padding-top: 4%;
  list-style-type: disc;
  list-style-position: inside;
`;

const DevDescLi = styled.li`
  font-size: 0.5em;
`;

const HumanName = styled.h2`
  color: #25A9E0;
  font-size: 1em;
`;

const HumanJob = styled.h3`
  padding-top: 3%;
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