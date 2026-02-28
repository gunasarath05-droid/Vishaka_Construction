import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import founder from "../../assets/images/ceo-vishaka.png"

const FounderMessage = () => {
  return (
    <section className="py-32 bg-[#020808] relative overflow-hidden">
      {/* Architectural Blueprint Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `linear-gradient(#0D9488 1px, transparent 1px), linear-gradient(90deg, #0D9488 1px, transparent 1px)`,
            backgroundSize: '100px 100px'
          }}>
        </div>

        {/* Animated Construction Lines */}
        <motion.div
          animate={{ x: [-100, 100], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent"
        />
        <motion.div
          animate={{ y: [-100, 100], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 left-1/3 w-[1px] h-full bg-gradient-to-b from-transparent via-primary to-transparent"
        />

        {/* Geometric Accents */}
        <div className="absolute top-10 left-10 text-[10px] font-mono text-primary/30 tracking-widest uppercase">
          [ 44.2522° N, 112.1554° W ]
        </div>
        <div className="absolute bottom-10 right-10 flex gap-4 items-end opacity-20">
          <div className="flex flex-col gap-1 items-end">
            <span className="text-[10px] font-mono text-white italic">LEVEL.01</span>
            <div className="w-16 h-px bg-white"></div>
          </div>
          <span className="text-4xl font-black text-white/5 tracking-tighter">BPRN-V2</span>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-0">

          {/* Visual Block - Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="lg:w-1/2 relative flex justify-start lg:pl-12"
          >
            <div className="relative w-full max-w-md aspect-[4/5] z-10">
              {/* Corner Framing */}
              <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-primary z-20"></div>
              <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-primary/30 z-20"></div>

              <img
                src={founder}
                alt="Founder"
                className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-1000 shadow-[0_50px_100px_rgba(0,0,0,0.8)]"
              />

              {/* Image Stats Overlay */}
              <div className="absolute top-6 right-6 bg-black/40 backdrop-blur-md border border-white/10 p-3 rounded-lg flex flex-col items-end z-20">
                <span className="text-[10px] font-bold text-primary uppercase mb-1">Architectural Lead</span>
                <span className="text-white text-xs font-medium tracking-wider">EST. 2008</span>
              </div>
            </div>

            {/* Decorative Geometric Block */}
            <div className="absolute -bottom-10 -left-6 w-64 h-64 border border-primary/20 -rotate-6 pointer-events-none"></div>
          </motion.div>

          {/* Content Block - Overlapping Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:w-7/12 lg:-ml-32 z-20"
          >
            <div className="bg-white/5 backdrop-blur-3xl border border-white/10 p-10 md:p-16 rounded-[2rem] shadow-[0_40px_80px_rgba(0,0,0,0.5)]">
              <Quote className="text-primary mb-8 opacity-60" size={40} />

              <h2 className="text-3xl md:text-5xl font-light text-white mb-10 leading-[1.2] tracking-wide">
                Architecture is a <span className="font-bold text-primary italic">Visual Art</span>, and the buildings speak for themselves.
              </h2>

              <div className="space-y-6 text-slate-300 text-lg leading-relaxed font-light mb-12">
                <p>
                  At <span className="text-white font-medium">Vishaka Constructions</span>, we represent a fusion of technical precision and artistic vision. We believe that every project is a narrative carved in stone and steel.
                </p>
                <p className="opacity-70">
                  Our mission has always been to create spaces that don't just exist but thrive, setting international benchmarks in structural integrity and modern aesthetics.
                </p>
              </div>

              {/* Signature Section */}
              <div className="flex items-center gap-6">
                <div>
                  <h4 className="text-2xl font-serif text-white mb-1 italic">Dinesh Kumar.G</h4>
                  <div className="flex items-center gap-3">
                    <div className="h-px w-8 bg-primary"></div>
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.5em]">Founder & CEO</span>
                  </div>
                </div>
                {/* Construction Seal */}
                <div className="w-16 h-16 rounded-full border border-primary/20 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full border border-primary/40 flex items-center justify-center animate-spin-slow">
                    <span className="text-[8px] font-black text-primary/60">HQ-CHN</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default FounderMessage;
