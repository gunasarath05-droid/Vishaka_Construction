import React from 'react';
import AboutHero from '../components/about/AboutHero';
import CompanyStory from '../components/about/CompanyStory';
import FounderMessage from '../components/about/FounderMessage';
import MissionVision from '../components/about/MissionVision';
import CoreValues from '../components/about/CoreValues';
import Achievements from '../components/about/Achievements';
import TeamSection from '../components/about/TeamSection';
import WhyChooseUs from '../components/about/WhyChooseUs';
import Timeline from '../components/about/Timeline';

const About = () => {
  return (
    <div className="bg-white">
      <main>
        <AboutHero />
        <CompanyStory />
        <FounderMessage />
        <MissionVision />
        <CoreValues />
        <Achievements />
        <TeamSection />
        <WhyChooseUs />
        <Timeline />
      </main>
    </div>
  );
};

export default About;
