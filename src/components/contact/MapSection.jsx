import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Phone, Mail, Clock, ExternalLink } from 'lucide-react';
import images from '../../data/images';

const MapSection = () => {
    return (
        <section className="relative h-[700px] w-full bg-slate-200 overflow-hidden group">
            {/* Embedded Google Map */}
            <div className="absolute inset-0 grayscale contrast-[1.1] brightness-[0.9] group-hover:grayscale-0 group-hover:contrast-100 group-hover:brightness-100 transition-all duration-[1.5s] ease-in-out">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5816865780716!2d80.1789046758869!3d12.934585815687113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x336ab3d501bc70d%3A0x40a75b7616ed4938!2sVishaka%20Constructions!5e0!3m2!1sen!2sin!4v1772195795164!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Office Location"
                    className="w-full h-full"
                ></iframe>
            </div>

            {/* Interactive Office Card - Revealed on Hover */}
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center md:justify-start md:pl-20">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    className="pointer-events-auto bg-white/90 backdrop-blur-xl p-2 rounded-[2.5rem] shadow-2xl border border-white max-w-[380px] w-full mx-4 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-700 ease-out flex flex-col overflow-hidden"
                >
                    {/* Office Image Header */}
                    <div className="h-48 w-full rounded-[2rem] overflow-hidden mb-6 relative">
                        <img
                            src={images.project1}
                            alt="Vishaka Constructions Office"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                        <div className="absolute bottom-4 left-6 flex items-center gap-2 text-white">
                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                            <span className="text-[10px] font-black uppercase tracking-widest">Main Headquarters</span>
                        </div>
                    </div>

                    <div className="px-6 pb-10">
                        <div className="flex items-start justify-between mb-6">
                            <div>
                                <h4 className="text-xl font-bold text-secondary-dark tracking-tighter uppercase mb-1">Vishaka Constructions</h4>
                                <div className="flex items-center gap-2 text-primary font-black text-[9px] uppercase tracking-widest">
                                    <MapPin size={12} /> Chennai, Tamil Nadu
                                </div>
                            </div>
                            <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center text-teal-600">
                                <Navigation size={20} />
                            </div>
                        </div>

                        <p className="text-xs text-slate-500 leading-relaxed mb-10 font-medium italic">
                            "Visit our engineering hub for a personalized consultation regarding your next landmark project."
                        </p>

                        <div className="flex gap-4">
                            <a
                                href="https://maps.google.com/maps?daddr=12.9345858,80.1789046"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 bg-secondary-dark text-white text-[10px] font-black uppercase tracking-[0.2em] py-5 rounded-2xl flex items-center justify-center gap-3 hover:bg-teal-500 transition-all duration-500 shadow-xl"
                            >
                                Get Directions <ExternalLink size={14} />
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Corner Decorative Element */}

            <div className="absolute bottom-0 right-0 p-12 hidden lg:block">
                <div className="text-[8rem] font-black text-slate-900/5 leading-none select-none">
                    MAP
                </div>
            </div>
        </section>
    );
};

export default MapSection;
