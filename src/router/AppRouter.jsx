import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import About from '../pages/About';
import Services from '../pages/Services';
import Projects from '../pages/Projects';
import Video from '../pages/Video';
import Gallery from '../pages/Gallery';
import Blog from '../pages/Blog';
import BlogDetail from '../pages/BlogDetail';
import Careers from '../pages/Careers';
import Contact from '../pages/Contact';
import PrivacyPolicy from '../pages/PrivacyPolicy';

import ProjectDetails from '../components/projects/ProjectDetails';
import OngoingProjects from '../pages/OngoingProjects';
import CompletedProjects from '../pages/CompletedProjects';
import ServiceDetailView from '../pages/ServiceDetailView';
import NotFound from '../pages/NotFound';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="services/:serviceId" element={<ServiceDetailView />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/ongoing" element={<OngoingProjects />} />
          <Route path="projects/completed" element={<CompletedProjects />} />
          <Route path="projects/:projectSlug" element={<ProjectDetails />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:blogSlug" element={<BlogDetail />} />
          <Route path="videos" element={<Video />} />
          <Route path="careers" element={<Careers />} />
          <Route path="contact" element={<Contact />} />
          <Route path="privacy" element={<PrivacyPolicy />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
