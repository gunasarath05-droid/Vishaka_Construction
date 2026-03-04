import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
    Menu, X, ChevronDown, Image as ImageIcon,
    Video, Newspaper, Clock, CheckCircle2,
    Phone, ArrowRight, Building2, Home, Info, Briefcase, Users, Mail
} from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import images from "../../data/images"

const navLinks = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'About', path: '/about', icon: Info },
    { name: 'Services', path: '/services', icon: Briefcase },
    {
        name: 'Projects',
        path: '/projects',
        icon: Building2,
        dropdownId: 'projects',
        dropdown: [
            { name: 'All Projects', path: '/projects', icon: Building2, desc: 'Explore our full portfolio' },
            { name: 'Ongoing Projects', path: '/projects/ongoing', icon: Clock, desc: 'Projects currently underway' },
            { name: 'Completed Projects', path: '/projects/completed', icon: CheckCircle2, desc: 'Our delivered milestones' },
        ]
    },
    {
        name: 'Media',
        path: '/media',
        icon: ImageIcon,
        dropdownId: 'media',
        dropdown: [
            { name: 'Gallery', path: '/gallery', icon: ImageIcon, desc: 'Photos from our projects' },
            { name: 'Videos', path: '/videos', icon: Video, desc: 'Walkthroughs & timelapse' },
            { name: 'Blog', path: '/blog', icon: Newspaper, desc: 'Insights & updates' },
        ]
    },
    { name: 'Careers', path: '/careers', icon: Users },
    { name: 'Contact', path: '/contact', icon: Mail },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const location = useLocation();
    const dropdownRef = useRef(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsOpen(false);
            setActiveDropdown(null);
        }, 0);
        return () => clearTimeout(timer);
    }, [location.pathname]);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target))
                setActiveDropdown(null);
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const isActive = (path) => {
        if (path === '/') return location.pathname === '/';
        return location.pathname.startsWith(path);
    };

    return (
        <>
            <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled
                ? 'bg-white/90 backdrop-blur-xl border-b border-slate-100 shadow-lg shadow-slate-100/50 py-2'
                : 'bg-transparent py-4'
                }`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16 items-center">

                        {/* Logo */}
                        <Link to="/" className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
                            <img
                                src={images.logo}
                                alt="Vishaka Constructions"
                                className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                            />
                            <div className="flex flex-col leading-none">
                                <span className={`text-base sm:text-lg font-black tracking-tight transition-colors duration-300 ${scrolled ? 'text-secondary-dark' : 'text-white'}`}>
                                    VISHAKA <span className={`font-light ${scrolled ? 'text-primary' : 'text-teal-300'}`}>Constructions</span>
                                </span>
                                <span className={`text-[8px] sm:text-[9px] font-bold tracking-widest uppercase transition-colors duration-300 ${scrolled ? 'text-slate-400' : 'text-white/50'}`}>
                                    Build your Home with our House
                                </span>
                            </div>
                        </Link>

                        {/* Desktop Nav */}
                        <div className="hidden md:flex items-center gap-1" ref={dropdownRef}>
                            {navLinks.map((link) => (
                                link.dropdown ? (
                                    <div
                                        key={link.name}
                                        className="relative"
                                        onMouseEnter={() => setActiveDropdown(link.dropdownId)}
                                        onMouseLeave={() => setActiveDropdown(null)}
                                    >
                                        <button className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-bold transition-all ${isActive(link.path)
                                            ? 'text-primary'
                                            : scrolled ? 'text-slate-600 hover:text-primary hover:bg-slate-50' : 'text-white/80 hover:text-white hover:bg-white/10'
                                            }`}>
                                            {link.name}
                                            <ChevronDown size={13} className={`transition-transform duration-300 ${activeDropdown === link.dropdownId ? 'rotate-180 text-primary' : ''}`} />
                                        </button>

                                        <AnimatePresence>
                                            {activeDropdown === link.dropdownId && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                                    exit={{ opacity: 0, y: 8, scale: 0.96 }}
                                                    transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                                                    className="absolute left-0 top-full mt-2 w-72 bg-white rounded-2xl shadow-2xl shadow-slate-200/60 border border-slate-100 overflow-hidden"
                                                >
                                                    <div className="p-2">
                                                        {link.dropdown.map((sub) => (
                                                            <Link
                                                                key={sub.name}
                                                                to={sub.path}
                                                                className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-700 hover:text-primary hover:bg-slate-50 transition-all group"
                                                            >
                                                                <div className="w-9 h-9 rounded-lg bg-primary/8 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all flex-shrink-0">
                                                                    <sub.icon size={16} />
                                                                </div>
                                                                <div>
                                                                    <div className="text-sm font-bold">{sub.name}</div>
                                                                    {sub.desc && <div className="text-[10px] text-slate-400 font-medium mt-0.5">{sub.desc}</div>}
                                                                </div>
                                                            </Link>
                                                        ))}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                ) : (
                                    <Link
                                        key={link.name}
                                        to={link.path}
                                        className={`relative px-3 py-2 rounded-lg text-sm font-bold transition-all ${isActive(link.path)
                                            ? 'text-primary'
                                            : scrolled ? 'text-slate-600 hover:text-primary hover:bg-slate-50' : 'text-white/80 hover:text-white hover:bg-white/10'
                                            }`}
                                    >
                                        {link.name}
                                        {isActive(link.path) && (
                                            <motion.div
                                                layoutId="activeNav"
                                                className="absolute bottom-0.5 left-3 right-3 h-0.5 bg-primary rounded-full"
                                            />
                                        )}
                                    </Link>
                                )
                            ))}

                            <Link
                                to="/contact"
                                className={`ml-2 flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-black transition-all duration-300 hover:scale-105 active:scale-95 ${scrolled
                                    ? 'bg-secondary-dark text-white hover:bg-primary shadow-lg shadow-slate-900/10'
                                    : 'bg-white text-secondary-dark hover:bg-primary hover:text-white shadow-lg shadow-white/10'
                                    }`}
                            >
                                <Phone size={14} />
                                Inquire Now
                            </Link>
                        </div>

                        {/* Mobile Hamburger */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`md:hidden w-10 h-10 rounded-xl flex items-center justify-center transition-all ${isOpen || scrolled
                                ? 'bg-slate-100 text-secondary-dark'
                                : 'bg-white/10 text-white hover:bg-white/20'
                                }`}
                            aria-label="Toggle menu"
                        >
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={isOpen ? 'close' : 'open'}
                                    initial={{ opacity: 0, rotate: -90 }}
                                    animate={{ opacity: 1, rotate: 0 }}
                                    exit={{ opacity: 0, rotate: 90 }}
                                    transition={{ duration: 0.15 }}
                                >
                                    {isOpen ? <X size={22} /> : <Menu size={22} />}
                                </motion.div>
                            </AnimatePresence>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Drawer Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden"
                        />

                        {/* Slide-in Drawer */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
                            className="fixed top-0 right-0 h-full w-[85%] max-w-sm z-50 bg-white shadow-2xl md:hidden flex flex-col overflow-y-auto"
                        >
                            {/* Drawer Header */}
                            <div className="flex items-center justify-between p-6 border-b border-slate-100">
                                <div className="flex items-center gap-3">
                                    <img src={images.logo} alt="Vishaka Constructions" className="w-9 h-9 object-contain" />
                                    <span className="text-lg font-black text-primary tracking-tight leading-none uppercase">VISHAKA construction</span>
                                </div>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-slate-200 transition-colors"
                                >
                                    <X size={18} />
                                </button>
                            </div>

                            {/* Links */}
                            <div className="flex-1 px-4 py-6 space-y-1">
                                {navLinks.map((link, i) => (
                                    <motion.div
                                        key={link.name}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                                    >
                                        {link.dropdown ? (
                                            <div className="mb-4">
                                                <p className="text-[9px] font-black text-slate-400 uppercase tracking-[0.25em] px-3 mb-2">
                                                    {link.name}
                                                </p>
                                                {link.dropdown.map((sub) => (
                                                    <Link
                                                        key={sub.name}
                                                        to={sub.path}
                                                        onClick={() => setIsOpen(false)}
                                                        className={`flex items-center gap-3 px-3 py-3 rounded-xl transition-all group ${isActive(sub.path)
                                                            ? 'bg-primary/5 text-primary'
                                                            : 'text-slate-700 hover:bg-slate-50 hover:text-primary'
                                                            }`}
                                                    >
                                                        <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-all ${isActive(sub.path)
                                                            ? 'bg-primary text-white'
                                                            : 'bg-slate-100 text-slate-500 group-hover:bg-primary/10 group-hover:text-primary'
                                                            }`}>
                                                            <sub.icon size={16} />
                                                        </div>
                                                        <div>
                                                            <div className="text-sm font-bold">{sub.name}</div>
                                                            {sub.desc && <div className="text-[10px] text-slate-400">{sub.desc}</div>}
                                                        </div>
                                                        {isActive(sub.path) && <div className="ml-auto w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />}
                                                    </Link>
                                                ))}
                                            </div>
                                        ) : (
                                            <Link
                                                to={link.path}
                                                onClick={() => setIsOpen(false)}
                                                className={`flex items-center gap-3 px-3 py-3 rounded-xl transition-all group ${isActive(link.path)
                                                    ? 'bg-primary/5 text-primary'
                                                    : 'text-slate-700 hover:bg-slate-50 hover:text-primary'
                                                    }`}
                                            >
                                                <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-all ${isActive(link.path)
                                                    ? 'bg-primary text-white'
                                                    : 'bg-slate-100 text-slate-500 group-hover:bg-primary/10 group-hover:text-primary'
                                                    }`}>
                                                    <link.icon size={16} />
                                                </div>
                                                <span className="text-sm font-bold">{link.name}</span>
                                                {isActive(link.path) && <div className="ml-auto w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />}
                                            </Link>
                                        )}
                                    </motion.div>
                                ))}
                            </div>

                            {/* Mobile Inquire Button */}
                            <div className="p-6 border-t border-slate-100">
                                <Link
                                    to="/contact"
                                    onClick={() => setIsOpen(false)}
                                    className="flex items-center justify-center gap-3 w-full py-4 bg-primary text-white rounded-2xl font-black uppercase tracking-widest shadow-lg shadow-primary/20 active:scale-95 transition-transform"
                                >
                                    <Phone size={18} />
                                    Inquire Now
                                </Link>
                            </div>


                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
