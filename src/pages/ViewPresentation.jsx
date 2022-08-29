import FirstSlide from "../components/slides/FirstSlide";
import AuditoriumSlide from "../components/slides/AuditoriumSlide"
import BuisnesModel from "../components/slides/BuisnesModel"
import CompetitorsAndAlternatives from "../components/slides/CompetitorsAndAlternatives"
import CompetitorsSplashSlide from "../components/slides/CompetitorsSplashSlide"
import DifferenceSlide from "../components/slides/DifferenceSlide"
import MarketSlide1 from "../components/slides/MarketSlide1"
import MarketSlide2 from "../components/slides/MarketSlide2"
import SolutionSlide from "../components/slides/SolutionSlide"
import TeamSlide from "../components/slides/TeamSlide"
import ProblemSlide from "../components/slides/ProblemSlide"

import styled from 'styled-components';

const Wrap = styled.div`
  width: 100%;
  display: flex;
  height: auto;
  flex-direction: column;
  align-items: center;
  overflow: scroll;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  };
`;

const Slide = styled.div`
  border: 1px solid #f4f4f4;
  width: 100%;
  height: 200px;
  font-size: 7px;
  margin-top: 20px;
  @media (max-width: 320px) {
    width: 90%;
    margin-left: 5%;
    height: 160px;
  };
  @media (max-width: 360px) {
    width: 90%;
    margin-left: 5%;
    height: 185px;
  };
  @media (max-width: 400px) {
    width: 90%;
    margin-left: 5%;
    height: 220px;
  };
  @media (max-width: 440px) {
    width: 90%;
    margin-left: 5%;
    font-size: 9px;
    height: 225px;
  };
  @media (max-width: 500px) {
    width: 90%;
    margin-left: 5%;
    height: 255px;
    font-size: 10px;
  };
  @media (max-width: 540px) {
    width: 90%;
    margin-left: 5%;
    font-size: 11px;
    height: 280px;
  };
  @media (max-width: 600px) {
    width: 90%;
    margin-left: 5%;
    height: 300px;
    font-size: 11px;
  };
  @media (max-width: 640px) {
    width: 90%;
    margin-left: 5%;
    height: 325px;
    font-size: 13px;
  };
  @media (max-width: 700px) {
    width: 90%;
    margin-left: 5%;
    font-size: 15px;
    height: 360px;
  };
  @media (max-width: 750px) {
    width: 90%;
    margin-left: 5%;
    font-size: 17px;
    height: 410px;
  };
  @media (max-width: 870px) {
    width: 90%;
    margin-left: 5%;
    font-size: 18px;
    height: 450px;
  };
  @media (max-width: 920px) {
    width: 90%;
    margin-left: 5%;
    font-size: 19px;
    height: 495px;
  };
  @media (max-width: 1000px) {
    width: 90%;
    margin-left: 5%;
    font-size: 20px;
    height: 550px;
  };
  @media (max-width: 1092px) {
    width: 90%;
    margin-left: 5%;
    font-size: 22px;
    height: 620px;
  };
  @media (max-width: 1200px) {
    width: 90%;
    margin-left: 5%;
    font-size: 24px;
    height: 655px;
  };
  @media (max-width: 1350px) {
    width: 90%;
    margin-left: 5%;
    font-size: 27px;
    height: 745px;
  };
  @media (max-width: 1485px) {
    width: 90%;
    margin-left: 5%;
    font-size: 15px;
    height: 755px;
  };
`;

function ViewPresentation({ answers, handleChange })
{
    return (
        <Wrap>
          <Content>
            <Slide><FirstSlide></FirstSlide></Slide>
            <Slide><AuditoriumSlide></AuditoriumSlide></Slide>
            <Slide><ProblemSlide></ProblemSlide></Slide>
            <Slide><SolutionSlide></SolutionSlide></Slide>
            <Slide><MarketSlide1></MarketSlide1></Slide>
            <Slide><MarketSlide2></MarketSlide2></Slide>
            <Slide><CompetitorsSplashSlide></CompetitorsSplashSlide></Slide>
            <Slide><CompetitorsAndAlternatives></CompetitorsAndAlternatives></Slide>
            <Slide><DifferenceSlide></DifferenceSlide></Slide>
            <Slide><BuisnesModel></BuisnesModel></Slide>
            <Slide><TeamSlide></TeamSlide></Slide>
           </Content> 
        </Wrap>
    )
}

export default ViewPresentation;