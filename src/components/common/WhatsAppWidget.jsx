import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send } from 'lucide-react';

const WhatsAppWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const phoneNumber = "919791131317";
    const message = "Hello! I'm interested in Vishaka's construction services. Can you help me?";

    const handleWhatsAppClick = () => {
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <div className="fixed bottom-24 md:bottom-32 right-8 z-[90]">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 20, originX: 1, originY: 1 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 20 }}
                        className="absolute bottom-16 md:bottom-20 right-0 w-[280px] md:w-[320px] bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] overflow-hidden border border-slate-100"
                    >
                        {/* Header */}
                        <div className="bg-[#25D366] p-4 flex items-center justify-between text-white">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                                    <MessageCircle size={20} />
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold">Vishaka Support</h4>
                                    <p className="text-[10px] opacity-80 uppercase tracking-widest font-bold">Typically replies in minutes</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="w-8 h-8 rounded-full hover:bg-black/10 flex items-center justify-center transition-colors"
                            >
                                <X size={18} />
                            </button>
                        </div>

                        {/* Body */}
                        <div className="p-6 bg-[#E5DDD5] relative min-h-[120px]">
                            {/* Background Pattern (Subtle) */}
                            <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
                                style={{ backgroundImage: 'url("https://w7.pngwing.com/pngs/631/130/png-transparent-whatsapp-pattern-whatsapp-logo-thumbnail.png")', backgroundSize: '200px' }}
                            />

                            <motion.div
                                initial={{ x: -10, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="relative z-10 bg-white p-4 rounded-xl rounded-tl-none shadow-sm max-w-[85%]"
                            >
                                <p className="text-xs text-slate-700 leading-relaxed font-medium">
                                    Hi there! 👋<br />
                                    How can we help you with your construction needs today?
                                </p>
                                <span className="text-[9px] text-slate-400 mt-2 block text-right">10:45 AM</span>
                            </motion.div>
                        </div>

                        {/* Footer / CTA */}
                        <div className="p-4 bg-white border-t border-slate-100">
                            <button
                                onClick={handleWhatsAppClick}
                                className="w-full py-3 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-xl font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all active:scale-95 shadow-lg shadow-[#25D366]/20"
                            >
                                <Send size={16} /> Start Chat
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Trigger Bubble */}
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className={`w-12 h-12 md:w-16 md:h-16 rounded-full shadow-2xl flex items-center justify-center transition-all duration-500 overflow-hidden relative group ${isOpen ? 'bg-slate-900 rotate-90' : 'bg-[#25D366]'}`}
            >
                <div className="absolute inset-0 bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full"></div>
                {isOpen ? (
                    <X className="text-white relative z-10 w-5 h-5 md:w-7 md:h-7" />
                ) : (
                    <MessageCircle className="text-white relative z-10 w-5 h-5 md:w-7 md:h-7" />
                )}
                {!isOpen && (
                    <span className="absolute -top-1 -right-1 w-4 h-4 md:w-5 md:h-5 bg-red-500 border-2 border-white rounded-full animate-bounce"></span>
                )}
            </motion.button>
        </div>
    );
};

export default WhatsAppWidget;
