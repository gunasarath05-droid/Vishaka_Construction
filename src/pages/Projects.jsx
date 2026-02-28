import React, { useState, useEffect } from 'react';
import ProjectsHero from '../components/projects/ProjectsHero';
import ProjectFilter from '../components/projects/ProjectFilter';
import ProjectGrid from '../components/projects/ProjectGrid';
import CTASection from '../components/common/CTASection';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeStatus, setActiveStatus] = useState('All');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white">
      <main>
        <ProjectsHero />

        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <ProjectFilter
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
              activeStatus={activeStatus}
              setActiveStatus={setActiveStatus}
            />

            <ProjectGrid
              activeCategory={activeCategory}
              activeStatus={activeStatus}
            />
          </div>
        </section>

        <CTASection />
      </main>
    </div>
  );
};

export default Projects;
