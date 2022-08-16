export const ActionType = {
  text: 'Text',
  textArray: 'TextArray',
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
        questions: [{
          id: 'problem',
          question: 'Теперь нужно 1 тезисом сформулировать проблему, которую решит проект:',
          answerType: ActionType.text,
        }, {
          id: 'problem_details',
          question: 'Отлично! Чтобы всем всё стало понятно, нужно развернуть основной тезис ☝🏼',
          answerType: ActionType.textArray,
          payload: {
            title: 'Раскрываем проблему',
            description: 'Желательно добавить как минимум 3, раскрывающих основной тезис пункта.',
            itemName: 'Пункт',
            btnText: 'Перейти к описанию',
            minElements: 3,
          },
        }, {
          id: 'problem_short_description',
          question: 'Супер 👍🏼 Теперь давай немного расскроем тезисы кратким общим описанием:',
          answerType: ActionType.text,
        }],
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
