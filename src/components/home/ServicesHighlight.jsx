import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ShieldCheck, Zap, Layers, Cpu } from 'lucide-react';
import { HiHomeModern, HiBuildingOffice2, HiWrenchScrewdriver } from 'react-icons/hi2';

// Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

const ServiceCard = ({ service }) => (
  <Link
    to={service.path}
    className="group block relative h-full"
  >
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -15 }}
      className="relative h-full"
    >
      {/* Card Glow Background */}
      <div className={`absolute -inset-1 bg-gradient-to-b ${service.color} to-transparent blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>

      {/* Main Card: High Contrast White */}
      <div className="relative bg-white/95 backdrop-blur-sm p-8 md:p-10 lg:p-12 rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-slate-100 h-full min-h-[520px] flex flex-col transition-all duration-500 group-hover:border-teal-500/20 group-hover:shadow-[0_40px_80px_rgba(0,0,0,0.1)] overflow-hidden">

        {/* Visual Corner Accents */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-slate-50 to-transparent -mr-12 -mt-12 rounded-full transition-transform duration-700 group-hover:scale-150"></div>

        {/* Technical Header (HUD Elements) */}
        <div className="flex justify-between items-center mb-10 relative z-10">
          <div className="flex flex-col">
            <span className="text-[10px] font-black text-teal-600 tracking-[0.2em]">{service.id}</span>
            <div className="flex items-center space-x-2">
              <div className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse"></div>
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{service.status}</span>
            </div>
          </div>
          <ShieldCheck size={20} className="text-slate-200 group-hover:text-teal-500 transition-colors duration-500" />
        </div>

        {/* Central Icon with Lens Glow */}
        <div className="relative mb-8 w-fit z-10">
          <div className={`absolute inset-0 bg-${service.accent}-400/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 scale-150`}></div>
          <div className="relative w-20 h-20 bg-slate-50 border border-slate-100 rounded-[2rem] flex items-center justify-center transition-all duration-700 group-hover:bg-slate-900 group-hover:text-white group-hover:border-slate-900 group-hover:rotate-[10deg] shadow-inner">
            <service.icon size={36} className="transition-transform duration-500 group-hover:scale-110" />
          </div>
        </div>

        <div className="relative z-10">
          <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-4 group-hover:text-teal-600 transition-colors duration-500 min-h-[3rem]">{service.title}</h3>
          <p className="text-slate-500 leading-relaxed mb-10 font-medium text-sm md:text-base">
            {service.desc}
          </p>
        </div>

        {/* Action HUD Bar */}
        <div className="mt-auto pt-8 border-t border-slate-50 flex items-center justify-between relative z-10">
          <div className="flex items-center space-x-2 group-hover:space-x-4 transition-all duration-500">
            <div className="w-6 h-[1px] bg-teal-500 opacity-40"></div>
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] group-hover:text-teal-600 transition-colors duration-500 whitespace-nowrap">
              {service.stat}
            </span>
          </div>

          <div className={`w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center group-hover:text-white ${service.btnHover} transition-all duration-500 shadow-sm border border-slate-200 group-hover:border-transparent`}>
            <ArrowUpRight size={16} />
          </div>
        </div>
      </div>
    </motion.div>
  </Link>
);

const ServicesHighlight = () => {
  const services = [
    {
      id: "SRV-01",
      title: 'Residential Construction',
      desc: 'Crafting dream homes that combine luxury, comfort, and structural integrity. From custom blueprints to final finishing.',
      icon: HiHomeModern,
      status: "CERTIFIED",
      accent: "teal",
      color: "from-teal-500/20",
      btnHover: "hover:bg-teal-600",
      stat: "150+ HOMES DELIVERED",
      path: "/services/residential"
    },
    {
      id: "SRV-02",
      title: 'Commercial Projects',
      desc: 'Designing and building high-performance commercial spaces that inspire productivity and reflect corporate excellence.',
      icon: HiBuildingOffice2,
      status: "VERIFIED",
      accent: "emerald",
      color: "from-emerald-500/20",
      btnHover: "hover:bg-emerald-600",
      stat: "80+ OFFICES & RETAILS",
      path: "/services/commercial"
    },
    {
      id: "SRV-03",
      title: 'Renovation & Remodeling',
      desc: 'Transforming aging structures into modern masterpieces with seamless integration and high-end aesthetic upgrades.',
      icon: HiWrenchScrewdriver,
      status: "OPTIMIZED",
      accent: "teal",
      color: "from-teal-500/20",
      btnHover: "hover:bg-teal-700",
      stat: "200+ REMODELS COMPLETED",
      path: "/services/renovation"
    },
    {
      id: "SRV-04",
      title: 'Turnkey Projects',
      desc: 'End-to-end project management from conceptualization to final handover, ensuring a stress-free and precise build.',
      icon: Zap,
      status: "ELITE",
      accent: "emerald",
      color: "from-emerald-500/20",
      btnHover: "hover:bg-emerald-700",
      stat: "50+ TURNKEY DELIVERIES",
      path: "/services/turnkey"
    }
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-white relative overflow-hidden" id="services">

      {/* Architectural Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
        {/* Massive Decorative Background Text */}
        <motion.span
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 0.6, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1.5 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[25vw] font-black text-slate-100 tracking-tighter leading-none"
        >
          EXPERTISE
        </motion.span>

        {/* Dot Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.3]"
          style={{
            backgroundImage: 'radial-gradient(#0D9488 0.5px, transparent 0.5px)',
            backgroundSize: '40px 40px'
          }}>
        </div>
      </div>

      <div className="max-w-[90%] mx-auto px-4 md:px-12 relative z-10">

        {/* Header Section: Editorial Style with Original Content */}
        <div className="flex flex-col items-center text-center mb-20 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center space-x-6 mb-8">
              <div className="w-16 h-[2px] bg-teal-500"></div>
              <span className="text-teal-600 font-bold text-xs tracking-[0.5em] uppercase">
                Our Expertise
              </span>
              <div className="w-16 h-[2px] bg-teal-500"></div>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight">
              Engineering Solutions for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#004D4D] to-teal-500">Every Modern Need</span>
            </h2>
          </motion.div>
        </div>

        {/* Mobile Swiper (Visible on small/medium screens) */}
        <div className="lg:hidden mt-10">
          {(() => {
            const displayServices = services.length > 0 && services.length < 6 ? [...services, ...services] : services;
            const canLoop = displayServices.length >= 6;

            return (
              <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={24}
                slidesPerView={1.12}
                centeredSlides={true}
                loop={canLoop}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                pagination={{
                  clickable: true
                }}
                className="services-swiper pb-12 px-4"
              >
                {displayServices.map((service, idx) => (
                  <SwiperSlide key={`${service.id}-${idx}`} className="py-12 px-2 overflow-visible">
                    {({ isActive }) => (
                      <div className={`h-full transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${isActive
                        ? 'scale-[1.05] opacity-100 blur-0 translate-y-0'
                        : 'scale-90 opacity-40 blur-[1.5px] translate-y-4'
                        }`}>
                        <ServiceCard service={service} />
                      </div>
                    )}
                  </SwiperSlide>
                ))}
              </Swiper>
            );
          })()}

          <style jsx="true">{`
            .services-swiper .swiper-pagination {
              bottom: 0px !important;
              left: 0 !important;
              width: 100% !important;
              display: flex !important;
              justify-content: center !important;
              align-items: center !important;
              gap: 8px !important;
            }
            .services-swiper .swiper-pagination-bullet {
              background: #0d9488;
              opacity: 0.3;
              margin: 0 !important;
            }
            .services-swiper .swiper-pagination-bullet-active {
              opacity: 1;
              width: 24px;
              border-radius: 4px;
              background: #0D9488;
            }
          `}</style>
        </div>

        {/* Desktop Grid (Visible on large screens) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          className="hidden lg:grid grid-cols-4 gap-8"
        >
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </motion.div>

      </div>
    </section>
  );
};


export default ServicesHighlight;
