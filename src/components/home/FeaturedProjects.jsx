import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import CTASection from '../common/CTASection';

import { projects } from '../../data/projects';

const FeaturedProjects = () => {
    // Use projects from central data
    const displayProjects = projects.slice(0, 8);
    const [isPaused, setIsPaused] = React.useState(false);

    return (
        <section className="relative bg-[#F8FAFC] overflow-hidden" id="projects">
            <div className="absolute top-0 left-0 right-0 h-[700px] mr-4 md:mr-12 mt-10 bg-[#004D4D] rounded-tr-[3rem] md:rounded-tr-[4rem] z-0 overflow-hidden">
                {/* Background Image Overlay */}
                <img
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200"
                    alt="Architectural Background"
                    className="absolute inset-0 w-full h-full object-cover opacity-20"
                />
            </div>

            <div className="max-w-full mx-auto px-4 sm:px-6 md:px-10 lg:pl-32 xl:pl-40 relative z-10 pt-16 sm:pt-24 md:pt-32">

                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-end gap-6">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-white"
                    >
                        <div className="flex items-center space-x-3 mb-4">
                            <div className="w-10 h-[2px] bg-teal-400"></div>
                            <span className="text-teal-300 font-bold text-xs tracking-[0.3em] uppercase">
                                OUR WORK
                            </span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
                            Portfolio of completed projects
                        </h2>
                    </motion.div>

                    {/* View All Projects Button */}
                    <div className="flex mr-0 sm:mr-8 md:mr-16 lg:mr-20">
                        <Link
                            to="/projects"
                            className="group flex items-center space-x-4 bg-white/10 backdrop-blur-md border border-white/20 px-10 py-5 rounded-full text-white font-bold hover:bg-teal-500 hover:border-teal-500 transition-all duration-500 shadow-xl"
                        >
                            <span className="text-sm tracking-[0.2em] uppercase">View All Projects</span>
                            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-teal-600 transition-all duration-500">
                                <ArrowUpRight size={20} strokeWidth={2.5} />
                            </div>
                        </Link>
                    </div>
                </div>

                {/* Project Slider (Infinite Marquee) */}
                <div className="relative mt-12 -mx-4 md:-mx-12 overflow-hidden pt-10 pb-20">
                    <motion.div
                        className="flex space-x-6 px-4 md:px-12 w-fit"
                        animate={isPaused ? { x: undefined } : { x: ["0%", "-50%"] }}
                        transition={{
                            x: {
                                repeat: Infinity,
                                repeatType: "loop",
                                duration: 30,
                                ease: "linear",
                            }
                        }}
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                    >
                        {/* Double the projects for seamless loop */}
                        {[...displayProjects, ...displayProjects].map((project, idx) => (
                            <Link
                                key={`${project.id}-${idx}`}
                                to={`/projects/${project.slug}`}
                                className="w-[300px] sm:w-[350px] md:w-[400px] flex-shrink-0 group relative block no-underline"
                            >
                                <motion.div className="h-full">
                                    {/* Card Image Container */}
                                    <div className="relative rounded-[2rem] overflow-hidden aspect-[5/6] shadow-xl group-hover:shadow-2xl transition-shadow duration-500">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/40 transition-colors duration-500"></div>

                                        {/* Side Indicator dots */}
                                        <div className="absolute left-4 top-1/2 -translate-y-1/2 flex flex-col space-y-2 opacity-60">
                                            <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                                            <div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
                                            <div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
                                        </div>
                                    </div>

                                    {/* Floating White Label */}
                                    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[85%] bg-white p-6 rounded-[2rem] shadow-xl z-20 group-hover:-translate-y-2 transition-transform duration-500">
                                        <h3 className="text-base font-bold text-slate-800 leading-tight mb-4">
                                            {project.title}
                                        </h3>
                                        <div className="flex items-center text-xs font-bold text-teal-500 uppercase tracking-[0.2em] group/btn">
                                            Learn More
                                            <div className="ml-2 w-6 h-6 rounded-full border border-teal-100 flex items-center justify-center group-hover/btn:bg-teal-500 group-hover/btn:text-white transition-all">
                                                <ArrowUpRight size={12} strokeWidth={2} />
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </Link>
                        ))}
                    </motion.div>
                </div>

            </div>
            <div className="-mt-32">
                <CTASection />
            </div>

        </section>
    );
};

export default FeaturedProjects;
