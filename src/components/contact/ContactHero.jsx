import React from 'react';
import { motion } from 'framer-motion';

const ContactHero = () => {
    return (
        <section className="relative pt-32 pb-24 bg-secondary-dark overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] animate-pulse"></div>
                <div className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `radial-gradient(circle, #fff 1px, transparent 1px)`,
                        backgroundSize: '40px 40px'
                    }}>
                </div>
            </div>

            <div className="container mx-auto px-4 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em] mb-6">Connect With Us</h2>
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
                        Let's Build Your <br /> <span className="text-primary italic">Vision Together</span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-lg text-slate-400 font-light leading-relaxed">
                        Whether you have a specific project in mind or just want to explore possibilities,
                        our team of experts is ready to assist you at every step.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default ContactHero;
