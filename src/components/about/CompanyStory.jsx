import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';
import { Target, History, Award } from 'lucide-react';

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

const CompanyStory = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Visual Side */}
          <div className="lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop"
                alt="Construction Site"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            </motion.div>

            {/* Experience Badge */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="absolute -bottom-8 -right-8 bg-primary text-white p-8 rounded-3xl shadow-2xl z-20 hidden md:block"
            >
              <p className="text-5xl font-bold mb-1">
                <Counter value={15} />+
              </p>
              <p className="text-sm font-medium uppercase tracking-widest opacity-80">Years of<br />Excellence</p>
            </motion.div>

            {/* Decorative background shape */}
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"></div>
          </div>

          {/* Content Side */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em] mb-4">Our Legacy</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-secondary-dark mb-8 leading-tight">
                Building Relationships <br />
                <span className="text-slate-400 font-light">One Brick at a Time</span>
              </h3>

              <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                <p>
                  Founded in 2008, Vishaka Constructions began with a simple yet profound vision: to bridge the gap between architectural imagination and tangible reality. What started as a small team of passionate engineers has evolved into a premier construction firm known for its integrity and innovation.
                </p>
                <p>
                  Over the past 15 years, we have navigated through complex challenges, embraced evolving technologies, and consistently delivered projects that transcend expectations. Our journey is defined by the trust our clients place in us and the enduring landmarks we create.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <History className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary-dark mb-1">Our Heritage</h4>
                    <p className="text-sm text-slate-500">Rooted in tradition, powered by modern engineering.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Target className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary-dark mb-1">Our Mission</h4>
                    <p className="text-sm text-slate-500">Delivering excellence through sustainable practices.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyStory;
