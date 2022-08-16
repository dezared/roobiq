/* eslint-disable no-unused-vars */
import React, { useMemo, useState } from 'react';
import styled from 'styled-components';
import initScenarios, { ActionType as AnswerType } from '../configs/scenarios';
import ActionBlock from '../components/chat/action-block/ActionBlock';
import ChatBlockComponent from '../components/chat/ChatBlock';
import Button from '../components/controls/Button';

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

const Tabs = styled.div`
  width: 100%;
`;

const ChatBlock = styled(ChatBlockComponent)`
  width: 100%;
  flex: 1;
  margin-bottom: 32px;
`;

const BtnGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  gap: 16px;
`;

// eslint-disable-next-line react/prop-types
function Chat() {
  const scenario = useMemo(() => initScenarios[0], []);

  const [stepId, setStepId] = useState(scenario.steps[0].id);
  const [stepIndex, setStepIndex] = useState(0);

  const [questionIndex, setQuestionIndex] = useState(0);

  const [answers, setAnswers] = useState({});

  const currentStep = useMemo(
    () => scenario.steps[stepIndex],
    [scenario, stepIndex],
  );

  const currentQuestion = useMemo(
    () => currentStep.questions[questionIndex],
    [currentStep, questionIndex],
  );

  const chat = useMemo(
    () => {
      const newChat = [];
      if (stepIndex === 0) {
        newChat.push({
          question: 'Расскажи мне о цели презентации пожалуйста',
          answer: 'Привлечь инвестора',
          id: 'first',
          answerType: AnswerType.text,
        });
      }

      // eslint-disable-next-line no-restricted-syntax
      for (const question of currentStep.questions) {
        if (!answers[question.id]) {
          newChat.push({ question: question.question, id: question.id });
          return newChat;
        }

        newChat.push({
          question: question.question,
          answer: answers[question.id],
          answerType: question.answerType,
          id: question.id,
        });
      }

      newChat.push({
        question: 'Ты молодец! Мы заполнили секцию ✅',
        id: 'nice',
        answerType: AnswerType.text,
      });
      newChat.push({
        question: 'Посмотри, что получилось или давай двигаться дальше)',
        id: 'next',
        answerType: AnswerType.text,
      });

      return newChat;
    },
    [currentStep.questions, answers, stepIndex],
  );

  const onActionChange = (obj) => {
    setAnswers({ ...answers, ...obj });
    setQuestionIndex(questionIndex + 1);
    console.log({ ...answers, ...obj });
  };

  const onNextTab = () => {
    setStepIndex(stepIndex + 1);
    setQuestionIndex(0);
    setAnswers({});
  };

  return (
    <Wrap>
      <Content>
        <Tabs>Tabs</Tabs>
        <ChatBlock chat={chat} />
        {currentQuestion ? (
          <ActionBlock
            actionType={currentQuestion.answerType}
            actionName={currentQuestion.id}
            onChange={onActionChange}
            payload={currentQuestion.payload}
          />
        ) : (
          <BtnGroup>
            <Button>Смотреть</Button>
            <Button color="secondary" onClick={onNextTab}>Продолжить создание</Button>
          </BtnGroup>
        )}

      </Content>
    </Wrap>
  );
}

export default Chat;
