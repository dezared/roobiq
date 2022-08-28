import FirstSlide from "../components/slides/FirstSlide";
import AuditoriumSlide from "../components/slides/AuditoriumSlide"
import BuisnesModel from "../components/slides/BuisnesModel"
import CompetitorsAndAlternatives from "../components/slides/CompetitorsAndAlternatives"
import CompetitorsSplashSlide from "../components/slides/CompetitorsSplashSlide"
import DifferenceSlide from "../components/slides/DifferenceSlide"
import MarketSlide1 from "../components/slides/MarketSlide1"
import MarketSlide2 from "../components/slides/MarketSlide1"
import SolutionSlide from "../components/slides/SolutionSlide"
import TeamSlide from "../components/slides/TeamSlide"
import ProblemSlide from "../components/slides/ProblemSlide"

import styled from 'styled-components';

const PresentationContainer = styled.div`
  position: relative;
  width: 100%;
  height: 77vw;
  background: white;
  display: block;  
`;

const PresentationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%
`;

function ViewPresentation({ answers, handleChange })
{
    return (
        <PresentationWrapper>
            <PresentationContainer><FirstSlide></FirstSlide></PresentationContainer>
            <PresentationContainer><AuditoriumSlide></AuditoriumSlide></PresentationContainer>
            <PresentationContainer><ProblemSlide></ProblemSlide></PresentationContainer>
            <PresentationContainer><SolutionSlide></SolutionSlide></PresentationContainer>
            <PresentationContainer><MarketSlide1></MarketSlide1></PresentationContainer>
            <PresentationContainer><MarketSlide2></MarketSlide2></PresentationContainer>
            <PresentationContainer><CompetitorsSplashSlide></CompetitorsSplashSlide></PresentationContainer>
            <PresentationContainer><CompetitorsAndAlternatives></CompetitorsAndAlternatives></PresentationContainer>
            <PresentationContainer><DifferenceSlide></DifferenceSlide></PresentationContainer>
            <PresentationContainer><BuisnesModel></BuisnesModel></PresentationContainer>
            <PresentationContainer><TeamSlide></TeamSlide></PresentationContainer>
        </PresentationWrapper>
    )
}

export default ViewPresentation;