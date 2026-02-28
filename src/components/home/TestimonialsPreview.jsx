import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, CheckCircle } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const TestimonialsPreview = () => {
  const testimonials = [
    {
      name: 'John Doe',
      role: 'CEO, ABC Corp',
      quote: 'Vishaka Constructions transformed our vision into reality. Their attention to detail and quality craftsmanship are unmatched.',
      rating: 5,
      initial: 'J'
    },
    {
      name: 'Jane Smith',
      role: 'CEO, XYZ Corp',
      quote: 'Vishaka Constructions transformed our vision into reality. Their attention to detail and quality craftsmanship are unmatched.',
      rating: 5,
      initial: 'S'
    },
    {
      name: 'Bob Johnson',
      role: 'CEO, PQR Corp',
      quote: 'Vishaka Constructions transformed our vision into reality. Their attention to detail and quality craftsmanship are unmatched.',
      rating: 5,
      initial: 'B'
    },
    {
      name: 'Sarah Williams',
      role: 'Director, Urban Heights',
      quote: 'The team at Vishaka is professional, efficient, and highly skilled. They delivered our project on time and exceeded our expectations.',
      rating: 5,
      initial: 'W'
    },
    {
      name: 'Michael Brown',
      role: 'Founder, TechSpaces',
      quote: 'Incredible experience working with Vishaka. Their innovative approach to construction set them apart from the competition.',
      rating: 5,
      initial: 'T'
    }
  ];

  return (
    <section className="py-12 bg-[#F8FAFC] relative overflow-hidden" id="testimonials">

      {/* Architectural Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
        {/* Massive Decorative Background Text */}
        <span className="absolute -top-10 -right-20 text-[20vw] font-black text-slate-200/40 tracking-tighter opacity-50">
          REVIEWS
        </span>

        {/* Dot Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage: 'radial-gradient(#004D4D 0.5px, transparent 0.5px)',
            backgroundSize: '30px 30px'
          }}>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-teal-600 font-bold text-sm tracking-widest uppercase mb-4">Testimonials</p>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">What Our Clients Say</h2>
          </motion.div>
        </div>

        {/* Testimonials Viewport: Strictly clips to 3 cards while allowing hover zoom */}
        <div className="relative max-w-[1280px] mx-auto overflow-hidden">
          <div className="testimonials-container group px-4 md:px-10 overflow-visible">
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={48}
              slidesPerView={1}
              centeredSlides={true}
              loop={true}
              autoplay={{
                delay: 4500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true
              }}
              pagination={{
                clickable: true,
                dynamicBullets: true
              }}
              breakpoints={{
                768: { slidesPerView: 2, centeredSlides: false },
                1100: { slidesPerView: 3, centeredSlides: true }
              }}
              className="pb-24 overflow-visible"
            >
              {testimonials.map((item, idx) => (
                <SwiperSlide key={idx} className="py-12 overflow-visible">
                  <div className="transition-all duration-500 group-hover:blur-[1.5px] group-hover:opacity-60 hover:!blur-none hover:!opacity-100 hover:scale-[1.05] h-full">
                    <div className="group/card relative h-full">
                      {/* Card Glow Background */}
                      <div className="absolute -inset-1 bg-gradient-to-b from-teal-500/10 to-transparent blur-2xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"></div>

                      {/* Main Card */}
                      <div className="relative bg-white p-8 md:p-10 rounded-[2.5rem] shadow-[0_15px_40px_-15px_rgba(0,0,0,0.05)] border border-slate-100 h-[450px] flex flex-col transition-all duration-500 group-hover/card:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.12)] group-hover/card:border-teal-500/20">

                        <div className="flex justify-between items-start mb-6">
                          <div className="flex space-x-1">
                            {[...Array(item.rating)].map((_, i) => (
                              <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                          <Quote size={28} className="text-slate-100 group-hover/card:text-teal-500/20 transition-colors" />
                        </div>

                        <p className="text-slate-500 italic text-lg leading-relaxed mb-8 flex-grow">"{item.quote}"</p>

                        <div className="mt-auto pt-8 border-t border-slate-50 flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="w-14 h-14 rounded-full bg-teal-600 text-white flex items-center justify-center font-bold text-xl mr-4 group-hover/card:bg-teal-500 transition-colors shadow-lg shadow-teal-500/10">
                              {item.initial}
                            </div>
                            <div>
                              <h3 className="text-lg font-bold text-slate-900 leading-none mb-1">
                                {item.name}
                              </h3>
                              <p className="text-sm text-slate-500 font-medium">
                                {item.role}
                              </p>
                            </div>
                          </div>

                          {/* Verification Badge */}
                          <div className="flex flex-col items-end opacity-20 group-hover/card:opacity-100 transition-opacity duration-500">
                            <CheckCircle size={16} className="text-teal-500 mb-0.5" />
                            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest leading-none">Verified</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      <style jsx="true">{`
        .testimonials-container .swiper {
          overflow: visible !important;
        }
        .testimonials-container .swiper-pagination-bullet {
          background: #0d9488;
        }
        .testimonials-container .swiper-pagination-bullet-active {
          width: 28px;
          border-radius: 4px;
        }
      `}</style>

    </section>
  );
};

export default TestimonialsPreview;
