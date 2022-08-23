/* eslint-disable no-unused-vars */
import React, {
  useCallback, useEffect, useMemo, useState,
} from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom' ;
import initScenarios, { ActionType as AnswerType } from '../configs/scenarios';
import ActionBlock from '../components/chat/action-block/ActionBlock';
import ChatBlockComponent from '../components/chat/ChatBlock';
import Button from '../components/controls/Button';
import TabsContainer from '../components/TabsContainer';

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
const ChatBlock = styled(ChatBlockComponent)`
  width: 100%;
  margin-bottom: 32px;
  overflow: hidden;
  flex: 1;
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

  const getStatusByIndex = useCallback((index) => {
    if (index < stepIndex) return 'prev';
    if (index > stepIndex) return 'next';

    return 'current';
  }, [stepIndex]);

  const tabs = useMemo(
    () => scenario.steps
      .sort((a, b) => a.order - b.order)
      .map((item, index) => ({
        status: getStatusByIndex(index),
        id: item.id,
        index,
        children: item.name,
      })),
    [scenario.steps, getStatusByIndex],
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
          newChat.push({ question: question.question, id: question.id, payload: question.payload });
          return newChat;
        }

        newChat.push({
          question: question.question,
          answer: answers[question.id],
          answerType: question.answerType,
          payload: question.payload,
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
  };

  const onNextTab = () => {
    setStepIndex(stepIndex + 1);
    setQuestionIndex(0);
    setAnswers({});
  };

  return (
    <Wrap>
      <Content>
        <TabsContainer tabs={tabs} currentIndex={stepIndex} />
        <ChatBlock chat={chat} />
        {currentQuestion ? (
          <ActionBlock
            actionType={currentQuestion.answerType}
            actionName={currentQuestion.id}
            answers={answers}
            onChange={onActionChange}
            payload={currentQuestion.payload}
          />
        ) : (
          <BtnGroup>
            <Button component={Link} to='/my'>Смотреть</Button>
            <Button color="secondary" onClick={onNextTab}>Продолжить создание</Button>
          </BtnGroup>
        )}

      </Content>
    </Wrap>
  );
}

export default Chat;
