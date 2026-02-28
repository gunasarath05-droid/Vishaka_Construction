import React from 'react';
import { motion } from 'framer-motion';
import {
  Layout,
  Compass,
  Paintbrush,
  Scaling,
  HardHat,
  Zap,
  Droplets,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';

// Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const ServiceList = () => {
  const services = [
    {
      title: "Architectural Design",
      desc: "Concept development, spatial planning, and detailed 3D modeling for modern structures.",
      icon: Compass
    },
    {
      title: "Interior Design",
      desc: "Bespoke interior solutions that harmonize aesthetics with functional workspace or living needs.",
      icon: Paintbrush
    },
    {
      title: "Landscape Planning",
      desc: "Integration of green spaces and outdoor environments that complement architectural forms.",
      icon: Layout
    },
    {
      title: "Project Management",
      desc: "End-to-end oversight ensuring timelines, budgets, and quality standards are strictly met.",
      icon: HardHat
    },
    {
      title: "Structural Engineering",
      desc: "Rigorous technical analysis and reinforced construction for long-term durability.",
      icon: Scaling
    },
    {
      title: "Smart Home Integration",
      desc: "Modern electrical and automation systems for enhanced security and energy efficiency.",
      icon: Zap
    },
    {
      title: "Green Building",
      desc: "Implementation of sustainable practices and water-saving technologies in every build.",
      icon: Droplets
    },
    {
      title: "Renovation & Retrofit",
      desc: "Modernizing existing structures with structural upgrades and refreshed aesthetics.",
      icon: ShieldCheck
    }
  ];

  const DetailedServiceCard = ({ service, isActive, isMobile = false }) => (
    <div
      className={`bg-white p-10 rounded-[3rem] border border-slate-100 flex flex-col h-full transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${isMobile
        ? isActive
          ? 'scale-105 opacity-100 blur-0 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] z-20'
          : 'scale-90 opacity-40 blur-[1px] z-10'
        : 'group hover:shadow-2xl hover:shadow-primary/5'
        }`}
    >
      <div className={`w-14 h-14 rounded-2xl bg-teal-50 flex items-center justify-center mb-8 text-primary transition-all duration-300 ${!isMobile && 'group-hover:bg-primary group-hover:text-white'}`}>
        <service.icon size={28} />
      </div>
      <h4 className="text-xl md:text-2xl font-bold text-secondary-dark mb-4 tracking-tight uppercase leading-none">
        {service.title}
      </h4>
      <p className="text-slate-500 text-sm md:text-base leading-relaxed font-light mb-8">
        {service.desc}
      </p>

      <div className="mt-auto pt-4 flex items-center justify-between">
        <div className="flex items-center gap-2 text-primary font-black text-[10px] tracking-[0.2em] uppercase">
          <span className="w-8 h-[2px] bg-primary"></span>
          View Details
        </div>
        {isMobile && <ChevronRight size={20} className="text-primary" />}
      </div>
    </div>
  );

  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 text-center md:text-left px-4">
          <div className="max-w-2xl mx-auto md:mx-0">
            <h2 className="text-[10px] font-black text-primary uppercase tracking-[0.4em] mb-4">Detailed Services</h2>
            <h3 className="text-4xl font-bold text-secondary-dark leading-tight tracking-tighter uppercase">
              Comprehensive Expertise <br />
              <span className="text-primary italic font-light">At Your Service</span>
            </h3>
          </div>
        </div>

        {/* Mobile Tactile Slider */}
        <div className="lg:hidden h-[500px]">
          {(() => {
            const displayServices = services.length > 0 && services.length < 6 ? [...services, ...services] : services;

            return (
              <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={0}
                slidesPerView={1.2}
                centeredSlides={true}
                loop={true}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                className="service-list-swiper h-full overflow-visible"
              >
                {displayServices.map((service, index) => (
                  <SwiperSlide key={index} className="pt-10 pb-24 overflow-visible">
                    {({ isActive }) => (
                      <DetailedServiceCard service={service} isActive={isActive} isMobile={true} />
                    )}
                  </SwiperSlide>
                ))}
              </Swiper>
            );
          })()}

          <style jsx="true">{`
            .service-list-swiper .swiper-pagination {
              bottom: 10px !important;
            }
            .service-list-swiper .swiper-pagination-bullet {
              background: #0d9488;
              opacity: 0.2;
              margin: 0 6px !important;
              transition: all 0.3s ease;
            }
            .service-list-swiper .swiper-pagination-bullet-active {
              opacity: 1;
              width: 24px;
              border-radius: 4px;
            }
          `}</style>
        </div>

        {/* Desktop Grid Layout */}
        <div className="hidden lg:grid grid-cols-4 gap-x-8 gap-y-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="h-[340px]"
            >
              <DetailedServiceCard service={service} isActive={false} isMobile={false} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceList;
