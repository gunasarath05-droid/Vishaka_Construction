import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, ShieldCheck } from 'lucide-react';

const ContactDetails = () => {
    const details = [
        {
            icon: MapPin,
            title: "Main Office",
            content1: "123, Architectural Plaza, GST Road,",
            content2: "Chennai, Tamil Nadu - 600001",
            color: "bg-blue-500/10 text-blue-500"
        },
        {
            icon: Phone,
            title: "Quick Contact",
            content1: "+91 98765 43210",
            content2: "enquiry@vishakaengineering.com",
            color: "bg-primary/10 text-primary"
        },
        {
            icon: Clock,
            title: "Business Hours",
            content1: "Mon - Sat: 9:00 AM - 7:00 PM",
            content2: "Sunday: Closed",
            color: "bg-teal-500/10 text-teal-500"
        }
    ];

    return (
        <section className="py-10 sm:py-16 md:py-20 lg:py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 -mt-16 sm:-mt-24 lg:-mt-40 relative z-20">
                    {details.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white p-6 sm:p-8 md:p-10 rounded-[2rem] sm:rounded-[3rem] shadow-2xl shadow-slate-200/60 border border-slate-50 group hover:border-primary/20 transition-all duration-500"
                        >
                            <div className={`w-16 h-16 rounded-2xl ${item.color} flex items-center justify-center mb-8 transform group-hover:scale-110 transition-transform duration-500`}>
                                <item.icon size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-secondary-dark mb-4">{item.title}</h3>
                            <p className="text-slate-500 font-medium leading-relaxed mb-2">{item.content1}</p>
                            <p className="text-slate-500 font-medium leading-relaxed">{item.content2}</p>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-10 sm:mt-16 md:mt-24 text-center">
                    <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-slate-50 border border-slate-100 text-slate-500 text-sm font-bold uppercase tracking-widest">
                        <ShieldCheck className="text-primary" size={18} />
                        Authorized & Licensed Contractor
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactDetails;
