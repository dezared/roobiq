import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SolutionSlide from "./slides/SolutionSlide";
import MarketSlide1 from "./slides/MarketSlide1";
import TeamSlide from "./slides/TeamSlide";
import BuisnesModel from "./slides/BuisnesModel";
import DifferenceSlide from "./slides/DifferenceSlide";
import CompetitorsAndAlternatives from "./slides/CompetitorsAndAlternatives";
import CompetitorsSplashSlide from "./slides/CompetitorsSplashSlide";
import FirstSlide from './slides/FirstSlide';
import MarketSlide2 from './slides/MarketSlide2';
import ProblemSlide from './slides/ProblemSlide';
import AuditoriumSlide from './slides/AuditoriumSlide';

const Slides = styled.div`
  width: 117px;
  height: 66px;
  border-radius: 8px;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

const Slide = React.forwardRef(({ slide }, ref) => {
  console.log(slide)
  switch (slide) {
    case 'First' :
      return (
        <Slides>
          <FirstSlide ref={ref}/>
        </Slides>
      );
    case 2 :
      return (
        <Slides>
          <AuditoriumSlide ref={ref}/>
        </Slides>
      );
    case 3 :
      return (
        <Slides>
          <ProblemSlide ref={ref}/>
        </Slides>
      );
    case 4 :
      return (
        <Slides>
          <SolutionSlide ref={ref}/>
        </Slides>
      );
    case 5 :
      return (
        <Slides>
          <MarketSlide1 ref={ref}/>
        </Slides>
      );
    case 6 :
      return (
        <Slides>
          <MarketSlide2 ref={ref}/>
        </Slides>
      );
    case 7 :
      return (
        <Slides>
          <CompetitorsSplashSlide ref={ref}/>
        </Slides>
      );
    case 8 :
      return (
        <Slides>
          <CompetitorsAndAlternatives ref={ref}/>
        </Slides>
      );
    case 9 :
      return (
        <Slides>
          <DifferenceSlide ref={ref}/>
        </Slides>
      );
    case 10 :
      return (
        <Slides>
          <BuisnesModel ref={ref}/>
        </Slides>
      );
    case 11 :
      return (
        <Slides>
          <TeamSlide ref={ref}/>
        </Slides>
      );
    default:
      return (<Slides>There will be your slide</Slides>);
  }
})

Slide.propTypes = {
  slide: PropTypes.string,
};

Slide.defaultProps = {
  slide: 'First',
};

export default Slide;
