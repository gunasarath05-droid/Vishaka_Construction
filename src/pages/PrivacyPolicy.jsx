import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, FileText, ChevronRight } from 'lucide-react';
import CTASection from '../components/common/CTASection';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      title: "Data Collection & Usage",
      icon: Eye,
      content: "We collect information that you provide directly to us, such as when you fill out a contact form or job application. This may include your name, email address, phone number, and professional credentials. We use this data solely to respond to your inquiries and process applications."
    },
    {
      title: "Legal Compliance",
      icon: Lock,
      content: "Vishaka Engineering operates in strict accordance with national and international data protection laws. We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties except where required by law to protect our rights or the safety of others."
    },
    {
      title: "Cookie Policy",
      icon: FileText,
      content: "Our website uses cookies to enhance your browsing experience and analyze site traffic. Cookies are small files stored on your device that help us understand how you interact with our content. You can choose to disable cookies through your browser settings at any time."
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Minimal Hero */}
      <section className="relative pt-32 pb-24 bg-secondary-dark overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `radial-gradient(circle, #fff 1px, transparent 1px)`,
              backgroundSize: '40px 40px'
            }}>
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Shield className="mx-auto text-primary mb-6" size={48} />
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">Privacy <span className="text-primary italic">Policy</span></h1>
            <p className="text-slate-400 font-medium max-w-2xl mx-auto uppercase tracking-widest text-[10px]">
              Last Updated: February 2024 • Vishaka Engineering Transparency Commitment
            </p>
          </motion.div>
        </div>
      </section>

      {/* Document Content */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 gap-16">
              {sections.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="relative pl-12 md:pl-20 border-l border-slate-100"
                >
                  <div className="absolute -left-[1.65rem] top-0 w-12 h-12 rounded-2xl bg-white border border-slate-100 shadow-xl flex items-center justify-center text-primary">
                    <section.icon size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-secondary-dark mb-6 flex items-center gap-4">
                    {section.title}
                  </h2>
                  <div className="text-slate-500 text-lg leading-relaxed font-light space-y-6">
                    <p>{section.content}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-24 p-12 rounded-[3.5rem] bg-slate-50 border border-slate-100 italic text-slate-400 text-center">
              "Transparency and security are the foundations of our digital engagement as much as they are for our physical structures."
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
};

export default PrivacyPolicy;
