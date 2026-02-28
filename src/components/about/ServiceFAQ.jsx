import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const ServiceFAQ = () => {
    const faqs = [
        {
            question: "How long does a typical residential project take?",
            answer: "A standard residential villa project typically takes 8-12 months from groundbreaking to handover, depending on architectural complexity and site conditions."
        },
        {
            question: "Do you handle all necessary government permits?",
            answer: "Yes, our project management team handles the entire documentation process, including planning approvals, structural certifications, and utility connections."
        },
        {
            question: "Can I customize the architectural plans?",
            answer: "Absolutely. We pride ourselves on bespoke designs. Our architects work closely with you to tailor every square foot to your specific lifestyle and requirements."
        },
        {
            question: "What quality assurance measures do you use?",
            answer: "We use ISO-certified materials and conduct systematic quality checks at every construction milestone, from soil testing to the final lick of paint."
        },
        {
            question: "Do you provide interior design as part of the package?",
            answer: "We offer both standalone construction and comprehensive 'Turnkey' solutions that include interior design, landscaping, and automation."
        }
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-16">
                    {/* Left Side: Header */}
                    <div className="lg:w-1/3">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-8">
                                <HelpCircle size={32} />
                            </div>
                            <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em] mb-4">FAQ</h2>
                            <h3 className="text-4xl font-bold text-secondary-dark mb-6">Common Questions <br />About Our Services</h3>
                            <p className="text-slate-500 text-lg leading-relaxed">
                                Everything you need to know about partnering with Vishaka for your next landmark project.
                            </p>
                        </motion.div>
                    </div>

                    {/* Right Side: Accordion */}
                    <div className="lg:w-2/3">
                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm"
                                >
                                    <button
                                        onClick={() => setActiveIndex(activeIndex === index ? -1 : index)}
                                        className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
                                    >
                                        <span className="text-lg font-bold text-secondary-dark">{faq.question}</span>
                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${activeIndex === index ? 'bg-primary text-white rotate-180' : 'bg-slate-100 text-slate-400'}`}>
                                            {activeIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                                        </div>
                                    </button>

                                    <AnimatePresence>
                                        {activeIndex === index && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <div className="px-8 pb-8 text-slate-500 leading-relaxed border-t border-slate-50 pt-4">
                                                    {faq.answer}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceFAQ;
