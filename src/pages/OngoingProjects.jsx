import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Clock, MapPin, Calendar, ChevronRight, Activity, ShieldCheck, Award, Box } from 'lucide-react';
import CTASection from '../components/common/CTASection';

// Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import { projects as allProjects } from '../data/projects';

const OngoingProjects = () => {
  const ongoingProjects = allProjects.filter(p => p.status === 'Ongoing');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen">
      {/* Standardized Hero Section */}
      <section className="relative pt-40 pb-32 bg-secondary-dark overflow-hidden">
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
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.3em] mb-8">
              <Activity size={16} className="animate-pulse" /> Precision in Progress
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-10 tracking-tight leading-[1.2]">
              Building Tomorrow, <br />
              <span className="text-primary italic font-light">Today.</span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 font-light leading-relaxed mb-10">
              A real-time chronicle of our ongoing engineering ventures.
              From groundbreaking to topping out, we maintain absolute transparency.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Project Slider - Elegant Mobile Layout */}
      <section className="py-16 bg-slate-50 lg:hidden overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="h-[650px]">
            {ongoingProjects.length > 0 && (
              <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={1.1}
                centeredSlides={true}
                loop={ongoingProjects.length > 3}
                autoplay={{ delay: 6000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                className="projects-swiper h-full overflow-visible"
              >
                {ongoingProjects.map((project) => (
                  <SwiperSlide key={project.id} className="py-10">
                    {({ isActive }) => (
                      <div className={`bg-white rounded-[3rem] overflow-hidden flex flex-col h-full transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${isActive
                        ? 'scale-100 opacity-100 blur-0 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.12)] z-20'
                        : 'scale-90 opacity-40 blur-[1px] z-10'
                        }`}>
                        {/* Image with overlays */}
                        <div className="relative h-64 flex-shrink-0">
                          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                          <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-secondary-dark via-secondary-dark/40 to-transparent">
                            <div className="flex items-center gap-2 mb-2">
                              <span className="px-3 py-1 rounded-full bg-primary text-white text-[8px] font-semibold uppercase tracking-widest">
                                {project.category}
                              </span>
                            </div>
                            <h3 className="text-2xl font-semibold text-white uppercase tracking-tight">{project.title}</h3>
                          </div>
                        </div>
                        {/* Card body */}
                        <div className="p-8 flex flex-col gap-4 flex-1">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest">Progress</span>
                            <span className="text-xl font-semibold text-primary">{project.progress}%</span>
                          </div>
                          <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                            <div className="h-full bg-primary rounded-full transition-all duration-1000" style={{ width: `${project.progress}%` }}></div>
                          </div>
                          <p className="text-xs font-semibold text-secondary-dark flex items-center gap-2 mt-2">
                            <Activity size={14} className="text-primary" /> {project.statusText}
                          </p>
                          <Link to={`/projects/${project.slug}`} className="mt-auto w-full py-4 bg-secondary-dark text-white rounded-2xl text-[10px] font-semibold uppercase tracking-widest flex items-center justify-center gap-3 transition-colors hover:bg-primary">
                            View Dashboard <ChevronRight size={14} />
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
            .projects-swiper .swiper-pagination {
              bottom: 10px !important;
            }
            .projects-swiper .swiper-pagination-bullet {
              background: #0d9488;
              opacity: 0.2;
              margin: 0 6px !important;
              transition: all 0.3s ease;
            }
            .projects-swiper .swiper-pagination-bullet-active {
              opacity: 1;
              width: 24px;
              border-radius: 4px;
            }
          `}</style>
        </div>
      </section>

      {/* Project Cards - Desktop Layout */}
      <section className="py-32 bg-slate-50 relative hidden lg:block">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-12">
            {ongoingProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="bg-white rounded-[3rem] overflow-hidden shadow-2xl shadow-slate-200/50 group border border-slate-100 md:h-[600px]">
                  <div className={`flex flex-col h-full ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                    {/* Image Section */}
                    <div className="md:w-1/2 relative h-80 md:h-full overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:hidden"></div>
                      <div className="absolute top-6 left-6 flex gap-2">
                        <span className="px-4 py-1.5 rounded-full bg-primary text-white text-[9px] font-semibold uppercase tracking-widest shadow-lg">
                          {project.category}
                        </span>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="md:w-1/2 p-10 md:p-14 lg:p-16 flex flex-col justify-center h-full">
                      <div className="flex justify-between items-start mb-8">
                        <div>
                          <p className="text-[10px] font-semibold text-primary uppercase tracking-[0.3em] mb-3 flex items-center gap-2">
                            <Activity size={12} className="animate-pulse" /> {project.statusText}
                          </p>
                          <h3 className="text-3xl md:text-4xl font-semibold text-secondary-dark tracking-tight leading-tight mb-3 uppercase">
                            {project.title}
                          </h3>
                          <p className="text-slate-400 text-sm font-medium flex items-center gap-2">
                            <MapPin size={16} className="text-primary" /> {project.location}
                          </p>
                        </div>
                        <div className="text-right hidden sm:block">
                          <p className="text-[10px] font-semibold text-slate-300 uppercase tracking-widest mb-1">Execution</p>
                          <p className="text-sm font-semibold text-secondary-dark">{project.duration}</p>
                        </div>
                      </div>

                      {/* Progress Bar */}
                      <div className="mb-10">
                        <div className="flex justify-between items-end mb-3">
                          <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-widest">Construction Progress</span>
                          <span className="text-2xl font-semibold text-primary">{project.progress}%</span>
                        </div>
                        <div className="h-2.5 w-full bg-slate-100 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${project.progress}%` }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            className="h-full bg-primary rounded-full relative"
                          >
                            <div className="absolute inset-0 bg-white/20 animate-shimmer"></div>
                          </motion.div>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-12">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-primary border border-slate-100">
                            <ShieldCheck size={24} />
                          </div>
                          <div>
                            <p className="text-[9px] font-semibold text-slate-400 uppercase tracking-widest">Safety</p>
                            <p className="text-sm font-semibold text-secondary-dark">Accident Free</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-primary border border-slate-100">
                            <Activity size={24} />
                          </div>
                          <div>
                            <p className="text-[9px] font-semibold text-slate-400 uppercase tracking-widest">Status</p>
                            <p className="text-sm font-semibold text-secondary-dark">Active Site</p>
                          </div>
                        </div>
                        <div className="hidden md:flex items-center gap-4">
                          <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-primary border border-slate-100">
                            <Box size={24} />
                          </div>
                          <div>
                            <p className="text-[9px] font-semibold text-slate-400 uppercase tracking-widest">Dimension</p>
                            <p className="text-sm font-semibold text-secondary-dark">{project.area}</p>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row items-center gap-10">
                        <Link
                          to={`/projects/${project.slug}`}
                          className="w-full sm:w-auto px-12 py-5 bg-secondary-dark text-white rounded-2xl text-[10px] font-semibold uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-primary transition-all active:scale-95 shadow-xl shadow-slate-900/10"
                        >
                          Project Dashboard <ChevronRight size={16} />
                        </Link>
                        <p className="text-[10px] font-medium text-slate-400 italic tracking-wide">
                          {project.timeline}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
};

export default OngoingProjects;
