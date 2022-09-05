import { DefineSlide } from '../components/slides/DefineSlide';
import { SLIDE_LIST } from '../configs/constants';

import styled from 'styled-components';

const Wrap = styled.div`
  width: 100%;
  display: flex;
  height: auto;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
  background: #fff;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Slide = styled.div`
<<<<<<< HEAD
  border: 1px solid #f4f4f4;
  width: 350px;
  height: 200px;
  font-size: 7px;
  margin-top: 20px;
  margin-left: 20px;
//   @media (max-width: 320px) {
//     width: 90%;
//     margin-left: 5%;
//     height: 160px;
//   };
//   @media (max-width: 360px) {
//     width: 90%;
//     margin-left: 5%;
//     height: 185px;
//   };
//   @media (max-width: 400px) {
//     width: 90%;
//     margin-left: 5%;
//     height: 220px;
//   };
//   @media (max-width: 440px) {
//     width: 90%;
//     margin-left: 5%;
//     font-size: 9px;
//     height: 225px;
//   };
//   @media (max-width: 500px) {
//     width: 90%;
//     margin-left: 5%;
//     height: 255px;
//     font-size: 10px;
//   };
//   @media (max-width: 540px) {
//     width: 90%;
//     margin-left: 5%;
//     font-size: 11px;
//     height: 280px;
//   };
//   @media (max-width: 600px) {
//     width: 90%;
//     margin-left: 5%;
//     height: 300px;
//     font-size: 11px;
//   };
//   @media (max-width: 640px) {
//     width: 90%;
//     margin-left: 5%;
//     height: 325px;
//     font-size: 13px;
//   };
//   @media (max-width: 700px) {
//     width: 90%;
//     margin-left: 5%;
//     font-size: 15px;
//     height: 360px;
//   };
//   @media (max-width: 750px) {
//     width: 90%;
//     margin-left: 5%;
//     font-size: 17px;
//     height: 410px;
//   };
//   @media (max-width: 870px) {
//     width: 90%;
//     margin-left: 5%;
//     font-size: 18px;
//     height: 450px;
//   };
//   @media (max-width: 920px) {
//     width: 90%;
//     margin-left: 5%;
//     font-size: 19px;
//     height: 495px;
//   };
//   @media (max-width: 1000px) {
//     width: 90%;
//     margin-left: 5%;
//     font-size: 20px;
//     height: 550px;
//   };
//   @media (max-width: 1092px) {
//     width: 90%;
//     margin-left: 5%;
//     font-size: 22px;
//     height: 620px;
//   };
//   @media (max-width: 1200px) {
//     width: 90%;
//     margin-left: 5%;
//     font-size: 24px;
//     height: 655px;
//   };
//   @media (max-width: 1350px) {
//     width: 90%;
//     margin-left: 5%;
//     font-size: 27px;
//     height: 745px;
//   };
//   @media (max-width: 1485px) {
//     width: 90%;
//     margin-left: 5%;
//     font-size: 15px;
//     height: 755px;
//   };
// =======
//     background: white;
//     border-radius: 10px;
//     width: 100%;
//     height: 200px;
//     font-size: 7px;
//     margin-top: 10px;
=======
    background: white;
    border-radius: 10px;
    width: 100%;
    height: 200px;
    font-size: 7px;
    margin-top: 10px;
    border: 1px solid #f8f8f8;
