import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Target, Compass } from 'lucide-react';

const MissionVision = () => {
  const data = [
    {
      title: "Our Mission",
      desc: "To deliver exceptional construction services through innovation, integrity, and a relentless focus on quality, ensuring every project adds lasting value to our clients and communities.",
      icon: Target,
      color: "bg-primary/10 text-primary"
    },
    {
      title: "Our Vision",
      desc: "To be the most trusted and innovative construction partner, recognized for transforming complex architectural visions into sustainable and inspiring realities across the globe.",
      icon: Eye,
      color: "bg-secondary-dark/10 text-secondary-dark"
    },
    {
      title: "Our Purpose",
      desc: "To build not just structures, but legacies that enhance the quality of life and stand as benchmarks of engineering excellence for generations to come.",
      icon: Compass,
      color: "bg-primary/10 text-primary"
    }
  ];

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em] mb-4">Core Philosophy</h2>
          <h3 className="text-4xl font-bold text-secondary-dark mb-6">Driven by Purpose, <br />Inspired by Excellence</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="bg-white p-10 rounded-[2rem] shadow-xl shadow-slate-200 border border-slate-100 hover:border-primary transition-all duration-500 group"
            >
              <div className={`w-16 h-16 rounded-2xl ${item.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                <item.icon size={32} />
              </div>
              <h4 className="text-2xl font-bold text-secondary-dark mb-4">{item.title}</h4>
              <p className="text-slate-500 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative background circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/2 rounded-full blur-[120px] -z-10"></div>
    </section>
  );
};

export default MissionVision;
