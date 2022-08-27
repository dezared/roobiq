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

const TitlesContainer = styled.div`
  width: 50%;
  top: 23%;
  height: 40%;
  left: 3%;
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 8%;  
`;

const TAM = styled.h2`
  font-size: 1.5em;
  color: #C6D5DB;
`;

const SAM = styled.h2`
  font-size: 1.5em;
  color: #B4CFDA;
`;

const SOM = styled.h2`
  font-size: 1.5em;
  color: #25A9E0;
`;

const List = styled.ol`
  list-style-type: disc;
  list-style-position: inside;
  font-size: 1.3em;
  color: #25A9E0;
`;

const Li = styled.li`
  color: black;
  font-size: 0.7em;
`;

const Sources = styled.p`
  position: absolute;
  top: 85%;
  width: 60%;
  left: 5.21%;
  font-size: 0.7em;  
  color: #25A9E0;
`;

const BiggestCircle = styled.div`
  width: 45%;
  height: 80%;
  position: absolute;
  left: 50%;
  top: 13.15%;
  border-radius: 100%;
  background: #C6D5DB;
  font-size: 1em;
`;

const MiddleCircle = styled.div`
  width: 75%;
  height: 75%;
  position: absolute;
  left: 13%;
  top: 25.54%;
  border-radius: 100%;
  background: #B4CFDA;
  font-size: 0.9em;
`;


const SmallestCircle = styled.div`
  width: 70%;
  height: 70%;
  position: absolute;
  top: 30%;
  left: 15%;
  border-radius: 100%;
  background: #25A9E0;
  font-size: 0.7em;
`;

const RightTitle = styled.h2`
  font-size: 1em;
  padding-top: 2%;
  color: #fff;
  position: absolute;
  left: 36%;
  top: 15%;
`;

function MarketSlide1({ title, tam, sam, som, sources }) {
  return (
    <SlideBox>
      <Title>{title}</Title>
      <TitlesContainer>
        <TAM>TAM</TAM>
        <List>
          {tam.list.map((t) => <Li>{t}</Li>)}
        </List>

        <SAM>SAM</SAM>
        <List>
          {sam.list.map((s) => <Li>{s}</Li>)}
        </List>
        <SOM>SOM</SOM>
        <List>
          {som.list.map((s) => <Li>{s}</Li>)}
        </List>
      </TitlesContainer>
      <Sources>Источники: {sources}</Sources>
      <BiggestCircle>
        <RightTitle>{tam.value}</RightTitle>
        <MiddleCircle>
          <RightTitle>{sam.value}</RightTitle>
          <SmallestCircle>
            <RightTitle>{som.value}</RightTitle>
          </SmallestCircle>
        </MiddleCircle>
      </BiggestCircle>
    </SlideBox>
  )
}

MarketSlide1.propTypes = {
  title: PropTypes.string,
  tam: PropTypes.object,
  sam: PropTypes.object,
  som: PropTypes.object,
  sources: PropTypes.array,
}

MarketSlide1.defaultProps = {
  title: 'Market b2b',
  sources: [
    'seed-db.com',
    'gemconsorium.org', 
    'Global Entrepreneurship Monitor', 
    'ВШЭ', 
    'firrma.ru', 
    'Министерство экономического развития',
  ],
  tam: {
    value: '90 billions',
    list: [
      'something',
      'something vol.2'
    ],
  },
  sam: {
    value: '90 billions',
    list: [
      'something',
      'something vol.2'
    ],
  },
  som: {
    value: '90 billions',
    list: [
      'something',
      'something vol.2'
    ],
  },
}

export default MarketSlide1;