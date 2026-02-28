import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const ProjectCard = ({ title, category, image, location }) => {
    return (
        <div className="group relative overflow-hidden rounded-3xl bg-slate-900 aspect-[4/5] cursor-pointer">
            <img
                src={image}
                alt={title}
                className="h-full w-full object-cover opacity-80 group-hover:opacity-60 transition-all duration-700 group-hover:scale-110"
            />

            {/* Overlay Details */}
            <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-100 transition-opacity">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-primary font-bold text-xs tracking-widest uppercase mb-2">{category}</p>
                    <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
                    <p className="text-slate-300 text-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">{location}</p>
                </div>
            </div>

            {/* Floating Button */}
            <div className="absolute top-6 right-6 w-12 h-12 bg-white rounded-full flex items-center justify-center text-slate-900 opacity-0 group-hover:opacity-100 transform -translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                <ArrowUpRight size={20} />
            </div>
        </div>
    );
};

export default ProjectCard;