>>>>>>> b0ecee5e7a0257c328800def1c35e9888e0342d6
`;

function ViewPresentation({ answers, handleChange })
{
    console.log(answers);
    return (
        <Wrap>
          <Content>
<<<<<<< HEAD
            {SLIDE_LIST.map((item) => {
                return (
                    <Slide>
                        <DefineSlide type={item} answers={answers} key={`SLIDE_${item}`} />
                    </Slide>
                )
            })}
=======
            <Slide><FirstSlide title={answers[0][0]["project_name"]} desc={answers[0][1]["project_description"]}></FirstSlide></Slide>
            <Slide><AuditoriumSlide
                desc={answers[1][1]["segments_short_description"]}
                list={answers[1][0]["audience_segments"].map(function(v, index){ return { desc: v, index: index }; })}
            ></AuditoriumSlide></Slide>
            <Slide><ProblemSlide title={"Проблема: " + answers[2][0]["problem"]}
                titleList={answers[2][1]["problem_details"].map(function(v, index){ return { desc: v, index: index }; })}
                leftTitle={answers[2][2]["problem_short_description"]}></ProblemSlide></Slide>
            <Slide><SolutionSlide title={answers[3][0]["product_feature"]}
                solutionList={
                    answers[3][1]["audience_segments"].map(function(v, index) { return {
                         id: index,
                         SolutionItemIcon: index,
                         SolutionItemTitle: v.name,
                         SolutionItemList: { desc: v.description, index: index} 
                         }})}></SolutionSlide></Slide>
            <Slide><MarketSlide1 title={"Рынок: " + answers[4][0]["market_segments"].join(", ")}
                sources={(answers[4][1]["market_tam"].source + " ").concat((answers[4][2]["market_sam"].source + " "), (answers[4][3]["market_som"].source + " "))}
                tam={{
                    value: answers[4][1]["market_tam"].amount,
                    list: answers[4][1]["market_tam"].description
                }}
                sam={{
                    value: answers[4][2]["market_sam"].amount,
                    list: answers[4][2]["market_sam"].description
                }}
                som={{
                    value: answers[4][3]["market_som"].amount,
                    list: answers[4][3]["market_som"].description
                }}
                ></MarketSlide1></Slide>
            <Slide><CompetitorsSplashSlide></CompetitorsSplashSlide></Slide>
            <Slide><CompetitorsAndAlternatives competitors={answers[5][1]["direct_competitors"].map(function(v, index) { return { id: index, name: v.name }})}
                properties={answers[5][0]["competitors_properties"]}
                massive={
                    answers[5][0]["competitors_properties"].map((val, index_x) => {
                        var mass = []
                        mass.push(answers[5][1]["direct_competitors"].map(function(v, index_y) {
                            var flag = false;
                            var key = index_x + "-" + index_y;
                            if(v.properties.find(m => m == val))
                                flag = true;
                            
                            return { key: key, flag: flag }
                        }))

                        return mass;
                    })
                }></CompetitorsAndAlternatives></Slide>
            <Slide><DifferenceSlide solution={answers[5][2]["competitors_difference"]}></DifferenceSlide></Slide>
            <Slide><TeamSlide people={answers[6][0]["members"].map(function(v) {
                return { name: v.name, job: v.role, desc: v.experience, imageSrc: encodeImageFileAsURL(v.image) }
            })}></TeamSlide></Slide>
>>>>>>> b0ecee5e7a0257c328800def1c35e9888e0342d6
           </Content> 
        </Wrap>
    )
}



ViewPresentation.defaultProps = { 
    answers: [
        [
            {
                "project_name": "Roobiq"
            },
            {
                "project_description": "Наш проект предназначен для работы с презентациями. Создавайте презентации без работы с графикой и сторонними приложенями. Прямо на мобильном устройстве."
            }
        ],
        [
            {
                "audience_segments": [
                    "Студенты",
                    "Стартаперы"
                ]
            },
            {
                "segments_short_description": "Повседневное приложения для тех, кто делает презентации часто."
            }
        ],
        [
            {
                "problem": "Быстрота создания презентаций прямо на мобильном устройстве."
            },
            {
                "problem_details": [
                    "Быстрота работы.",
                    "Удобство работы.",
                    "Шейринг результата по ссылке.",
                    "Надёжное хранение данных.",
                    "Без работы с графикой."
                ]
            },
            {
                "problem_short_description": "Рубик представляет множество различных видов презентаций с различным дизайном. Для любых целей."
            }
        ],
        [
            {
                "product_feature": "Удобное веб-приложение с дизайном формата mobile-first. Вводите текст и получите готовую презентацию."
            },
            {
                "audience_segments": [
                    {
                        "name": "Быстрота работы",
                        "description": [
                            "Скорость работы обусловлена тем, что вам нужно потратить всего 5 минут для заполнения анкеты.",
                            "Программа сама генерирует изоображения и вы можете сохранить их в любом удобном месте и формате."
                        ]
                    },
                    {
                        "name": "Удобство работы.",
                        "description": [
                            "Никакой работы с графикой, шрифтами. Рубик все сделает за вас. От вас требуется только ввод текста и настройка презентации.",
                            "Не передавайте файл другим людям. Просто отправьте ссылку на презентацию."
                        ]
                    },
                    {
                        "name": "Безопасность",
                        "description": [
                            "Настраивайте вашу ссылку на презентации как хотите. Дайте доступ только по ссылке, или определенным пользователям."
                        ]
                    }
                ]
            }
        ],
        [
            {
                "market_segments": [
                    "B2C",
                    "B2B"
                ]
            },
            {
                "market_tam": {
                    "amount": "5.000$",
                    "description": [
                        "Поянение номер 1"
                    ],
                    "source": "https://nc.ru/roobiq"
                }
            },
            {
                "market_sam": {
                    "amount": "12.100$",
                    "description": [
                        "Пояснение номер 2"
                    ],
                    "source": "https://nc.ru/roobiq-sam"
                }
            },
            {
                "market_som": {
                    "amount": "50.000$",
                    "description": [
                        "Пояснение номер 3"
                    ],
                    "source": "https://nc.ru/roobiq-som"
                }
            }
        ],
        [
            {
                "competitors_properties": [
                    "Свойство конкурента номер 1",
                    "Свойство конкурента номер 2",
                    "Свойство конкурента номер 3",
                    "Свойство конкурента номер 4"
                ]
            },
            {
                "direct_competitors": [
                    {
                        "name": "Конкурент 1",
                        "properties": [
                            "Свойство конкурента номер 1",
                            "Свойство конкурента номер 3"
                        ]
                    },
                    {
                        "name": "Конкурент 2",
                        "properties": [
                            "Свойство конкурента номер 2",
                            "Свойство конкурента номер 3",
                            "Свойство конкурента номер 4"
                        ]
                    },
                    {
                        "name": "Конкурент 3",
                        "properties": [
                            "Свойство конкурента номер 1",
                            "Свойство конкурента номер 2"
                        ]
                    }
                ]
            },
            {
                "competitors_difference": "В отличии от большинства конкурентов, мы предлагаем возможность созданя большого количества видов презентации."
            }
        ],
        [
            {
                "members": [
                    {
                        "name": "Александр Вадимович",
                        "role": "PR Менеджер",
                        "experience": [
                            "Без опыта"
                        ],
                        "image": {}
                    }
                ]
            }
        ]
    ]
}

export default ViewPresentation;