import React from 'react';
import { motion } from 'framer-motion';

const Achievements = () => {
  const stats = [
    { label: "Projects Completed", value: "250", suffix: "+" },
    { label: "Happy Clients", value: "180", suffix: "+" },
    { label: "Years of Experience", value: "15", suffix: "" },
    { label: "Awards Won", value: "42", suffix: "" }
  ];

  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      {/* Background decorative text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center whitespace-nowrap opacity-[0.05] pointer-events-none select-none">
        <span className="text-[15vw] font-black text-white uppercase tracking-tighter">EXCELLENCE</span>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <div className="flex items-center justify-center text-white mb-2">
                <span className="text-5xl md:text-6xl font-black tracking-tight">{stat.value}</span>
                <span className="text-2xl font-bold text-primary-dark ml-1">{stat.suffix}</span>
              </div>
              <p className="text-teal-50 text-sm font-bold uppercase tracking-widest opacity-80">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
