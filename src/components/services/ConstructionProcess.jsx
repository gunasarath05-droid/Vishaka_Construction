import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, ClipboardCheck, MousePointer2, Hammer } from 'lucide-react';

const ConstructionProcess = () => {
    const steps = [
        {
            title: "01. Consultation",
            desc: "We discuss your vision, requirements, and budget to establish a clear project roadmap.",
            icon: MessageSquare,
            delay: 0.2
        },
        {
            title: "02. Strategy & Design",
            desc: "Our architects create detailed blueprints and 3D models for your final approval.",
            icon: MousePointer2,
            delay: 0.4
        },
        {
            title: "03. Quality Construction",
            desc: "Expert teams execute the build with rigorous adherence to safety and quality standards.",
            icon: Hammer,
            delay: 0.6
        },
        {
            title: "04. Final Handover",
            desc: "A thorough inspection precedes the official handover of your completed masterpiece.",
            icon: ClipboardCheck,
            delay: 0.8
        }
    ];

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em] mb-4">Our Methodology</h2>
                    <h3 className="text-4xl font-bold text-secondary-dark mb-6">How We Build <br />Your Landmarks</h3>
                </div>

                <div className="relative">
                    {/* Connecting Horizontal Line for Desktop */}
                    <div className="absolute top-1/2 left-0 w-full h-[2px] bg-slate-100 -translate-y-1/2 hidden lg:block"></div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: step.delay, duration: 0.6 }}
                                className="text-center group"
                            >
                                <div className="relative inline-flex mb-8">
                                    <div className="w-20 h-20 rounded-full bg-white border-2 border-slate-100 shadow-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 z-10">
                                        <step.icon size={32} />
                                    </div>
                                    {/* Number Badge */}
                                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-secondary-dark text-white text-xs font-bold flex items-center justify-center border-2 border-white z-20">
                                        {index + 1}
                                    </div>
                                </div>
                                <h4 className="text-xl font-bold text-secondary-dark mb-4">{step.title}</h4>
                                <p className="text-slate-500 text-sm leading-relaxed px-4">
                                    {step.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Background Decorative Blob */}
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -z-10"></div>
        </section>
    );
};

export default ConstructionProcess;
