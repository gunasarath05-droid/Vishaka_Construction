import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import images from '../../data/images';

const PromoVideo = () => {
  return (
    <section className="relative bg-[#F8FAFC] py-20 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          {/* Left Column: Content */}
          <div className="lg:col-span-5 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center justify-center lg:justify-start space-x-3 mb-6">
                <div className="w-8 h-[1px] bg-teal-500"></div>
                <span className="text-teal-500 font-bold text-sm tracking-widest uppercase">
                  EXPERIENCE OUR CRAFT
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 leading-tight mb-8">
                Watch How We Shape the <br />
                <span className="text-slate-900">Modern World</span>
              </h2>

              <p className="text-slate-500 text-lg leading-relaxed max-w-sm mb-12 mx-auto lg:mx-0">
                Take a deep dive into our meticulous construction processes and see how we bring architectural visions to life with precision and dedication.
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-teal-500 text-white px-10 py-4 rounded-full font-bold hover:bg-slate-900 transition-all shadow-xl shadow-teal-500/20"
              >
                Learn More
              </motion.button>
            </motion.div>
          </div>

          {/* Right Column: Visual and Video Trigger */}
          <div className="lg:col-span-7 relative mt-12 lg:mt-0">
            <div className="relative">
              {/* Vertical Background Text - Hidden on mobile */}
              <div className="absolute -left-12 top-1/2 -translate-y-1/2 rotate-[-90deg] origin-center z-0 hidden lg:block">
                <span className="text-[12rem] font-black text-slate-200/50 whitespace-nowrap leading-none tracking-tighter uppercase">
                  CITY CONSTRUCT
                </span>
              </div>

              {/* Building Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="relative z-10 rounded-2xl overflow-hidden shadow-2xl mx-auto lg:ml-auto w-full md:w-[85%] aspect-[4/5] lg:aspect-square"
              >
                <img
                  src={images.project3}
                  alt="Featured Building"
                  className="w-full h-full object-cover"
                />
                {/* Image Overlay for Depth */}
                <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent"></div>
              </motion.div>

              {/* Floating Play Button - Repositioned for mobile */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:left-0 lg:-translate-x-1/2 z-20 flex flex-col items-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="relative w-32 h-32 flex items-center justify-center cursor-pointer group"
                >
                  {/* Rotating Stroke */}
                  <svg className="absolute inset-0 w-full h-full -rotate-90">
                    <circle
                      cx="64"
                      cy="64"
                      r="60"
                      fill="transparent"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-teal-500/30"
                    />
                    <motion.circle
                      cx="64"
                      cy="64"
                      r="60"
                      fill="transparent"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeDasharray="377"
                      animate={{ strokeDashoffset: [377, 100, 377] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      className="text-teal-500"
                    />
                  </svg>

                  {/* Main Button */}
                  <div className="w-20 h-20 bg-teal-500 rounded-full flex items-center justify-center text-white shadow-2xl group-hover:bg-teal-400 transition-colors duration-300">
                    <Play fill="white" size={24} className="ml-1" />
                  </div>
                </motion.div>
                <p className="mt-4 text-[10px] md:text-sm font-bold uppercase tracking-widest text-white lg:text-teal-600 text-center leading-tight drop-shadow-md lg:drop-shadow-none">
                  Watch <br /> Presentation Video
                </p>
              </motion.div>

              {/* Connecting Line Decoration */}
              <div className="absolute top-0 left-0 w-1/2 h-1/2 border-l-2 border-t-2 border-teal-500/20 rounded-tl-[60px] -z-10 pointer-events-none hidden lg:block"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PromoVideo;
