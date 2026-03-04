import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, MapPin, Calendar, Maximize } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import images from '../../data/images';

const PROJECTS = [
    {
        id: 1,
        title: ["BUILDING", "THE", "FUTURE!"],
        subtitle: "VISHAKA CORE",
        description: "We cover a wide range of activities, from civil and industrial construction to innovative design and superior quality internals.",
        location: "Chennai, TN",
        year: "2024",
        area: "12,500 m²",
        badge: "CITY CONSTRUCT",
        image: images.project1,
        accent: "#0D9488"
    },
    {
        id: 2,
        title: ["ECO-FRIENDLY", "LIVING", "SPACES"],
        subtitle: "GREEN VALLEY",
        description: "Innovative residential projects focused on sustainability and modern comfort, integrating nature with architecture.",
        location: "Bangalore, KA",
        year: "2023",
        area: "45,000 m²",
        badge: "SUSTAINABLE BY DESIGN",
        image: images.project2,
        accent: "#004D4D"
    },
    {
        id: 3,
        title: ["MASTERING", "URBAN", "SKYLINE"],
        subtitle: "HORIZON TOWER",
        description: "Redefining the city landscape with iconic skyscrapers that combine engineering excellence with artistic vision.",
        location: "Hyderabad, TS",
        year: "2025",
        area: "28,000 m²",
        badge: "ARCHITECTURAL ICONS",
        image: images.project5,
        accent: "#D97706"
    }
];

