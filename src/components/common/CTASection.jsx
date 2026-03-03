import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Send } from 'lucide-react';

const CTASection = () => {
    return (
        <section className="relative min-h-[700px] flex items-center overflow-hidden ">

            {/* Background: Foggy City Skyline (from reference image) */}
            <div className="absolute inset-0 z-0 ">
                <img
                    src="https://i.pinimg.com/1200x/ec/dd/5e/ecdd5ecb79fc5932145a45da2e52727f.jpg"
                    alt="Dramatic Clouds"
                    className="w-full h-full object-cover"
                />
                {/* Heavy Fog/Cloud Overlay */}
                <div className="absolute inset-0 bg-white/20 backdrop-blur-[2px]"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-white/10 to-transparent"></div>
            </div>

            <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-12 relative z-10 w-full py-16 sm:py-24 md:py-32 lg:py-48">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-24 items-center">

                    {/* Left Column: Contact Info (Original Text) */}
                    <div className="lg:col-span-3">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="flex items-center space-x-3 mb-6">
                                <div className="w-10 h-[2px] bg-teal-500"></div>
                                <span className="text-teal-600 font-bold text-xs tracking-[0.3em] uppercase">
                                    READY TO START?
                                </span>
                            </div>

                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 leading-tight mb-8">
                                Ready for your <br /> dream project?
                            </h2>

                            <p className="text-slate-600 text-lg leading-relaxed mb-10 max-w-xs">
                                Consult with our expert engineers and architects today and get a personalized quote for your next big venture.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-center space-x-4">
                                    <div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center text-teal-600">
                                        <Phone size={18} />
                                    </div>
                                    <span className="text-lg font-bold text-slate-700 tracking-tight">+40727. 787. 713</span>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center text-teal-600">
                                        <Mail size={18} />
                                    </div>
                                    <span className="text-lg font-bold text-slate-700 tracking-tight">office@cityconstruct.ro</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: Premium Form (New Layout, Old Labels) */}
                    <div className="lg:col-span-9">
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="bg-white/10 backdrop-blur-md p-1 rounded-[3rem]"
                        >
                            <div className="bg-white/30 backdrop-blur-xl rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-8 md:p-12 border border-white/40 shadow-xl">
                                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                                        <input
                                            type="text"
                                            placeholder="Full Name"
                                            className="w-full bg-white/60 border-transparent focus:border-teal-500 rounded-full px-8 py-4 text-sm font-medium text-slate-700 placeholder-teal-600/50 shadow-sm transition-all outline-none"
                                        />
                                        <input
                                            type="tel"
                                            placeholder="Phone Number"
                                            className="w-full bg-white/60 border-transparent focus:border-teal-500 rounded-full px-8 py-4 text-sm font-medium text-slate-700 placeholder-teal-600/50 shadow-sm transition-all outline-none"
                                        />
                                        <input
                                            type="email"
                                            placeholder="Email Address"
                                            className="w-full bg-white/60 border-transparent focus:border-teal-500 rounded-full px-8 py-4 text-sm font-medium text-slate-700 placeholder-teal-600/50 shadow-sm transition-all outline-none"
                                        />
                                    </div>
                                    <textarea
                                        rows="4"
                                        placeholder="Tell us about your project or schedule an initial consultation with our experts."
                                        className="w-full bg-white/60 border-transparent focus:border-teal-500 rounded-[2rem] px-8 py-6 text-sm font-medium text-slate-700 placeholder-teal-600/50 shadow-sm transition-all outline-none resize-none"
                                    ></textarea>

                                    <div className="flex justify-center">
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="bg-teal-400 text-white hover:text-primary px-16 py-4 rounded-full font-bold hover:bg-teal-50 transition-all shadow-lg flex items-center space-x-2 group"
                                        >
                                            <span className="text-sm uppercase tracking-widest">Send Request</span>
                                            <Send size={16} />
                                        </motion.button>
                                    </div>
                                </form>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default CTASection;
