import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Clock, Award, Hammer, Headphones, Leaf } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const WhyChooseUs = () => {
  const reasons = [
    {
      title: "Safety First",
      desc: "Rigorous safety protocols that exceed industry standards to protect our workers and your investment.",
      icon: ShieldCheck
    },
    {
      title: "Timely Delivery",
      desc: "Our optimized project management systems ensure projects are completed on or before schedule.",
      icon: Clock
    },
    {
      title: "Quality Mastery",
      desc: "Premium Grade materials and multi-stage quality checks for unrivaled structural durability.",
      icon: Award
    },
    {
      title: "Expert Craftsmanship",
      desc: "A team of seasoned professionals with decades of collective experience in complex construction.",
      icon: Hammer
    },
    {
      title: "24/7 Support",
      desc: "Dedicated project consultants available around the clock to address your queries and concerns.",
      icon: Headphones
    },
    {
      title: "Eco-Conscious",
      desc: "Sustainable building practices that reduce environmental impact without compromising quality.",
      icon: Leaf
    }
  ];

  const ReasonCard = ({ reason, index }) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="p-8 h-full rounded-[2.5rem] border border-white/5 bg-white/2 hover:bg-white/5 transition-all duration-300 group flex flex-col justify-center"
    >
      <reason.icon className="text-primary mb-4 transition-transform duration-500 group-hover:scale-110" size={36} />
      <h4 className="text-xl font-bold text-white mb-3">{reason.title}</h4>
      <p className="text-slate-500 text-sm leading-relaxed">{reason.desc}</p>
    </motion.div>
  );

  return (
    <section className="py-24 bg-secondary-dark relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 mb-20">
          {/* Content Side */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em] mb-4">Advantages</h2>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 sm:mb-8 leading-tight">
                Why We Are The <br />
                <span className="text-primary italic">Preferred Choice</span>
              </h3>
              <p className="text-slate-400 text-lg mb-12 leading-relaxed max-w-xl">
                We combine traditional expertise with modern innovation to deliver results that stand the test of time. Our reputation is built on reliability, quality, and an unwavering commitment to our clients.
              </p>

              <div className="p-8 rounded-3xl bg-primary/5 border border-primary/20 backdrop-blur-sm max-w-md">
                <div className="flex items-center gap-6 mb-2">
                  <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center text-white shrink-0 shadow-[0_0_30px_rgba(13,148,136,0.3)]">
                    <Award size={32} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white">Certified Excellence</h4>
                    <p className="text-slate-500 text-sm">ISO 9001:2015 Licensed Construction Firm</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Grid Side (Desktop) */}
          <div className="hidden lg:block lg:w-1/2">
            <div className="grid grid-cols-2 gap-6">
              {reasons.map((reason, index) => (
                <ReasonCard key={index} reason={reason} index={index} />
              ))}
            </div>
          </div>

          {/* Carousel (Mobile) */}
          <div className="lg:hidden w-full mt-12 pb-12">
            {(() => {
              const displayReasons = reasons.length > 0 && reasons.length < 6 ? [...reasons, ...reasons] : reasons;

              return (
                <Swiper
                  modules={[Pagination, Autoplay]}
                  spaceBetween={0}
                  slidesPerView={1.15}
                  centeredSlides={true}
                  loop={true}
                  autoplay={{ delay: 3500, disableOnInteraction: false }}
                  pagination={{ clickable: true }}
                  className="why-swiper overflow-visible"
                >
                  {displayReasons.map((reason, index) => (
                    <SwiperSlide key={index} className="py-12 overflow-visible">
                      {({ isActive }) => (
                        <div className={`h-[320px] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${isActive
                          ? 'scale-110 opacity-100 blur-0 translate-y-0 z-20 brightness-110 shadow-[0_20px_60px_-15px_rgba(13,148,136,0.2)] pt-2'
                          : 'scale-75 opacity-20 blur-[2px] translate-y-8 z-10'
                          }`}>
                          <div className="w-[90%] mx-auto h-full">
                            <ReasonCard reason={reason} index={0} />
                          </div>
                        </div>
                      )}
                    </SwiperSlide>
                  ))}
                </Swiper>
              );
            })()}

            <style jsx="true">{`
              .why-swiper .swiper-pagination {
                bottom: 0px !important;
              }
              .why-swiper .swiper-pagination-bullet {
                background: #0d9488;
                opacity: 0.3;
                margin: 0 6px !important;
              }
              .why-swiper .swiper-pagination-bullet-active {
                opacity: 1;
                width: 28px;
                border-radius: 4px;
              }
            `}</style>
          </div>
        </div>
      </div>

      {/* Background decorative blob */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10"></div>
    </section>
  );
};

export default WhyChooseUs;
