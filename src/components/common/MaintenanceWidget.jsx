import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Wrench, X, Send, CheckCircle2, Phone, Hammer, Settings, AlertTriangle, User, ChevronDown, Headset } from 'lucide-react';
import CustomSelect from './CustomSelect';

const MaintenanceWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    // Form State
    const [category, setCategory] = useState('General');
    const [urgency, setUrgency] = useState('Normal');

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
            setIsOpen(false);
        }, 3000);
    };

    const categories = ['General', 'Structural', 'Electrical', 'Plumbing', 'Mechanical'];
    const urgencies = ['Normal', 'Urgent', 'Emergency'];

    return (
        <div className="fixed bottom-8 right-8 z-[100]">
            {/* Floating Trigger Button */}
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(true)}
                className="w-12 h-12 md:w-16 md:h-16 bg-primary text-white rounded-full shadow-2xl shadow-primary/40 flex items-center justify-center relative group overflow-hidden"
            >
                <div className="absolute inset-0 bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full"></div>
                <Headset className="relative z-10 transition-transform group-hover:rotate-45 w-5 h-5 md:w-7 md:h-7" />
                <div className="absolute top-0 right-0 w-3 h-3 md:w-4 md:h-4 bg-red-500 rounded-full border-2 border-white animate-pulse"></div>
            </motion.button>

            {/* Modal Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[110]"
                        />

                        <motion.div
                            initial={{ opacity: 0, y: 100, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 100, scale: 0.9 }}
                            className="fixed bottom-28 inset-x-4 md:inset-x-auto md:right-8 md:w-[480px] bg-white rounded-[3rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)] border border-slate-100 z-[120] overflow-hidden"
                        >
                            <div className="p-8 md:p-10">
                                <div className="flex justify-between items-center mb-10">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                                            < Hammer size={24} />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-secondary-dark">Assistance Request</h3>
                                            <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Immediate Maintenance Support</p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => setIsOpen(false)}
                                        className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-slate-100 transition-all"
                                    >
                                        <X size={20} />
                                    </button>
                                </div>

                                {submitted ? (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="py-12 text-center"
                                    >
                                        <div className="w-20 h-20 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto mb-8">
                                            <CheckCircle2 size={40} />
                                        </div>
                                        <h4 className="text-2xl font-bold text-secondary-dark mb-4">Request Sent!</h4>
                                        <p className="text-slate-500 font-medium leading-relaxed">
                                            Our maintenance crew has been notified. We'll be in touch within the hour.
                                        </p>
                                    </motion.div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Full Name</label>
                                                <div className="relative">
                                                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                                                    <input
                                                        required
                                                        type="text"
                                                        placeholder="John Doe"
                                                        className="w-full pl-12 pr-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium text-secondary-dark placeholder:text-slate-300"
                                                    />
                                                </div>
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Mobile Number</label>
                                                <div className="relative">
                                                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                                                    <input
                                                        required
                                                        type="tel"
                                                        placeholder="+91 00000 00000"
                                                        className="w-full pl-12 pr-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium text-secondary-dark placeholder:text-slate-300"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Category</label>
                                                <CustomSelect
                                                    options={categories}
                                                    value={category}
                                                    onChange={setCategory}
                                                    icon={Settings}
                                                    className="bg-slate-50 rounded-2xl"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Urgency</label>
                                                <CustomSelect
                                                    options={urgencies}
                                                    value={urgency}
                                                    onChange={setUrgency}
                                                    icon={AlertTriangle}
                                                    className="bg-slate-50 rounded-2xl"
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Description</label>
                                            <textarea
                                                required
                                                className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium min-h-[100px] text-secondary-dark"
                                                placeholder="Briefly describe the issue..."
                                            ></textarea>
                                        </div>

                                        <button className="w-full py-5 bg-primary hover:bg-primary-dark text-white rounded-2xl font-black uppercase tracking-widest flex items-center justify-center gap-3 shadow-xl transition-all group/btn active:scale-95">
                                            Dispatch Request <Send size={20} className="transition-transform group-hover/btn:translate-x-1" />
                                        </button>

                                        <div className="pt-6 border-t border-slate-100 flex items-center justify-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
                                            <Phone size={14} className="text-primary" /> Emergency 24/7: <span className="text-secondary-dark">+91 97911 31317</span>
                                        </div>
                                    </form>
                                )}
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
};

export default MaintenanceWidget;
