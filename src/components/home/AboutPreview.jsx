import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, Shield, MapPin, Calendar, Activity } from 'lucide-react';
import { useNavigate } from 'react-router-dom';


const Counter = ({ value, duration = 1.5 }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.8 });

  useEffect(() => {
    if (isInView) {
      count.set(0);
      const controls = animate(count, value, { duration, ease: [0.33, 1, 0.68, 1] });
      return controls.stop;
    }
  }, [isInView, value, duration, count]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

const AboutPreview = () => {
  const navigate = useNavigate();
  return (
    <section className="min-h-screen flex items-center py-12 lg:py-16 bg-white relative overflow-hidden" id="about">

      {/* Architectural Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
        {/* Massive Decorative Background Text */}
        <span className="absolute top-[10%] -left-[10%] text-[15vw] lg:text-[20vw] font-black text-slate-50 opacity-[0.4] tracking-tighter leading-none select-none pointer-events-none whitespace-nowrap">
          LEGACY
        </span>

        {/* Dot Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.3]"
          style={{
            backgroundImage: 'radial-gradient(#0D9488 0.5px, transparent 0.5px)',
            backgroundSize: '40px 40px'
          }}>
        </div>

        {/* Vertical Technical Line */}
        <div className="absolute top-0 right-[15%] w-[1px] h-full bg-slate-100 hidden lg:block"></div>
      </div>

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-12 relative z-10 py-8 lg:py-12 xl:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-12 xl:gap-24 items-center">

          {/* Left: Visual Composition */}
          <div className="lg:col-span-6 relative pb-16 sm:pb-20 lg:pb-0">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              {/* Main Image Frame with High-End Border */}
              <div className="relative rounded-[2rem] sm:rounded-[3rem] overflow-hidden shadow-[0_30px_80px_-20px_rgba(0,0,0,0.15)] border-[8px] sm:border-[12px] border-white bg-slate-100 aspect-[1/1] sm:aspect-[4/5] lg:aspect-[4/4.5]">
                <img
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200"
                  alt="Vishaka Construction Excellence"
                  className="w-full h-full object-cover grayscale-[20%] transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/20 via-transparent to-transparent"></div>

                {/* Image Overlay HUD */}
                <div className="absolute top-4 left-4 sm:top-8 sm:left-8 flex items-center space-x-2 sm:space-x-3 bg-black/40 backdrop-blur-md px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-white/20">
                  <Activity size={10} className="text-teal-400 animate-pulse sm:w-3 sm:h-3" />
                  <span className="text-[9px] sm:text-[11px] font-black text-white uppercase tracking-widest">Live Site Data</span>
                </div>
              </div>

              {/* Floating Architecture HUD Panel */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="absolute -bottom-8 left-4 right-4 sm:left-auto sm:right-auto sm:-bottom-10 sm:-right-2 lg:-right-4 xl:-right-12 bg-slate-900 text-white p-5 sm:p-8 lg:p-8 xl:p-10 rounded-[1.5rem] sm:rounded-[2.5rem] shadow-2xl z-20 w-auto sm:w-64 md:w-72 lg:w-72 xl:w-80 border-t border-slate-700"
              >
                <div className="flex items-center space-x-3 mb-4 sm:mb-6">
                  <div className="w-6 sm:w-8 h-[1px] bg-teal-500"></div>
                  <span className="text-[9px] sm:text-[11px] font-black text-teal-400 uppercase tracking-[0.4em]">Established 2008</span>
                </div>

                <div className="flex items-end space-x-2 mb-2 sm:mb-4">
                  <p className="text-5xl sm:text-6xl lg:text-6xl xl:text-7xl font-black text-white leading-none">
                    <Counter value={15} />
                  </p>
                  <p className="text-xl sm:text-2xl font-bold text-teal-500 mb-1 sm:mb-2">+</p>
                </div>
                <p className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-widest font-black leading-relaxed">
                  Years of Engineering<br />
                  <span className="text-white italic">Mastery & Innovation</span>
                </p>

                <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-white/5 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[8px] sm:text-[9px] font-bold text-slate-500 uppercase tracking-widest mb-1">HQ Location</span>
                    <div className="flex items-center space-x-1">
                      <MapPin size={8} className="text-teal-400 sm:w-2.5 sm:h-2.5" />
                      <span className="text-[9px] sm:text-[11px] font-bold">Chennai, IN</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-[8px] sm:text-[9px] font-bold text-slate-500 uppercase tracking-widest mb-1">Status</span>
                    <span className="text-[9px] sm:text-[11px] font-black text-teal-400">CORE_ACTIVE</span>
                  </div>
                </div>
              </motion.div>

              {/* Decorative Blur Orbit */}
              <div className="absolute top-1/2 -translate-y-1/2 -right-32 w-64 h-64 bg-teal-500/10 rounded-full blur-[100px] -z-10"></div>
            </motion.div>
          </div>

          {/* Right: Content Area */}
          <div className="lg:col-span-6 relative z-10">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: "-100px" }}
            >
              <motion.div variants={itemVariants} className="flex items-center space-x-4 mb-4 sm:mb-8">
                <span className="text-teal-600 font-bold text-[10px] sm:text-xs tracking-[0.6em] uppercase">Who We Are</span>
                <div className="w-12 sm:w-16 h-[2px] bg-teal-500/20"></div>
              </motion.div>

              <motion.h2 variants={itemVariants} className="text-2xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-6xl font-black text-slate-900 mb-4 sm:mb-6 xl:mb-8 leading-[1.1]">
                Transforming Concrete <span className="italic font-light">Visions</span> Into <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#004D4D] to-teal-500">Stunning Reality</span>
              </motion.h2>

              <motion.p variants={itemVariants} className="text-sm sm:text-lg text-slate-500 mb-6 lg:mb-8 xl:mb-10 leading-relaxed max-w-xl">
                At <span className="text-slate-900 font-bold">Vishaka Constructions</span>, we don't just build structures; we create environments where businesses thrive and families grow. With a relentless focus on quality and innovation, we've delivered over 250+ projects that stand as testaments to our craftsmanship.
              </motion.p>

              {/* Technical Checkpoints */}
              <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
                {[
                  { text: 'Bespoke Architectural Solutions', icon: Shield },
                  { text: 'Sustainable & Eco-Friendly Building', icon: Calendar },
                  { text: 'Rigorous Quality Control Systems', icon: CheckCircle2 }
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3 sm:space-x-4 group">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-teal-50 flex items-center justify-center transition-all duration-300 group-hover:bg-slate-900 group-hover:text-white shadow-sm shrink-0">
                      <item.icon size={16} className="text-teal-600 group-hover:text-teal-400 sm:w-[18px] sm:h-[18px]" />
                    </div>
                    <span className="text-xs sm:text-sm text-slate-700 font-bold">{item.text}</span>
                  </div>
                ))}
              </motion.div>

              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row lg:items-center space-y-4 sm:space-y-0 sm:space-x-8">
                <motion.button
                  onClick={() => navigate('/about')}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto bg-slate-900 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full sm:rounded-[2rem] font-black text-xs sm:text-sm uppercase tracking-widest shadow-2xl hover:bg-teal-600 transition-all duration-500 flex items-center justify-center"
                >
                  Our Full Story
                  <ArrowUpRight className="ml-2 sm:ml-3" size={18} />
                </motion.button>

                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="flex -space-x-2 sm:-space-x-3">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                        <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" />
                      </div>
                    ))}
                  </div>
                  <p className="text-[10px] sm:text-xs text-slate-500 font-bold tracking-tight">
                    <span className="text-slate-900 font-black">2.5k+</span> Happy Clients
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
