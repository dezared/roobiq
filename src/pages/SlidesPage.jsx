import React from 'react';
import start_Slide from '../components/slides/FirstSlide';
import problem_slide from '../components/slides/ProblemSlide';
import audit_slide from '../components/slides/AuditoriumSlide';
import market_slide2 from "../components/slides/MarketSlide2";
import splash_competitors from "../components/slides/CompetitorsSplashSlide";
import differenceSlide from "../components/slides/DifferenceSlide";

function Slides() {
  return (
    <div>
      <start_Slide />
      <problem_slide />
      <audit_slide />
      <market_slide2 />
      <splash_competitors />
      <differenceSlide />
    </div>
  )
};

export default Slides;
