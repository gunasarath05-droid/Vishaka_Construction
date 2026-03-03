import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Filter, Maximize2, ExternalLink, MapPin, Ruler, Calendar, Award, Building2, ChevronRight } from 'lucide-react';
import CTASection from '../components/common/CTASection';

// Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import { projects as allProjects } from '../data/projects';

const CompletedProjects = () => {
  const [filter, setFilter] = useState('all');
  const completedProjects = allProjects.filter(p => p.status === 'Completed');

  const categories = [
    { id: 'all', name: 'All Collections' },
    { id: 'residential', name: 'Residential' },
    { id: 'industrial', name: 'Industrial' },
    { id: 'commercial', name: 'Commercial' }
  ];

  const filteredProjects = filter === 'all'
    ? completedProjects
    : completedProjects.filter(p => p.category.toLowerCase() === filter.toLowerCase());

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen">
      {/* Standardized Hero Section */}
      <section className="relative pt-28 sm:pt-32 md:pt-40 pb-20 sm:pb-28 md:pb-32 bg-secondary-dark overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `radial-gradient(circle, #fff 1px, transparent 1px)`,
              backgroundSize: '40px 40px'
            }}>
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-semibold uppercase tracking-[0.3em] mb-8">
              <CheckCircle2 size={16} /> Architectural Milestones
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white mb-8 sm:mb-10 tracking-tight leading-[1.2]">
              Our Legacy, <br />
              <span className="text-primary italic font-light">Defined.</span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 font-light leading-relaxed mb-10">
              A curated selection of monumental structures that define the skyline and
              showcase our unwavering commitment to precision.
            </p>

            <div className="flex flex-wrap justify-center gap-6 mt-20">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setFilter(cat.id)}
                  className={`group relative px-6 sm:px-8 md:px-12 py-3 sm:py-4 md:py-5 rounded-2xl sm:rounded-3xl text-[10px] font-semibold uppercase tracking-[0.3em] transition-all duration-700 overflow-hidden ${filter === cat.id
                    ? 'bg-primary text-white shadow-2xl shadow-primary/40 scale-105'
                    : 'bg-white/5 text-white/40 hover:text-white border border-white/10 hover:border-primary/50'
                    }`}
                >
                  <span className="relative z-10">{cat.name}</span>
                  {filter !== cat.id && (
                    <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-700 opacity-20"></div>
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mobile Project Slider (Hidden on LG+) */}
      <section className="py-16 bg-white lg:hidden overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="h-[580px]">
            {filteredProjects.length > 0 && (
              <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={0}
                slidesPerView={1.1}
                centeredSlides={true}
                loop={filteredProjects.length > 3}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                className="completed-swiper h-full overflow-visible"
              >
                {filteredProjects.map((project, idx) => (
                  <SwiperSlide key={project.id} className="py-10 pb-24 overflow-visible">
                    {({ isActive }) => (
                      <div className={`bg-white rounded-[3rem] overflow-hidden border border-slate-100 flex flex-col h-full transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${isActive
                        ? 'scale-105 opacity-100 blur-0 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.12)] z-20'
                        : 'scale-90 opacity-40 blur-[1px] z-10'
                        }`}>
                        {/* Image with overlay info */}
                        <div className="relative h-56 flex-shrink-0">
                          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                          {/* Gradient overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-secondary-dark/70 via-secondary-dark/10 to-transparent"></div>
                          {/* Category badge */}
                          <div className="absolute top-5 left-5 px-4 py-1.5 rounded-full bg-primary text-white text-[9px] font-semibold uppercase tracking-widest shadow-lg">
                            {project.category}
                          </div>
                          {/* Location on image bottom */}
                          <div className="absolute bottom-5 left-5 flex items-center gap-2 text-white text-[10px] font-semibold uppercase tracking-widest">
                            <MapPin size={11} className="text-primary" /> {project.location}
                          </div>
                        </div>
                        {/* Card body */}
                        <div className="p-7 flex flex-col gap-3 flex-1">
                          <h3 className="text-xl font-semibold text-secondary-dark tracking-tighter uppercase leading-tight">{project.title}</h3>
                          {/* Impact line */}
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-px bg-primary"></div>
                            <span className="text-[9px] font-semibold text-primary uppercase tracking-widest">{project.impact}</span>
                          </div>
                          <Link to={`/projects/${project.slug}`} className="mt-6 w-full py-4 bg-secondary-dark text-white rounded-2xl text-[10px] font-semibold uppercase tracking-widest flex items-center justify-center gap-3 transition-colors hover:bg-primary">
                            Case Study <ChevronRight size={14} />
                          </Link>
                        </div>
                      </div>
                    )}
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </div>

          <style jsx="true">{`
            .completed-swiper .swiper-pagination {
              bottom: 10px !important;
            }
            .completed-swiper .swiper-pagination-bullet {
              background: #0d9488;
              opacity: 0.2;
              margin: 0 6px !important;
              transition: all 0.3s ease;
            }
            .completed-swiper .swiper-pagination-bullet-active {
              opacity: 1;
              width: 24px;
              border-radius: 4px;
            }
          `}</style>
        </div>
      </section>

      {/* Cinematic Project Showcase - Desktop Grid */}
      <section className="py-20 sm:py-28 md:py-32 lg:py-40 bg-white hidden lg:block">
        <div className="container mx-auto px-4">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 gap-20"
          >
            <AnimatePresence mode='popLayout'>
              {filteredProjects.map((project, index) => (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.8 }}
                  className="group relative"
                >
                  {/* Project Image Container with Multi-Layered Hover */}
                  <div className="relative aspect-[4/5] md:aspect-[16/11] rounded-[4rem] overflow-hidden shadow-2xl shadow-slate-200 group-hover:shadow-primary/10 transition-shadow duration-700">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                    {/* Overlay Hover Details */}
                    <div className="absolute inset-0 p-16 flex flex-col justify-end translate-y-20 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-700">
                      <div className="flex items-center gap-4 text-primary mb-6">
                        <div className="w-12 h-px bg-primary"></div>
                        <span className="text-[10px] font-semibold uppercase tracking-[0.4em]">{project.impact}</span>
                      </div>
                      <h3 className="text-4xl font-semibold text-white tracking-tight mb-4 uppercase">Case Study: <br /> {project.title}</h3>
                      <Link to={`/projects/${project.slug}`} className="flex items-center gap-3 text-[10px] font-semibold text-white uppercase tracking-widest mt-8 hover:text-primary transition-colors">
                        Discover Full Scope <Maximize2 size={16} />
                      </Link>
                    </div>
                  </div>

                  {/* Elegantly Floating Text Content */}
                  <div className="mt-12 px-6">
                    <div className="flex flex-wrap items-center justify-between gap-6 mb-8 pb-8 border-b border-slate-100">
                      <div className="flex flex-col">
                        <h4 className="text-3xl font-semibold text-secondary-dark tracking-tight group-hover:text-primary transition-colors uppercase">
                          <Link to={`/projects/${project.slug}`}>{project.title}</Link>
                        </h4>
                      </div>
                      <div className="flex items-center gap-2 text-[10px] font-semibold text-slate-400 uppercase tracking-widest">
                        <MapPin size={16} className="text-primary" /> {project.location}
                      </div>
                    </div>

                    <p className="text-slate-500 text-lg leading-relaxed mb-10 font-light italic">
                      "{project.description}"
                    </p>

                    {/* Luxury Specs Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
                      <div className="flex flex-col">
                        <span className="flex items-center gap-2 text-[10px] font-semibold text-slate-300 uppercase tracking-widest mb-2">
                          <Ruler size={12} /> Dimension
                        </span>
                        <span className="text-sm font-semibold text-secondary-dark">{project.area}</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="flex items-center gap-2 text-[10px] font-semibold text-slate-300 uppercase tracking-widest mb-2">
                          <Calendar size={12} /> Execution
                        </span>
                        <span className="text-sm font-semibold text-secondary-dark">{project.duration}</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="flex items-center gap-2 text-[10px] font-semibold text-slate-300 uppercase tracking-widest mb-2">
                          <Building2 size={12} /> Type
                        </span>
                        <span className="text-sm font-semibold text-secondary-dark">{project.category}</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="flex items-center gap-2 text-[10px] font-semibold text-slate-300 uppercase tracking-widest mb-2">
                          <Award size={12} /> Citation
                        </span>
                        <span className="text-sm font-semibold text-primary">Certified Quality</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <CTASection />
    </div>
  );
};

export default CompletedProjects;

