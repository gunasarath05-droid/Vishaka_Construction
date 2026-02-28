import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  MapPin,
  Calendar,
  ChevronLeft,
  Share2,
  Maximize2,
  CheckCircle2,
  Building2,
  Users,
  Zap,
  Image as ImageIcon
} from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import { projects } from '../../data/projects';
import CTASection from '../common/CTASection';

const ProjectDetails = () => {
  const { projectSlug } = useParams();

  // Find the project based on the slug from our data
  const project = projects.find(p => p.slug === projectSlug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectSlug]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-secondary-dark mb-4">Project Not Found</h2>
          <Link to="/projects" className="text-primary hover:underline font-bold">Back to Portfolio</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <main>
        {/* Hero Section */}
        <section className="relative h-[70vh] flex items-end overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

          <div className="container mx-auto px-4 relative z-10 pb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Link to="/projects" className="inline-flex items-center gap-2 text-white/60 hover:text-primary mb-8 transition-colors group">
                <ChevronLeft className="group-hover:-translate-x-1 transition-transform" />
                <span className="text-sm font-bold uppercase tracking-widest">Back to Portfolio</span>
              </Link>

              <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                <div>
                  <div className="flex gap-3 mb-4">
                    <span className="px-3 py-1 rounded-full bg-primary/20 backdrop-blur-md border border-primary/30 text-primary text-[10px] font-black uppercase tracking-widest">
                      {project.category}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-emerald-500/20 backdrop-blur-md border border-emerald-500/30 text-emerald-500 text-[10px] font-black uppercase tracking-widest">
                      {project.status}
                    </span>
                  </div>
                  <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">{project.title}</h1>
                </div>
                <div className="flex gap-4">
                  <button className="w-12 h-12 rounded-full glass border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors">
                    <Share2 size={20} />
                  </button>
                  <button className="w-12 h-12 rounded-full glass border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors">
                    <Maximize2 size={20} />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-24 bg-white relative">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-20">
              {/* Detailed Info */}
              <div className="lg:w-2/3">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em] mb-6">Overview</h2>
                  <p className="text-2xl md:text-3xl text-secondary-dark font-light leading-relaxed mb-12">
                    {project.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    {project.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-4 p-6 rounded-2xl bg-slate-50 border border-slate-100">
                        <CheckCircle2 className="text-primary" size={24} />
                        <span className="text-slate-700 font-bold">{feature}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Metrics Sidebar */}
              <div className="lg:w-1/3">
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="p-10 rounded-[3rem] bg-secondary-dark text-white border border-white/5 shadow-2xl sticky top-24"
                >
                  <h3 className="text-xl font-bold mb-10 pb-6 border-b border-white/10">Project Details</h3>

                  <div className="space-y-8">
                    <div className="flex items-center gap-5">
                      <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-primary">
                        <MapPin size={24} />
                      </div>
                      <div>
                        <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest mb-1">Location</p>
                        <p className="font-bold">{project.location}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-5">
                      <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-primary">
                        <Users size={24} />
                      </div>
                      <div>
                        <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest mb-1">Client</p>
                        <p className="font-bold">{project.client}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-5">
                      <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-primary">
                        <Building2 size={24} />
                      </div>
                      <div>
                        <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest mb-1">Total Area</p>
                        <p className="font-bold">{project.area}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-5">
                      <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-primary">
                        <Zap size={24} />
                      </div>
                      <div>
                        <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest mb-1">Duration</p>
                        <p className="font-bold">{project.duration}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Project Gallery Section */}
        {project.images && project.images.length > 1 && (
          <section className="py-24 bg-slate-50 relative overflow-hidden">
            <div className="container mx-auto px-4">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                      <ImageIcon size={20} />
                    </div>
                    <span className="text-[10px] font-black text-primary uppercase tracking-[0.3em]">Gallery</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-secondary-dark tracking-tight">Project Visuals</h2>
                </div>
              </div>

              <div className="relative -mx-4 sm:mx-0">
                <Swiper
                  modules={[Autoplay, Pagination]}
                  spaceBetween={24}
                  slidesPerView={1.1}
                  centeredSlides={true}
                  loop={false}
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true
                  }}
                  pagination={{
                    clickable: true,
                    dynamicBullets: true,
                  }}
                  breakpoints={{
                    640: { slidesPerView: 1.5, centeredSlides: false },
                    1024: { slidesPerView: 2.5, centeredSlides: false }
                  }}
                  className="!px-4 sm:!px-0 !pb-16 project-gallery-swiper"
                >
                  {project.images.slice(1).map((img, idx) => (
                    <SwiperSlide key={idx} className="h-auto">
                      <div className="group relative rounded-[2rem] overflow-hidden h-[400px] md:h-[500px]">
                        <img
                          src={img}
                          alt={`${project.title} View ${idx + 1}`}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-secondary-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                        {/* Hover Overlay Icon */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                          <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                            <Maximize2 size={24} />
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>

                <style>{`
                  .project-gallery-swiper .swiper-pagination-bullet {
                    background: var(--color-slate-300);
                    opacity: 1;
                    width: 8px;
                    height: 8px;
                    transition: all 0.3s ease;
                  }
                  .project-gallery-swiper .swiper-pagination-bullet-active {
                    background: var(--color-primary);
                    width: 24px;
                    border-radius: 4px;
                  }
                `}</style>
              </div>
            </div>
          </section>
        )}

        <CTASection />
      </main>
    </div>
  );
};

export default ProjectDetails;
