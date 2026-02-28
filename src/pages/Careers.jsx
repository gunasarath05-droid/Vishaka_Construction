import React, { useEffect } from 'react';
import CareersHero from '../components/careers/CareersHero';
import CompanyCulture from '../components/careers/CompanyCulture';
import OpenPositions from '../components/careers/OpenPositions';
import ApplicationForm from '../components/careers/ApplicationForm';
import CTASection from '../components/common/CTASection';

const Careers = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white">
      <main>
        <CareersHero />
        <CompanyCulture />
        <OpenPositions />
        <ApplicationForm />
        <CTASection />
      </main>
    </div>
  );
};

export default Careers;
