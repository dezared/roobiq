export const ActionType = {
  text: 'Text',
  textArray: 'TextArray',
  objectArray: 'ObjectArray',
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
        questions: [
          {
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
      {
        id: 'audience',
        name: 'Аудитория',
        questions: [{
          id: 'audience_segments',
          question: 'Укажи сегменты целевой аудитории.',
          answerType: ActionType.textArray,
          payload: {
            title: 'Сегменты аудитории',
            description: 'Укажи сегменты, на которые будешь фокусироваться в первую очередь.',
            itemName: 'Сегмент',
            btnText: 'Указать сегменты',
          },
        }, {
          id: 'segments_short_description',
          question: 'Теперь давай немного расскроем тезисы кратким общим описанием:',
          answerType: ActionType.text,
        }],
      },
      {
        id: 'product',
        name: 'Решение и продукт',
        questions: [{
          id: 'product_feature',
          question: 'Опиши своё решение 1 тезисом',
          answerType: ActionType.text,
        }, {
          id: 'audience_segments',
          question: 'Теперь, нужно раскрыть решение. Я подготовил для этого слайд с 3 пунктами. Заполни их пожалуйста.',
          answerType: ActionType.objectArray,
          payload: {
            title: 'Подробное описание решения',
            description: 'У каждого пункта нужно указать название и краткое описание.',
            itemName: 'Пункт',
            btnText: 'Заполнить',
            minElements: 3,
            deletable: false,
            addable: false,

            objectFields: [{
              name: 'name',
              label: 'Название',
              placeholder: 'Название печатать тут',
              type: ActionType.text,
            }, {
              name: 'description',
              label: 'Описание',
              placeholder: 'Описание печатать тут',
              type: ActionType.text,
            }],
          },
        },
        ],
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
