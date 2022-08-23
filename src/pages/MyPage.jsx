import React from 'react';
import styled from 'styled-components';


const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 16px 40px;
`;

const Content = styled.div`
  width: 100%;
  max-width: 350px;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 30px;
  color: #2E3135;
  text-align: left;
  top: 7.5%;
  width: 90%;
  max-width: 315px;
  height: 10%;
`;

const Window = styled.div`
  position: absolute;
  width: 90%;
  max-width: 315px;
  height: 25%;
  top: 20%;
  display: flex;
  justify-content: center;
  box-shadow: 0px 2px 4px rgba(107, 115, 137, 0.2);
  border-radius: 16px;
`;

function MyPage() {
  return (
    <Wrap>
      <Content>
        <Title>Презентация по итогу одной из секций</Title>
        <Window>Здесь будет слайд из выполненной секции</Window>
      </Content>
    </Wrap>
  )
}

export default MyPage;
