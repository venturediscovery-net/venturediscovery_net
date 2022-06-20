import React from 'react'
import CTASection from '../section/CTASection';
import HowSection from '../section/HowSection';
import StatsSection from '../section/StatsSection';
import VideoSection from '../section/VideoSection';
import WhomSection from '../section/WhomSection';
import WhySection from '../section/WhySection';

const Home = () => {
  return (
    <div>
        <VideoSection></VideoSection>
        <WhomSection></WhomSection>
        <WhySection></WhySection>
        <HowSection></HowSection>
        <CTASection></CTASection>
        <StatsSection></StatsSection>
    </div>
  )
}

export default Home;