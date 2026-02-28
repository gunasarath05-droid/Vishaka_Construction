import React from 'react';

const ProjectFilter = ({ activeCategory, setActiveCategory, activeStatus, setActiveStatus }) => {
  const categories = ['All', 'Residential', 'Commercial', 'Industrial'];
  const statuses = ['All', 'Ongoing', 'Completed'];

  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
      {/* Category Filter */}
      <div className="flex flex-wrap items-center gap-3 p-2 bg-slate-100 rounded-2xl w-full md:w-auto">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 ${activeCategory === cat
                ? 'bg-white text-primary shadow-lg'
                : 'text-slate-500 hover:text-primary hover:bg-white/50'
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Status Filter */}
      <div className="flex items-center gap-3 p-2 bg-slate-100 rounded-2xl w-full md:w-auto overflow-x-auto">
        {statuses.map((status) => (
          <button
            key={status}
            onClick={() => setActiveStatus(status)}
            className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-widest transition-all duration-300 ${activeStatus === status
                ? 'bg-primary text-white shadow-lg'
                : 'text-slate-500 hover:text-primary hover:bg-white/50'
              }`}
          >
            {status}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProjectFilter;