const Hero = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [progress, setProgress] = useState(0);
    const activeProject = PROJECTS[activeIndex];

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    setActiveIndex((current) => (current + 1) % PROJECTS.length);
                    return 0;
                }
                return prev + 0.5;
            });
        }, 50);
        return () => clearInterval(timer);
    }, [activeIndex]);

    // Preload all images for zero-delay transitions
    useEffect(() => {
        PROJECTS.forEach((project) => {
            const img = new Image();
            img.src = project.image;
        });
    }, []);

    const handleNext = (index) => {
        setActiveIndex(index);
        setProgress(0);
    };

    const navigate = useNavigate();

    return (
        <section className="relative h-screen flex items-center pt-32 pb-12 overflow-hidden bg-[#F8FAFC]">
            {/* Navbar Visibility Gradient Overlay */}
            <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-black/40 via-transparent to-transparent z-[5] pointer-events-none" />

            {/* Cinematic Full-Bleed Background Image */}
            <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
                <AnimatePresence>
                    <motion.div
                        key={activeProject.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.2, ease: "easeInOut" }}
                        className="absolute inset-0 w-full h-full"
                    >
                        <motion.div
                            initial={{ scale: 1.05 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 18, ease: "linear" }}
                            className="absolute inset-0"
                        >
                            <img
                                src={activeProject.image}
                                alt={activeProject.subtitle}
                                className="w-full h-full object-cover"
                            />
                        </motion.div>

                        {/* Light Depth Gradients */}
                        <div className="absolute inset-0 bg-gradient-to-r from-[#F8FAFC] via-[#F8FAFC]/30 to-transparent z-10" />
                        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#F8FAFC]/20 to-transparent z-10" />
                    </motion.div>
                </AnimatePresence>

                {/* Floating Technical HUD */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeProject.id}
                        initial={{ opacity: 0, y: 40, x: 20 }}
                        animate={{ opacity: 1, y: 0, x: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute bottom-4 right-4 md:bottom-8 md:right-8 lg:bottom-12 lg:right-16 z-30 hidden md:flex"
                    >
                        <div className="backdrop-blur-2xl bg-white/60 border border-white/80 px-4 py-3 md:px-6 md:py-4 lg:px-8 lg:py-5 rounded-3xl shadow-[0_30px_80px_-10px_rgba(0,0,0,0.1)] flex items-center space-x-4 md:space-x-6 lg:space-x-8">
                            <div className="flex flex-col items-start">
                                <span className="text-[8px] lg:text-[10px] font-black uppercase tracking-[0.25em] text-teal-600 mb-0.5 lg:mb-1">Surface</span>
                                <span className="text-sm lg:text-base font-bold text-slate-900 tabular-nums">{activeProject.area}</span>
                            </div>
                            <div className="w-px h-6 lg:h-8 bg-slate-200" />
                            <div className="flex flex-col items-start">
                                <span className="text-[8px] lg:text-[10px] font-black uppercase tracking-[0.25em] text-teal-600 mb-0.5 lg:mb-1">Location</span>
                                <span className="text-sm lg:text-base font-bold text-slate-900">{activeProject.location}</span>
                            </div>
                            <div className="w-px h-6 lg:h-8 bg-slate-200" />
                            <div className="flex flex-col items-start">
                                <span className="text-[8px] lg:text-[10px] font-black uppercase tracking-[0.25em] text-teal-600 mb-0.5 lg:mb-1">Year</span>
                                <span className="text-sm lg:text-base font-bold text-slate-900 tabular-nums">{activeProject.year}</span>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Ghost Backdrop Text */}
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-end pr-8 opacity-[0.03] select-none pointer-events-none z-10 overflow-hidden mix-blend-overlay">
                <AnimatePresence mode="wait">
                    <motion.span
                        key={activeProject.id}
                        initial={{ opacity: 0, x: 80 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -40 }}
                        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
                        className="text-[20vw] md:text-[18vw] font-black leading-none tracking-tighter uppercase text-slate-900 whitespace-nowrap"
                    >
                        {activeProject.subtitle}
                    </motion.span>
                </AnimatePresence>
            </div>

            {/* Content Column */}
            <div className="max-w-[1600px] mx-auto px-4 sm:px-8 md:px-14 relative z-20 w-full mb-4 md:mb-0">
                <div className="w-full md:max-w-[70%] lg:max-w-[55%] xl:max-w-[50%]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeProject.id}
                            initial={{ opacity: 0, y: 60 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -30 }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        >

                            {/* Editorial Mixed-Weight Headline */}
                            <div className="mb-4 sm:mb-8 space-y-1 sm:space-y-2 lg:space-y-0">
                                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[5rem] font-black text-slate-900 leading-[0.88] tracking-tighter drop-shadow-sm">
                                    {activeProject.title[0]}
                                </h2>
                                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[5rem] font-thin italic text-slate-600 leading-[0.88] tracking-tighter">
                                    {activeProject.title[1]}
                                </h2>
                                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[5rem] font-black text-teal-600 leading-[0.88] tracking-tighter drop-shadow-sm">
                                    {activeProject.title[2]}
                                </h1>
                            </div>

                            <p className="text-slate-700 text-sm sm:text-base md:text-lg leading-relaxed max-w-[500px] mb-6 sm:mb-8 font-medium">
                                {activeProject.description}
                            </p>

                            {/* Premium CTA */}
                            <motion.button
                                onClick={() => navigate('/services')}
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                className="group relative flex items-center overflow-hidden bg-slate-900 text-white rounded-full shadow-2xl"
                            >
                                <div className="absolute inset-0 bg-teal-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700 ease-out" />
                                <span className="relative px-10 py-5 text-sm font-bold uppercase tracking-widest z-10 transition-colors duration-500">
                                    Explore Services
                                </span>
                                <div className="relative w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mr-2 z-10 group-hover:bg-white group-hover:text-teal-600 transition-all duration-500">
                                    <ArrowUpRight size={20} />
                                </div>
                            </motion.button>
                        </motion.div>
                    </AnimatePresence>

                    {/* Blueprint Thumbnail Navigation */}
                    <div className="mt-8 sm:mt-12 lg:mt-14 flex items-end space-x-2 sm:space-x-5">
                        {PROJECTS.map((project, index) => (
                            <button
                                key={project.id}
                                onClick={() => handleNext(index)}
                                className="group relative flex-shrink-0"
                            >
                                {/* Thumbnail Frame */}
                                <div className={`relative overflow-hidden rounded-xl sm:rounded-2xl mb-3 border-2 transition-all duration-700 ${activeIndex === index
                                    ? 'w-16 sm:w-20 md:w-28 lg:w-32 aspect-[4/3] border-teal-500 shadow-xl scale-105'
                                    : 'w-12 sm:w-16 md:w-16 lg:w-20 aspect-[4/3] border-slate-300 opacity-60 grayscale hover:opacity-100 hover:border-slate-400 hover:grayscale-0 hover:scale-105'
                                    }`}>
                                    <img src={project.image} alt={project.subtitle} className="w-full h-full object-cover" />

                                    {/* Active Indicator */}
                                    {activeIndex === index && (
                                        <>
                                            <div className="absolute inset-0 bg-gradient-to-t from-teal-900/40 to-transparent" />
                                            <div className="absolute bottom-0 left-0 w-full h-[3px] bg-black/20">
                                                <motion.div
                                                    className="h-full bg-teal-400"
                                                    initial={{ width: '0%' }}
                                                    animate={{ width: `${progress}%` }}
                                                    transition={{ ease: "linear" }}
                                                />
                                            </div>
                                        </>
                                    )}
                                </div>

                                {/* Project Label */}
                                <div className={`transition-all duration-500 ${activeIndex === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1 group-hover:opacity-100'}`}>
                                    <span className="block text-[9px] font-black uppercase tracking-[0.2em] text-teal-600 mb-0.5">
                                        {String(index + 1).padStart(2, '0')}
                                    </span>
                                    <span className="block text-[10px] sm:text-[11px] font-bold uppercase tracking-tight text-slate-900 max-w-[90px] truncate">
                                        {project.subtitle}
                                    </span>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
