import React from 'react';
import { motion } from 'framer-motion';

const AboutHero = () => {
  return (
    <section className="relative pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 md:pb-24 bg-secondary-dark overflow-hidden">
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
          <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em] mb-6">Our Journey</h2>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 sm:mb-8 tracking-tight leading-tight">
            Crafting Spaces, <br /> <span className="text-primary italic">Redefining Living</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-slate-400 font-light leading-relaxed">
            From humble beginnings to an industry leader, discover the passion,
            precision, and purpose behind everything we build.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHero;
