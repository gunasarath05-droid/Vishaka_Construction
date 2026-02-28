import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Heart, Coffee } from 'lucide-react';

const CompanyCulture = () => {
    const values = [
        {
            icon: ShieldCheck,
            title: "Safety First",
            desc: "Zero-compromise safety standards at every site and office, ensuring our team returns home safely."
        },
        {
            icon: Zap,
            title: "Innovation Hub",
            desc: "We encourage adpoting new technologies and alternative construction methods to solve complex problems."
        },
        {
            icon: Heart,
            title: "Inclusive Growth",
            desc: "A culture that values diversity and provides equal opportunities for professional development."
        },
        {
            icon: Coffee,
            title: "Work-Life Balance",
            desc: "We believe in high-impact work supported by a healthy personal life and team well-being."
        }
    ];

    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    <div className="lg:w-1/2">
                        <h2 className="text-[10px] md:text-sm font-black text-primary uppercase tracking-[0.4em] mb-4 md:mb-6">Our DNA</h2>
                        <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary-dark mb-6 md:mb-8 tracking-tight leading-tight">
                            A Culture of <span className="text-primary italic font-light">Excellence</span> & Integrity
                        </h3>
                        <p className="text-sm md:text-lg text-slate-500 font-medium leading-relaxed mb-10">
                            At Vishaka, we don't just build structures; we build careers. Our work culture is rooted
                            in mutual respect, continuous learning, and a shared passion for engineering perfection.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8">
                            {values.map((v, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="p-6 md:p-8 rounded-[1.5rem] md:rounded-3xl bg-slate-50 border border-slate-100 group hover:border-primary/20 transition-all"
                                >
                                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-4 md:mb-5 group-hover:bg-primary group-hover:text-white transition-all transform group-hover:rotate-12">
                                        <v.icon size={20} className="md:w-6 md:h-6" />
                                    </div>
                                    <h4 className="text-lg md:text-xl font-bold text-secondary-dark mb-2 tracking-tight">{v.title}</h4>
                                    <p className="text-[11px] md:text-sm text-slate-500 leading-relaxed font-semibold">{v.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="lg:w-1/2 relative mt-8 lg:mt-0">
                        <div className="grid grid-cols-2 gap-3 md:gap-4 px-2 sm:px-0">
                            <motion.img
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=600"
                                alt="Site Collaboration"
                                className="rounded-[1.5rem] md:rounded-[2.5rem] w-full h-52 md:h-80 object-cover shadow-2xl"
                            />
                            <motion.img
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.2 }}
                                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600"
                                alt="Office Culture"
                                className="rounded-[1.5rem] md:rounded-[2.5rem] w-full h-44 md:h-64 object-cover mt-12 md:mt-16 shadow-2xl shadow-primary/10"
                            />
                        </div>
                        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-[60px] -z-10"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CompanyCulture;
