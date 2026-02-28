import React from 'react';
import Hero from '../components/home/Hero';
import BrandShowcase from '../components/home/BrandShowcase';
import FeaturedProjects from '../components/home/FeaturedProjects';
import TestimonialsPreview from '../components/home/TestimonialsPreview';
import AboutPreview from '../components/home/AboutPreview';
import ServicesHighlight from '../components/home/ServicesHighlight';
import PromoVideo from '../components/home/PromoVideo';
const Home = () => {
    return (
        <div className="bg-white">
            <main>
                <Hero />
                <BrandShowcase />
                <AboutPreview />
                <ServicesHighlight />
                <PromoVideo />
                <TestimonialsPreview />
                <FeaturedProjects />
            </main>
        </div>
    );
};

export default Home;
