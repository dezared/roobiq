/* eslint-disable no-unused-vars,react/prop-types */
import React, { Fragment } from 'react';
import styled from 'styled-components';
import Avatar from '../controls/Avatar';
import { ActionType } from '../../configs/scenarios';

const Wrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 16px;
`;

const MessageBlock = styled.div`
  padding: 16px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #2E3135;
  border-radius: 16px;
  display: inline-block;
`;

const QuestionBlock = styled(MessageBlock)`
  background: #F8F8F8;
`;

const AnswerBackground = styled(MessageBlock)`
  background: #E6EBF9;
`;

const QuestionBlockWrap = styled.div`
  display: flex;
  gap: 8px;
`;

const AnswerBlockWrap = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const List = styled.ul`
  list-style-type: disc;
  list-style-position: inside;
`;

function AnswerBlock({ answerType, answer }) {
  switch (answerType) {
    case ActionType.text:
      return <AnswerBackground>{answer}</AnswerBackground>;
    case ActionType.textArray:
      return (
        <AnswerBackground>
          <List>
            {answer.map((item) => (
              <li>{item}</li>
            ))}
          </List>
        </AnswerBackground>
      );
    default:
      throw new Error(`Answer type "${answerType}" does not exists`);
  }
}

// eslint-disable-next-line react/prop-types
function ChatBlock({ chat, className }) {
  return (
    <Wrap className={className}>
      {
        chat.map((row) => (
          <Fragment key={row.id}>
            <QuestionBlockWrap>
              <Avatar color="#7A94DF">R</Avatar>
              <QuestionBlock>{row.question}</QuestionBlock>
            </QuestionBlockWrap>
            {row.answer
              ? (
                <AnswerBlockWrap>
                  <AnswerBlock answer={row.answer} answerType={row.answerType} />
                </AnswerBlockWrap>
              )
              : null}
          </Fragment>
        ))
      }
    </Wrap>
  );
}

export default ChatBlock;
