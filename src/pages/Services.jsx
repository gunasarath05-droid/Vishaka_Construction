import React, { useEffect } from 'react';
import ServicesHero from '../components/services/ServicesHero';
import ServiceCategories from '../components/services/ServiceCategories';
import ServiceList from '../components/services/ServiceList';
import ConstructionProcess from '../components/services/ConstructionProcess';
import ServiceFAQ from '../components/about/ServiceFAQ';
import CTASection from '../components/common/CTASection';

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white">
      <main>
        <ServicesHero />
        <ServiceCategories />
        <ServiceList />
        <ConstructionProcess />
        <ServiceFAQ />
        <CTASection />
      </main>
    </div>
  );
};

export default Services;
