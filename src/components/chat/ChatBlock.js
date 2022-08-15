/* eslint-disable no-unused-vars,react/prop-types */
import React, { Fragment } from 'react';
import styled from 'styled-components';
import Avatar from '../controls/Avatar';

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

const AnswerBlock = styled(MessageBlock)`
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
              ? (<AnswerBlockWrap><AnswerBlock>{row.answer}</AnswerBlock></AnswerBlockWrap>)
              : null}
          </Fragment>
        ))
      }
    </Wrap>
  );
}

export default ChatBlock;
