import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Send } from 'lucide-react';

const CTASection = () => {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden bg-slate-50" id="contact">

            {/* Background: Foggy City Skyline */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://i.pinimg.com/1200x/ec/dd/5e/ecdd5ecb79fc5932145a45da2e52727f.jpg"
                    alt="Dramatic Clouds"
                    className="w-full h-full object-cover opacity-80"
                />
                {/* Enhanced Fog/Cloud Overlays for Readability */}
                <div className="absolute inset-0 bg-white/40 backdrop-blur-[1px]"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-slate-200/40"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
            </div>

            <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-12 relative z-10 w-full py-20 lg:py-0">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-24 items-center">

                    {/* Left Column: Contact Info */}
                    <div className="lg:col-span-5 xl:col-span-4">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="max-w-xl"
                        >
                            <div className="flex items-center space-x-4 mb-8">
                                <span className="text-teal-600 font-bold text-[10px] sm:text-xs tracking-[0.6em] uppercase">Ready to Start?</span>
                                <div className="w-16 h-[2px] bg-teal-500/20"></div>
                            </div>

                            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-6xl font-black text-slate-900 leading-[1.1] mb-8">
                                Crafting Your <span className="italic font-light">Vision</span> Into <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-teal-500">Reality</span>
                            </h2>

                            <p className="text-slate-500 text-sm sm:text-lg leading-relaxed mb-12 max-w-md font-medium">
                                Consult with our expert engineers and architects today and get a personalized quote for your next big venture.
                            </p>

                            <div className="space-y-8">
                                <div className="flex items-center space-x-5 group cursor-pointer">
                                    <div className="w-12 h-12 rounded-2xl bg-white shadow-lg flex items-center justify-center text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-all duration-300">
                                        <Phone size={20} />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Call Anywhere</span>
                                        <span className="text-lg font-black text-slate-900 tracking-tight">+91 91763 35555</span>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-5 group cursor-pointer">
                                    <div className="w-12 h-12 rounded-2xl bg-white shadow-lg flex items-center justify-center text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-all duration-300">
                                        <Mail size={20} />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Email Us</span>
                                        <span className="text-lg font-black text-slate-900 tracking-tight">vishakaconstruction@gmail.com</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: Premium Form */}
                    <div className="lg:col-span-7 xl:col-span-8">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 30 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="relative"
                        >
                            <div className="bg-white/40 backdrop-blur-2xl rounded-[3rem] p-8 md:p-12 xl:p-16 border border-white/50 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)]">
                                <form className="space-y-6 sm:space-y-8" onSubmit={(e) => e.preventDefault()}>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black text-teal-700 uppercase tracking-widest ml-4">Full Name</label>
                                            <input
                                                type="text"
                                                placeholder="John Doe"
                                                className="w-full bg-white/70 border-white/50 focus:border-teal-500 focus:bg-white rounded-[1.5rem] px-8 py-5 text-sm font-bold text-slate-800 placeholder-slate-300 shadow-sm transition-all outline-none border hover:border-teal-300"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black text-teal-700 uppercase tracking-widest ml-4">Phone Number</label>
                                            <input
                                                type="tel"
                                                placeholder="+91 00000 00000"
                                                className="w-full bg-white/70 border-white/50 focus:border-teal-500 focus:bg-white rounded-[1.5rem] px-8 py-5 text-sm font-bold text-slate-800 placeholder-slate-300 shadow-sm transition-all outline-none border hover:border-teal-300"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black text-teal-700 uppercase tracking-widest ml-4">Email Address</label>
                                        <input
                                            type="email"
                                            placeholder="hello@example.com"
                                            className="w-full bg-white/70 border-white/50 focus:border-teal-500 focus:bg-white rounded-[1.5rem] px-8 py-5 text-sm font-bold text-slate-800 placeholder-slate-300 shadow-sm transition-all outline-none border hover:border-teal-300"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black text-teal-700 uppercase tracking-widest ml-4">Your Vision</label>
                                        <textarea
                                            rows="4"
                                            placeholder="Tell us about your dream project..."
                                            className="w-full bg-white/70 border-white/50 focus:border-teal-500 focus:bg-white rounded-[2rem] px-8 py-6 text-sm font-bold text-slate-800 placeholder-slate-300 shadow-sm transition-all outline-none resize-none border hover:border-teal-300"
                                        ></textarea>
                                    </div>

                                    <div className="pt-4">
                                        <motion.button
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="w-full sm:w-auto bg-slate-900 text-white px-12 py-5 rounded-[2rem] font-black text-sm uppercase tracking-widest shadow-2xl hover:bg-teal-600 transition-all duration-500 flex items-center justify-center group"
                                        >
                                            Send Request
                                            <Send size={18} className="ml-3 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                                        </motion.button>
                                    </div>
                                </form>
                            </div>

                            {/* Decorative element */}
                            <div className="absolute -top-10 -right-10 w-32 h-32 bg-teal-500/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default CTASection;
