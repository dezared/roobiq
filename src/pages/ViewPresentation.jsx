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
  max-width: 350px;
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