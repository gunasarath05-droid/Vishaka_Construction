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
      <div className="relative bg-white/95 backdrop-blur-sm p-6 md:p-8 lg:p-9 rounded-[2rem] md:rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-slate-100 h-full flex flex-col transition-all duration-500 group-hover:border-teal-500/20 group-hover:shadow-[0_40px_80px_rgba(0,0,0,0.1)] overflow-hidden">

        {/* Visual Corner Accents */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-slate-50 to-transparent -mr-12 -mt-12 rounded-full transition-transform duration-700 group-hover:scale-150"></div>

        {/* Technical Header (HUD Elements) */}
        <div className="flex justify-between items-center mb-5 md:mb-8 relative z-10">
          <div className="flex flex-col">
            <span className="text-[11px] font-black text-teal-600 tracking-[0.2em]">{service.id}</span>
            <div className="flex items-center space-x-2">
              <div className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse"></div>
              <span className="text-[11px] font-black text-slate-400 uppercase tracking-widest">{service.status}</span>
            </div>
          </div>
          <ShieldCheck size={20} className="text-slate-200 group-hover:text-teal-500 transition-colors duration-500" />
        </div>

        {/* Central Icon with Lens Glow */}
        <div className="relative mb-4 md:mb-5 lg:mb-6 w-fit z-10">
          <div className={`absolute inset-0 bg-${service.accent}-400/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 scale-150`}></div>
          <div className="relative w-14 h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 bg-slate-50 border border-slate-100 rounded-[1.5rem] md:rounded-[2rem] flex items-center justify-center transition-all duration-700 group-hover:bg-slate-900 group-hover:text-white group-hover:border-slate-900 group-hover:rotate-[10deg] shadow-inner">
            <service.icon size={30} className="md:size-[36px] transition-transform duration-500 group-hover:scale-110" />
          </div>
        </div>

        <div className="relative z-10">
          <h3 className="text-lg md:text-xl lg:text-2xl font-black text-slate-900 mb-2 md:mb-3 group-hover:text-teal-600 transition-colors duration-500 min-h-[2.5rem] md:min-h-[3rem]">{service.title}</h3>
          <p className="text-slate-500 leading-relaxed mb-4 md:mb-6 font-medium text-xs md:text-sm lg:text-base">
            {service.desc}
          </p>
        </div>

        {/* Action HUD Bar */}
        <div className="mt-auto pt-5 md:pt-8 border-t border-slate-50 flex items-center justify-between relative z-10">
          <div className="flex items-center space-x-2 group-hover:space-x-4 transition-all duration-500">
            <div className="w-6 h-[1px] bg-teal-500 opacity-40"></div>
            <span className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] group-hover:text-teal-600 transition-colors duration-500 whitespace-nowrap">
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

      <div className="max-w-[95%] mx-auto px-4 md:px-12 relative z-10">

        {/* Header Section: Editorial Style with Original Content */}
        <div className="flex flex-col items-center text-center mb-10 md:mb-20 lg:mb-24">
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

        {/* Unified Swiper — Premium animation across all screen sizes */}
        <div className="relative group/swiper">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1.15}
            centeredSlides={true}
            loop={true}
            speed={1000}
            grabCursor={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 30,
                centeredSlides: false,
              },
              1024: {
                slidesPerView: 3.2,
                spaceBetween: 30,
                centeredSlides: true,
              }
            }}
            className="services-swiper pb-16 lg:pb-24"
          >
            {[...services, ...services].map((service, idx) => (
              <SwiperSlide key={`${service.id}-${idx}`} className="py-10 overflow-visible">
                {({ isActive }) => (
                  <div className={`h-full transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] ${isActive
                    ? 'opacity-100 scale-100 z-20 shadow-[-20px_0_60px_-15px_rgba(0,0,0,0.05),20px_0_60px_-15px_rgba(0,0,0,0.05)]'
                    : 'opacity-60 scale-95 blur-[0.5px] z-10'
                    }`}>
                    {/* Minimal Glow for Active Card - Pure Premium */}
                    <div className={`absolute -inset-2 bg-teal-500/5 blur-3xl rounded-[3rem] -z-10 transition-opacity duration-1000 ${isActive ? 'opacity-100' : 'opacity-0'}`}></div>

                    <ServiceCard service={service} />
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
          <style jsx="true">{`
            .services-swiper .swiper-pagination { bottom: 0 !important; display: flex !important; justify-content: center !important; gap: 8px !important; }
            .services-swiper .swiper-pagination-bullet { background: #0d9488; opacity: 0.2; margin: 0 !important; width: 10px; height: 10px; transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1); }
            .services-swiper .swiper-pagination-bullet-active { opacity: 1; width: 40px; border-radius: 5px; background: #0D9488; }
          `}</style>
        </div>

      </div>
    </section>
  );
};


export default ServicesHighlight;
