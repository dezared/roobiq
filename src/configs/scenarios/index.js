export const ActionType = {
  text: 'Text',
  textArray: 'TextArray',
  objectArray: 'ObjectArray',
  selectMultiple: 'SelectMultiple',
  object: 'Object',
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
      {
        id: 'market',
        name: 'Рынок',
        questions: [
          {
            id: 'market_segments',
            question: 'В первую очередь выбери сегмент: B2B, B2C, B2G...или несколько.',
            answerType: ActionType.selectMultiple,
            payload: {
              title: 'Сегмент',
              btnText: 'Выбрать сегмент',
              options: [{
                value: 'b2c',
                title: 'B2C',
                description: 'когда клиенты любые физ.лица',
              }, {
                value: 'b2b',
                title: 'B2B',
                description: 'когда клиенты любые юр.лица',
              }, {
                value: 'b2g',
                title: 'B2G',
                description: 'когда клиенты государства',
              }],
            },
          }, {
            id: 'market_tam',
            question: 'Укажи размеры рынков TAM (общий целевой рынок, где потенциально могут пользоваться продуктом), SAM (доступный объем рынка) и SOM (реально достижимый объем рынка), на который ориентирован твой продукт. Здесь надо  показать источники информации или дать ссылки на собственные исследования.',
            answerType: ActionType.object,
            payload: {
              title: 'Рынок: TAM',
              description: 'Нужно прописать ориентировочную цифру и дать пояснение.',
              btnText: 'Указать',
              itemName: 'ТАМ',

              objectFields: [{
                name: 'amount',
                label: 'ТАМ',
                placeholder: 'Цифру печатать тут',
                type: ActionType.text,
              }, {
                name: 'description',
                placeholder: 'Пояснение печатать тут',
                type: ActionType.text,
              }, {
                name: 'source',
                label: 'Источники',
                placeholder: 'Источники печатать тут',
                type: ActionType.text,
              }],
            },
          }, {
            id: 'market_sam',
            question: 'Укажи в денежном выражении часть от предыдущего показателя, на основе тех, кто может себе позволить ваш продукт или аналог.',
            answerType: ActionType.object,
            payload: {
              title: 'Рынок: SAM',
              description: 'Нужно прописать ориентировочную цифру и дать пояснение.',
              btnText: 'Указать',
              itemName: 'SAM',

              objectFields: [{
                name: 'amount',
                label: 'SAM',
                placeholder: 'Цифру печатать тут',
                type: ActionType.text,
              }, {
                name: 'description',
                placeholder: 'Пояснение печатать тут',
                type: ActionType.text,
              }, {
                name: 'source',
                label: 'Источники',
                placeholder: 'Источники печатать тут',
                type: ActionType.text,
              }],
            },
          }, {
            id: 'market_som',
            question: 'Укажи в денежном выражении сколько ваш продукт может забрать рынка за год (максимально реалистично). Сколько сможет оказать услуг, произвести продуктов и пр.',
            answerType: ActionType.object,
            payload: {
              title: 'Рынок: SOM',
              description: 'Нужно прописать ориентировочную цифру и дать пояснение.',
              btnText: 'Указать',
              itemName: 'SOM',

              objectFields: [{
                name: 'amount',
                label: 'SOM',
                placeholder: 'Цифру печатать тут',
                type: ActionType.text,
              }, {
                name: 'description',
                placeholder: 'Пояснение печатать тут',
                type: ActionType.text,
              }, {
                name: 'source',
                label: 'Источники',
                placeholder: 'Источники печатать тут',
                type: ActionType.text,
              }],
            },
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
