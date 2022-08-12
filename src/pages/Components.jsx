import React from 'react';
import styled from 'styled-components';
import TextInput from '../components/TextInput';
import Button from '../components/Button';

const Box = styled.div`
  padding: 30px 50px;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

const NameField = styled.div`
  margin-right: 30px;
  width: 100px;
`;

function Components() {
  return (
    <Box>
      <Row>
        <NameField>Text input</NameField>
        <TextInput placeholder="Печатать тут" />
      </Row>

      <Row>
        <NameField>Primary Button</NameField>
        <Button>Перейти к описанию</Button>
      </Row>

      <Row>
        <NameField>Secondary Button</NameField>
        <Button color="secondary">Добавить пункт</Button>
      </Row>
    </Box>
  );
}

export default Components;
