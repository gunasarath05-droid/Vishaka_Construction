import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Timeline = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef(null);

  const milestones = [
    {
      year: "2008",
      title: "Foundation",
      desc: "Vishaka Constructions was founded with a small team and a big vision in Chennai."
    },
    {
      year: "2012",
      title: "First Major Project",
      desc: "Successfully completed our first large-scale commercial complex, setting a new benchmark."
    },
    {
      year: "2015",
      title: "Expansion",
      desc: "Expanded operations to residential sectors, delivering 50+ luxury homes in three years."
    },
    {
      year: "2018",
      title: "Industry Recognition",
      desc: "Received the 'Excellence in Engineering' award and tripled our workforce."
    },
    {
      year: "2021",
      title: "Sustainable Shift",
      desc: "Implemented green building practices across all new projects, focusing on eco-efficiency."
    },
    {
      year: "2023",
      title: "Global Vision",
      desc: "Evolving into a tech-driven construction leader, ready for international collaborations."
    }
  ];

  const scrollToMilestone = (index) => {
    setActiveIndex(index);
    if (scrollRef.current) {
      const container = scrollRef.current;
      const card = container.children[index];
      if (card) {
        card.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  };

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-[10px] font-semibold text-primary uppercase tracking-[0.3em] mb-4">Our History</h2>
          <h3 className="text-4xl font-semibold text-secondary-dark mb-6">A Journey of <br />Growth & Innovation</h3>
        </div>

        {/* Desktop Alternating View */}
        <div className="relative hidden md:block">
          {/* Vertical Line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-slate-100"></div>

          <div className="space-y-24 relative z-10">
            {milestones.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className={`flex flex-row items-center gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                {/* Content */}
                <div className={`w-1/2 flex ${index % 2 === 0 ? 'justify-end text-right' : 'justify-start text-left'}`}>
                  <div className="max-w-md p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-primary transition-all duration-500 shadow-sm hover:shadow-xl">
                    <span className="text-3xl font-black text-primary/20 mb-2 block">{item.year}</span>
                    <h4 className="text-xl font-bold text-secondary-dark mb-3">{item.title}</h4>
                    <p className="text-slate-500 leading-relaxed font-light">{item.desc}</p>
                  </div>
                </div>

                {/* Center Circle */}
                <div className="flex w-8 h-8 rounded-full bg-white border-[3px] border-primary z-20 items-center justify-center shadow-lg">
                  <div className="w-2 h-2 rounded-full bg-primary animate-ping"></div>
                </div>

                {/* Spacer for opposite side */}
                <div className="w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Scroll-Driven Timeline */}
        <div className="md:hidden flex gap-4 h-[450px] relative">
          {/* Left Anchor Rail (Sticky-ish) */}
          <div className="relative w-16 flex flex-col items-center py-6 h-full">
            <div className="absolute top-0 bottom-0 w-[1px] bg-slate-200 left-1/2 -translate-x-1/2"></div>
            <div className="relative flex flex-col justify-between h-full w-full">
              {milestones.map((milestone, idx) => (
                <button
                  key={idx}
                  onClick={() => scrollToMilestone(idx)}
                  className="relative z-10 py-2 flex flex-col items-center focus:outline-none"
                >
                  <motion.div
                    animate={{
                      scale: activeIndex === idx ? 1.4 : 1,
                      backgroundColor: activeIndex === idx ? "#0d9488" : "#cbd5e1"
                    }}
                    className="w-2.5 h-2.5 rounded-full border-2 border-white shadow-sm transition-colors duration-300"
                  />
                  <span className={`mt-1.5 text-[9px] font-bold tracking-tight transition-all duration-300 ${activeIndex === idx ? 'text-primary scale-110' : 'text-slate-400 opacity-60'}`}>
                    {milestone.year}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Right Scrollable Cards Area */}
          <div
            ref={scrollRef}
            className="flex-1 overflow-y-auto snap-y snap-mandatory no-scrollbar space-y-4 py-[180px]"
          >
            {milestones.map((milestone, idx) => (
              <motion.div
                key={idx}
                onViewportEnter={() => setActiveIndex(idx)}
                viewport={{ amount: 0.7 }}
                className="snap-center w-full px-2 py-4"
              >
                <div className={`bg-slate-50 rounded-[2.5rem] border p-8 transition-all duration-500 ${activeIndex === idx ? 'border-teal-500 shadow-xl scale-100 opacity-100' : 'border-slate-100 scale-95 opacity-40'}`}>
                  <span className={`text-4xl font-black block mb-4 leading-none transition-colors duration-500 ${activeIndex === idx ? 'text-primary' : 'text-primary/10'}`}>
                    {milestone.year}
                  </span>
                  <h4 className="text-xl font-bold text-secondary-dark mb-3 leading-tight">
                    {milestone.title}
                  </h4>
                  <p className="text-slate-500 leading-relaxed text-sm font-light">
                    {milestone.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Pointer Visual Cue */}
          <div
            className="absolute left-[64px] w-4 h-4 bg-teal-500 rounded-full blur-[8px] opacity-20 transition-all duration-700 pointer-events-none"
            style={{
              top: `${24 + (activeIndex * (380 / (milestones.length - 1)))}px`,
              transform: 'translateY(-50%)'
            }}
          />
        </div>
      </div>

      <style jsx="true">{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
          scroll-behavior: smooth;
        }
      `}</style>
    </section>
  );
};

export default Timeline;
