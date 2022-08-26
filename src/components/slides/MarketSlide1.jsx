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

const TitlesContainer = styled.div`
  width: 50%;
  height: 40%;
  left: 3%;
  position: absolute;
  display: flex;
  flex-direction: column;
`;

const TAM = styled.h2`
  font-size: 1em;
  color: #C6D5DB;
`;

const SAM = styled.h2`
  font-size: 1em;
  color: #B4CFDA;
`;

const SOM = styled.h2`
  font-size: 1em;
  color: #25A9E0;
`;

const List = styled.ol`
  list-style-type: disc;
  list-style-position: inside;
  font-size: 1em;
  color: #25A9E0;
`;

const Li = styled.li`
  color: black;
  font-size: 0.7em;
`;

const BiggestCircle = styled.div`
  width: 40%;
  height: 70%;
  position: absolute;
  left: 55%;
  top: 18.15%;
  bottom: 18.07%;
  border-radius: 100%;
  background: #C6D5DB;
  font-size: 1em;
`;

const MiddleCircle = styled.div`
  width: 40%;
  height: 40%;
  position: absolute;
  left: 55%;
  top: 38.54%;
  bottom: 18.07%;
  border-radius: 100%;
  background: #B4CFDA;
  font-size: 0.75em;
`;


const SmallestCircle = styled.div`
  width: 30%;
  height: 30%;
  position: absolute;
  top: 52%;
  left: 65%;
  bottom: 18.07%;
  border-radius: 100%;
  background: #25A9E0;
  font-size: 0.5em;
`;

const RightTitle = styled.h2`
  font-size: 1em;
  padding-top: 2%;
  color: #fff;
  position: absolute;
  left: 36%;
  top: 15%;
`;

function MarketSlide1({ title, tam, sam, som }) {
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
}

MarketSlide1.defaultProps = {
  title: 'Market b2b',
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