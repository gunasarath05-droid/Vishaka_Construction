import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Wrench, X, Send, CheckCircle2, Phone, Hammer, Settings, AlertTriangle, User, ChevronDown, Headset, Home, Hash, MapPin, Clock, Calendar } from 'lucide-react';
import CustomSelect from './CustomSelect';

const MaintenanceWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    // Form State
    const [step, setStep] = useState(1);
    const [category, setCategory] = useState('General');
    const [urgency, setUrgency] = useState('Normal');

    const nextStep = () => setStep(prev => Math.min(prev + 1, 3));
    const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
            setIsOpen(false);
            setStep(1); // Reset for next time
        }, 3000);
    };

    const categories = ['General', 'Structural', 'Electrical', 'Plumbing', 'Mechanical'];
    const urgencies = ['Normal', 'Urgent', 'Emergency'];

    // Animation variants for step transitions
    const stepVariants = {
        hidden: { opacity: 0, x: 20 },
        visible: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -20 }
    };

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
                            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:top-auto md:left-auto md:bottom-28 md:right-8 md:translate-x-0 md:translate-y-0 w-[calc(100%-2rem)] md:w-[500px] bg-white rounded-[3rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)] border border-slate-100 z-[120] overflow-hidden flex flex-col"
                        >
                            <div className="p-8 md:p-10">
                                <div className="flex justify-between items-center mb-6">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shadow-inner">
                                            <Hammer size={24} />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-secondary-dark tracking-tight">Assistance Request</h3>
                                            <p className="text-[11px] font-black text-primary uppercase tracking-[0.2em]">Step {step} of 3</p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => setIsOpen(false)}
                                        className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-slate-100 hover:text-secondary-dark transition-all"
                                    >
                                        <X size={20} />
                                    </button>
                                </div>

                                {/* Progress Indicator */}
                                {!submitted && (
                                    <div className="flex gap-2 mb-8">
                                        {[1, 2, 3].map((s) => (
                                            <div
                                                key={s}
                                                className={`h-1.5 flex-1 rounded-full transition-all duration-500 ${s <= step ? 'bg-primary' : 'bg-slate-100'}`}
                                            ></div>
                                        ))}
                                    </div>
                                )}

                                {submitted ? (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="py-16 text-center"
                                    >
                                        <div className="w-24 h-24 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl shadow-green-500/5">
                                            <CheckCircle2 size={48} />
                                        </div>
                                        <h4 className="text-2xl font-bold text-secondary-dark mb-4">Ticket Raised!</h4>
                                        <p className="text-slate-500 font-medium leading-relaxed max-w-[280px] mx-auto">
                                            Your ticket has been raised successfully. We commit to a <span className="text-primary font-bold">24-hour response</span>.
                                        </p>
                                    </motion.div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="min-h-[400px] flex flex-col">
                                        <div className="flex-1">
                                            <AnimatePresence mode="wait">
                                                {step === 1 && (
                                                    <motion.div
                                                        key="step1"
                                                        variants={stepVariants}
                                                        initial="hidden"
                                                        animate="visible"
                                                        exit="exit"
                                                        className="space-y-6"
                                                    >
                                                        <div className="flex items-center gap-2 mb-4">
                                                            <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                                                            <h4 className="text-[12px] font-black uppercase tracking-widest text-slate-400">Personal Details</h4>
                                                        </div>
                                                        <div className="space-y-4">
                                                            <div className="space-y-2">
                                                                <label className="text-[10px] font-bold text-slate-500 ml-1">Full Name</label>
                                                                <div className="relative group">
                                                                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-primary transition-colors" size={18} />
                                                                    <input
                                                                        required
                                                                        type="text"
                                                                        placeholder="John Doe"
                                                                        className="w-full pl-12 pr-6 py-4 rounded-2xl bg-slate-50/50 border border-slate-100 focus:bg-white focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary/30 transition-all font-medium text-secondary-dark placeholder:text-slate-300"
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="space-y-2">
                                                                <label className="text-[10px] font-bold text-slate-500 ml-1">Mobile Number</label>
                                                                <div className="relative group">
                                                                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-primary transition-colors" size={18} />
                                                                    <input
                                                                        required
                                                                        type="tel"
                                                                        placeholder="+91 00000 00000"
                                                                        className="w-full pl-12 pr-6 py-4 rounded-2xl bg-slate-50/50 border border-slate-100 focus:bg-white focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary/30 transition-all font-medium text-secondary-dark placeholder:text-slate-300"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </motion.div>
                                                )}

                                                {step === 2 && (
                                                    <motion.div
                                                        key="step2"
                                                        variants={stepVariants}
                                                        initial="hidden"
                                                        animate="visible"
                                                        exit="exit"
                                                        className="space-y-6"
                                                    >
                                                        <div className="flex items-center gap-2 mb-4">
                                                            <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                                                            <h4 className="text-[12px] font-black uppercase tracking-widest text-slate-400">Property Details</h4>
                                                        </div>
                                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                            <div className="space-y-2">
                                                                <label className="text-[10px] font-bold text-slate-500 ml-1">Flat Name</label>
                                                                <div className="relative group">
                                                                    <Home className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-primary transition-colors" size={18} />
                                                                    <input
                                                                        required
                                                                        type="text"
                                                                        placeholder="Emerald Estate"
                                                                        className="w-full pl-12 pr-6 py-4 rounded-2xl bg-slate-50/50 border border-slate-100 focus:bg-white focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary/30 transition-all font-medium text-secondary-dark placeholder:text-slate-300"
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="space-y-2">
                                                                <label className="text-[10px] font-bold text-slate-500 ml-1">Door Number</label>
                                                                <div className="relative group">
                                                                    <Hash className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-primary transition-colors" size={18} />
                                                                    <input
                                                                        required
                                                                        type="text"
                                                                        placeholder="A-101"
                                                                        className="w-full pl-12 pr-6 py-4 rounded-2xl bg-slate-50/50 border border-slate-100 focus:bg-white focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary/30 transition-all font-medium text-secondary-dark placeholder:text-slate-300"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="space-y-2">
                                                            <label className="text-[10px] font-bold text-slate-500 ml-1">Location / Landmarks</label>
                                                            <div className="relative group">
                                                                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-primary transition-colors" size={18} />
                                                                <input
                                                                    required
                                                                    type="text"
                                                                    placeholder="Block B, 2nd Floor"
                                                                    className="w-full pl-12 pr-6 py-4 rounded-2xl bg-slate-50/50 border border-slate-100 focus:bg-white focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary/30 transition-all font-medium text-secondary-dark placeholder:text-slate-300"
                                                                />
                                                            </div>
                                                        </div>
                                                    </motion.div>
                                                )}

                                                {step === 3 && (
                                                    <motion.div
                                                        key="step3"
                                                        variants={stepVariants}
                                                        initial="hidden"
                                                        animate="visible"
                                                        exit="exit"
                                                        className="space-y-6"
                                                    >
                                                        <div className="flex items-center gap-2 mb-4">
                                                            <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                                                            <h4 className="text-[12px] font-black uppercase tracking-widest text-slate-400">Issue Details</h4>
                                                        </div>
                                                        <div className="grid grid-cols-2 gap-4">
                                                            <div className="space-y-2">
                                                                <label className="text-[10px] font-bold text-slate-500 ml-1">Category</label>
                                                                <CustomSelect
                                                                    options={categories}
                                                                    value={category}
                                                                    onChange={setCategory}
                                                                    icon={Settings}
                                                                    className="bg-slate-50/50 rounded-2xl border-slate-100"
                                                                />
                                                            </div>
                                                            <div className="space-y-2">
                                                                <label className="text-[10px] font-bold text-slate-500 ml-1">Urgency</label>
                                                                <CustomSelect
                                                                    options={urgencies}
                                                                    value={urgency}
                                                                    onChange={setUrgency}
                                                                    icon={AlertTriangle}
                                                                    className="bg-slate-50/50 rounded-2xl border-slate-100"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="space-y-2">
                                                            <label className="text-[10px] font-bold text-slate-500 ml-1">Problem Description</label>
                                                            <textarea
                                                                required
                                                                className="w-full px-6 py-4 rounded-3xl bg-slate-50/50 border border-slate-100 focus:bg-white focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary/30 transition-all font-medium min-h-[100px] text-secondary-dark placeholder:text-slate-300 resize-none"
                                                                placeholder="Tell us more about the issue..."
                                                            ></textarea>
                                                        </div>

                                                        {/* Commitment Badges */}
                                                        <div className="grid grid-cols-2 gap-3">
                                                            <div className="flex items-center gap-2 p-3 rounded-2xl bg-teal-50/50 border border-teal-100/30">
                                                                <Clock size={14} className="text-teal-500" />
                                                                <span className="text-[10px] font-bold text-teal-800 leading-tight">24h Response</span>
                                                            </div>
                                                            <div className="flex items-center gap-2 p-3 rounded-2xl bg-teal-50/50 border border-teal-100/30">
                                                                <Calendar size={14} className="text-teal-500" />
                                                                <span className="text-[10px] font-bold text-teal-800 leading-tight">7d Resolution</span>
                                                            </div>
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>

                                        {/* Navigation Buttons */}
                                        <div className="pt-8 flex flex-col gap-4">
                                            <div className="flex gap-4">
                                                {step > 1 && (
                                                    <button
                                                        type="button"
                                                        onClick={prevStep}
                                                        className="flex-1 py-4 bg-slate-50 hover:bg-slate-100 text-secondary-dark rounded-2xl font-bold uppercase tracking-widest transition-all active:scale-95"
                                                    >
                                                        Back
                                                    </button>
                                                )}
                                                {step < 3 ? (
                                                    <button
                                                        type="button"
                                                        onClick={nextStep}
                                                        className="flex-[2] py-4 bg-primary hover:bg-primary-dark text-white rounded-2xl font-black uppercase tracking-widest shadow-lg shadow-primary/20 transition-all active:scale-95"
                                                    >
                                                        Continue
                                                    </button>
                                                ) : (
                                                    <button
                                                        type="submit"
                                                        className="flex-[2] py-4 bg-primary hover:bg-primary-dark text-white rounded-2xl font-black uppercase tracking-widest shadow-lg shadow-primary/20 transition-all active:scale-95 flex items-center justify-center gap-2"
                                                    >
                                                        Raise Ticket <Send size={18} />
                                                    </button>
                                                )}
                                            </div>

                                            <div className="flex items-center justify-center gap-3 pt-2">
                                                <div className="w-10 h-[1px] bg-slate-100"></div>
                                                <div className="flex items-center gap-2 text-[9px] font-black text-slate-400 uppercase tracking-[0.2em]">
                                                    <Phone size={10} className="text-primary" /> Emergency: <span className="text-secondary-dark">+91 97911 31317</span>
                                                </div>
                                                <div className="w-10 h-[1px] bg-slate-100"></div>
                                            </div>
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
