import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, Zap, Users2, Sparkles, Sprout } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const CoreValues = () => {
  const values = [
    {
      title: "Uncompromising Quality",
      desc: "We never cut corners. Our commitment to excellence ensures every detail is perfected, from structural integrity to aesthetic finish.",
      icon: ShieldCheck,
      delay: 0.1
    },
    {
      title: "Innovative Spirit",
      desc: "We embrace new technologies and methodologies to solve complex challenges and deliver smarter, more efficient construction solutions.",
      icon: Zap,
      delay: 0.2
    },
    {
      title: "Client-Centricity",
      desc: "Your vision is our blueprint. We build strong relationships through transparency, communication, and a deep understanding of your needs.",
      icon: Users2,
      delay: 0.3
    },
    {
      title: "Integrity & Trust",
      desc: "Honesty is our foundation. We operate with complete transparency, ensuring our clients and partners can always depend on our word.",
      icon: Award,
      delay: 0.4
    },
    {
      title: "Bespoke Design",
      desc: "We don't do 'generic'. Each project is a unique masterpiece, tailored to reflect the specific identity and goals of our clients.",
      icon: Sparkles,
      delay: 0.5
    },
    {
      title: "Sustainability",
      desc: "We build for the future. Our practices prioritize environmental responsibility and long-term structural durability.",
      icon: Sprout,
      delay: 0.6
    }
  ];

  const ValueCard = ({ value, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: value.delay || 0.1, duration: 0.6 }}
      className="p-8 h-full rounded-[2.5rem] border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-2xl hover:shadow-primary/5 hover:border-primary/20 transition-all duration-500 group"
    >
      <div className="w-14 h-14 rounded-2xl bg-white shadow-lg flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-500">
        <value.icon size={28} />
      </div>
      <h4 className="text-xl font-bold text-secondary-dark mb-4 group-hover:text-primary transition-colors cursor-default">
        {value.title}
      </h4>
      <p className="text-slate-500 leading-relaxed group-hover:text-slate-600 transition-colors">
        {value.desc}
      </p>
    </motion.div>
  );

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em] mb-4">Values</h2>
            <h3 className="text-4xl font-bold text-secondary-dark leading-tight">
              The Principles That <br />
              <span className="text-primary">Modernize Our Craft</span>
            </h3>
          </div>
          <p className="text-slate-500 max-w-sm mb-2 text-lg">
            These core principles guide every decision we make and every structure we build.
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <ValueCard key={index} value={value} index={index} />
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden mt-10">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={0}
            slidesPerView={1.15}
            centeredSlides={true}
            loop={true}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            className="values-swiper pb-20 overflow-visible"
          >
            {values.map((value, index) => (
              <SwiperSlide key={index} className="py-12 overflow-visible">
                {({ isActive }) => (
                  <div className={`h-full transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${isActive
                    ? 'scale-110 opacity-100 blur-0 translate-y-0 z-20'
                    : 'scale-75 opacity-30 blur-[2.5px] translate-y-8 z-10'
                    }`}>
                    <div className="w-[90%] mx-auto h-full">
                      <ValueCard value={value} index={index} />
                    </div>
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>

          <style jsx="true">{`
            .values-swiper .swiper-pagination {
              bottom: 0 !important;
            }
            .values-swiper .swiper-pagination-bullet {
              background: #0d9488;
              opacity: 0.3;
              margin: 0 6px !important;
            }
            .values-swiper .swiper-pagination-bullet-active {
              opacity: 1;
              width: 28px;
              border-radius: 4px;
            }
          `}</style>
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
