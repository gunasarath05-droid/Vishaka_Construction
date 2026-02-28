import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, ArrowRight, Building2, HardHat } from 'lucide-react';

const NotFound = () => {
    // Floating particles
    const particles = Array.from({ length: 18 }, (_, i) => ({
        id: i,
        size: Math.random() * 6 + 3,
        x: Math.random() * 100,
        delay: Math.random() * 4,
        duration: Math.random() * 6 + 8,
    }));

    return (
        <div className="relative min-h-screen bg-secondary-dark overflow-hidden flex flex-col items-center justify-center px-4">

            {/* Background grid dots */}
            <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                    backgroundImage: `radial-gradient(circle, #fff 1px, transparent 1px)`,
                    backgroundSize: '40px 40px',
                }}
            />

            {/* Radial glow */}
            <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] animate-pulse pointer-events-none" />
            <div className="absolute bottom-[-15%] left-[-5%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[140px] pointer-events-none" />

            {/* Floating particles */}
            {particles.map((p) => (
                <motion.div
                    key={p.id}
                    className="absolute rounded-full bg-primary/30"
                    style={{
                        width: p.size,
                        height: p.size,
                        left: `${p.x}%`,
                        bottom: '-10px',
                    }}
                    animate={{
                        y: [0, -window.innerHeight * 1.2],
                        opacity: [0, 0.6, 0],
                    }}
                    transition={{
                        duration: p.duration,
                        delay: p.delay,
                        repeat: Infinity,
                        ease: 'linear',
                    }}
                />
            ))}

            {/* Main Content */}
            <div className="relative z-10 text-center max-w-3xl mx-auto">

                {/* Animated 404 */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="relative mb-6"
                >
                    {/* Large ghost 404 */}
                    <span
                        className="text-[clamp(120px,30vw,280px)] font-black leading-none select-none"
                        style={{
                            background: 'linear-gradient(135deg, rgba(13,148,136,0.15) 0%, rgba(13,148,136,0.05) 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                        }}
                    >
                        404
                    </span>

                    {/* Floating icon over the 404 */}
                    <motion.div
                        animate={{ y: [0, -12, 0] }}
                        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                        className="absolute inset-0 flex items-center justify-center"
                    >
                        <div className="bg-primary/10 border border-primary/20 backdrop-blur-sm rounded-[2rem] px-8 py-5 flex items-center gap-4">
                            <HardHat className="text-primary" size={36} />
                            <div className="text-left">
                                <p className="text-primary text-[10px] font-black uppercase tracking-[0.3em]">Error 404</p>
                                <p className="text-white text-lg font-bold tracking-tight">Page Not Found</p>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Divider line */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="w-24 h-px bg-primary mx-auto mb-10"
                />

                {/* Message */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                >
                    <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
                        This blueprint<br />
                        <span className="text-primary italic font-light">doesn't exist.</span>
                    </h1>
                    <p className="text-slate-400 text-lg leading-relaxed max-w-md mx-auto mb-12 font-light">
                        Looks like this page went under demolition. Let's get you back to solid ground.
                    </p>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                    <Link
                        to="/"
                        className="group flex items-center gap-3 px-10 py-5 bg-primary text-white rounded-2xl text-[10px] font-black uppercase tracking-[0.3em] hover:bg-white hover:text-primary transition-all duration-500 shadow-2xl shadow-primary/30"
                    >
                        <Home size={16} />
                        Back to Home
                    </Link>

                    <Link
                        to="/projects"
                        className="group flex items-center gap-3 px-10 py-5 bg-white/5 border border-white/10 text-white rounded-2xl text-[10px] font-black uppercase tracking-[0.3em] hover:border-primary/50 hover:text-primary transition-all duration-500 backdrop-blur-sm"
                    >
                        <Building2 size={16} />
                        View Projects
                        <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                    </Link>
                </motion.div>

                {/* Quick links */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.9 }}
                    className="mt-16 flex flex-wrap justify-center gap-6"
                >
                    {[
                        { label: 'Services', to: '/services' },
                        { label: 'About Us', to: '/about' },
                        { label: 'Contact', to: '/contact' },
                        { label: 'Blog', to: '/blog' },
                    ].map((link) => (
                        <Link
                            key={link.label}
                            to={link.to}
                            className="text-[10px] font-black text-slate-500 uppercase tracking-widest hover:text-primary transition-colors"
                        >
                            {link.label}
                        </Link>
                    ))}
                </motion.div>
            </div>

        </div>
    );
};

export default NotFound;
