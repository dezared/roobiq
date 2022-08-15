export const ActionType = {
  text: 'Text',
};

const scenarios = [
  {
    id: 'get_investments',
    name: 'Привлечь инвестора',
    order: 2,
    steps: [
      {
        id: 'project',
        name: 'Проект',
        questions: [{
          id: 'project_name',
          question: 'Отлично! Подскажи пожалуйста, название проекта?',
          answerType: ActionType.text,
        }, {
          id: 'project_description',
          question: 'В 2-3 предложения опиши проект пожалуйста.',
          answerType: ActionType.text,
        }],
      },
      {
        id: 'problem',
        name: 'Проблема',
        questions: [],
      },
    ],
  },
  {
    id: 'find_team',
    name: 'Привлечь команду',
    order: 1,
    steps: [],
  },
];

export default scenarios;
