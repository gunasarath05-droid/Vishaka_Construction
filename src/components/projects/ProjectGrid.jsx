import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Calendar, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';


import { projects } from '../../data/projects';

const ProjectGrid = ({ activeCategory, activeStatus }) => {
  const filteredProjects = projects.filter(project => {
    const categoryMatch = activeCategory === 'All' || project.category === activeCategory;
    const statusMatch = activeStatus === 'All' || project.status === activeStatus;
    return categoryMatch && statusMatch;
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <AnimatePresence mode="popLayout">
        {filteredProjects.map((project) => (
          <motion.div
            layout
            key={project.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            className="group relative"
          >
            <Link to={`/projects/${project.slug}`} className="block text-inherit no-underline">
              <div className="relative rounded-[2.5rem] overflow-hidden bg-slate-100 shadow-xl group-hover:shadow-primary/10 transition-all duration-700 h-[450px]">
                {/* Project Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                {/* Badges */}
                <div className="absolute top-6 left-6 flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full bg-primary/20 backdrop-blur-md border border-primary/30 text-primary text-[10px] font-black uppercase tracking-widest">
                    {project.category}
                  </span>
                  <span className={`px-3 py-1 rounded-full backdrop-blur-md border text-[10px] font-black uppercase tracking-widest ${project.status === 'Ongoing'
                    ? 'bg-amber-500/20 border-amber-500/30 text-amber-500'
                    : 'bg-emerald-500/20 border-emerald-500/30 text-emerald-500'
                    }`}>
                    {project.status}
                  </span>
                </div>

                {/* Project info button */}
                <div className="absolute top-6 right-6 w-12 h-12 rounded-full glass border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowUpRight size={20} />
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 w-full p-8 text-white">
                  <h4 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{project.title}</h4>
                  <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-white/10 opacity-80">
                    <div className="flex items-center gap-2">
                      <MapPin size={14} className="text-primary" />
                      <span className="text-xs font-medium">{project.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={14} className="text-primary" />
                      <span className="text-xs font-medium">{project.year}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

        ))}
      </AnimatePresence>
    </div>
  );
};

export default ProjectGrid;
