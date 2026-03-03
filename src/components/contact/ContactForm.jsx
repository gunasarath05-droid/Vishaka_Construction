import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, User, Mail, MessageSquare, Phone, Building2 } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log("Form submitted:", formData);
  };

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10 sm:gap-14 lg:gap-20">
          {/* Form Left Side */}
          <div className="lg:w-1/3">
            <h2 className="text-sm font-bold text-primary uppercase tracking-[0.4em] mb-6">Send a message</h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary-dark mb-6 sm:mb-8 leading-tight">
              Have a specific <br /> enquiry?
            </h3>
            <p className="text-slate-500 text-xl leading-relaxed mb-10 font-light">
              Fill out the form and our representative will reach out to you within 24 business hours.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white shadow-sm border border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <Building2 size={20} />
                </div>
                <span className="text-slate-600 font-bold">Project Estimates</span>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white shadow-sm border border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <Phone size={20} />
                </div>
                <span className="text-slate-600 font-bold">Consultation</span>
              </div>
            </div>
          </div>

          {/* Form Right Side */}
          <div className="lg:w-2/3">
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-white p-6 sm:p-8 md:p-12 lg:p-16 rounded-[2.5rem] sm:rounded-[4rem] shadow-2xl shadow-slate-200/50 space-y-6 sm:space-y-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative">
                  <User className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    onChange={handleChange}
                    className="w-full pl-16 pr-6 py-5 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium"
                    required
                  />
                </div>
                <div className="relative">
                  <Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    onChange={handleChange}
                    className="w-full pl-16 pr-6 py-5 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium"
                    required
                  />
                </div>
                <div className="relative">
                  <Phone className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    onChange={handleChange}
                    className="w-full pl-16 pr-6 py-5 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium"
                    required
                  />
                </div>
                <div className="relative">
                  <MessageSquare className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    onChange={handleChange}
                    className="w-full pl-16 pr-6 py-5 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium"
                    required
                  />
                </div>
              </div>

              <div className="relative">
                <textarea
                  name="message"
                  placeholder="Tell us about your project..."
                  rows="6"
                  onChange={handleChange}
                  className="w-full px-6 py-5 rounded-3xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium resize-none"
                  required
                ></textarea>
              </div>

              <button className="w-full py-6 bg-primary hover:bg-primary-dark text-white rounded-2xl font-black uppercase tracking-widest flex items-center justify-center gap-3 shadow-xl shadow-primary/20 transition-all transform hover:scale-[1.02] active:scale-95">
                Send Message <Send size={20} />
              </button>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
