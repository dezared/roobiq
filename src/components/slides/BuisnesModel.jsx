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

const HeadCont = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Head = styled.p`
  background: #25A9E0;
  color: #fff;
  height: 3em;
  width: calc((100% / 3) - 0.2em);
  font-size: 1.5em;
  font-weight: 400;
`;

const ListCont = styled.div`
  top: 33%;
  left: 5%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 1.2em;
`;

const PropList = styled.ul`
  position: absolute;
  width: calc((100%/3) - 0.5em);
  top: 3%;
  list-style-type: disc;
  list-style-position: inside;
  font-size: 1em;  
`;

const PropLi = styled.li`
  font-size: 1em;
  line-height: 1.2em;
  color: black;
  font-weight: 300;
`;

function buisnes_slide({ title, heads }) {
  return (
    <Slide_box>
      <Title>{title}</Title>
      <HeadCont>
        {heads.map((head) => <Head>{head.title}</Head>)}
      </HeadCont>
      <ListCont>
        {heads.map((head) =>
        <PropList>
          {head.map((h) => {h.list.map((li) => <PropLi>{li}</PropLi>)})}
        </PropList>
        )}
      </ListCont>
    </Slide_box>
  )
}

buisnes_slide.propTypes = {
  title: PropTypes.string,
  heads: PropTypes.array,
}

buisnes_slide.defaultProps = {
  title: 'Бизнес-модель',
  heads: [
    {
      title: 'Клиенты',
      list: [
        'Студенты',
        'Начинающие и серийные стартаперы',
        'Преподаватели в школах и их ученики',
      ]
    }
  ]
}

export default buisnes_slide;