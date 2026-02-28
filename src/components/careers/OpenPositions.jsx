import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Briefcase, ChevronRight, HardHat, Layout, PenTool } from 'lucide-react';

const OpenPositions = () => {
  const jobs = [
    {
      id: 1,
      title: "Senior Structural Engineer",
      department: "Engineering",
      location: "Chennai, TN",
      type: "Full-Time",
      icon: HardHat
    },
    {
      id: 2,
      title: "Site Supervisor",
      department: "Operations",
      location: "Velachery Site, Chennai",
      type: "Full-Time",
      icon: Briefcase
    },
    {
      id: 3,
      title: "Architectural Drafter",
      department: "Design",
      location: "Chennai, TN",
      type: "Full-Time",
      icon: PenTool
    },
    {
      id: 4,
      title: "Project Coordinator",
      department: "Project Management",
      location: "Chennai, TN",
      type: "Full-Time",
      icon: Layout
    }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-sm font-bold text-primary uppercase tracking-[0.4em] mb-6">Opportunities</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-secondary-dark mb-6">Join Our <span className="text-primary italic">Mission</span></h3>
          <p className="text-slate-500 font-medium">
            Explore available roles and match your skills with our requirements.
            We're always looking for talent that challenges the status quo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {jobs.map((job, i) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/50 group hover:border-primary/30 transition-all flex items-center justify-between"
            >
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-slate-50 text-slate-400 flex items-center justify-center group-hover:bg-primary/10 group-hover:text-primary transition-all">
                  <job.icon size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-secondary-dark group-hover:text-primary transition-colors">{job.title}</h4>
                  <div className="flex items-center gap-4 mt-2">
                    <span className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-slate-400">
                      <MapPin size={12} /> {job.location}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-slate-200"></span>
                    <span className="text-[10px] font-black uppercase tracking-widest text-primary">
                      {job.type}
                    </span>
                  </div>
                </div>
              </div>
              <button className="w-12 h-12 rounded-full border border-slate-100 flex items-center justify-center text-slate-300 group-hover:border-primary group-hover:text-primary transition-all">
                <ChevronRight size={20} />
              </button>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-slate-400 text-sm font-medium">Don't see a role that fits? <button className="text-primary font-bold hover:underline">Apply Speculatively</button></p>
        </div>
      </div>
    </section>
  );
};

export default OpenPositions;
