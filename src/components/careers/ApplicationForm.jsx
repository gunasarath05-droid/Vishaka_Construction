import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Upload, Send, CheckCircle2, Briefcase, ChevronDown, User, Mail, Phone } from 'lucide-react';
import CustomSelect from '../common/CustomSelect';

const ApplicationForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [position, setPosition] = useState('Structural Engineer');
  const [fileName, setFileName] = useState('');
  const [dragging, setDragging] = useState(false);

  const handleFile = (file) => { if (file) setFileName(file.name); };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const positions = [
    'Structural Engineer',
    'Site Supervisor',
    'Architectural Drafter',
    'Project Coordinator',
    'Other / General Application'
  ];

  if (submitted) {
    return (
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center p-16 rounded-[4rem] bg-slate-50 border border-slate-100">
            <div className="w-20 h-20 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle2 size={40} />
            </div>
            <h3 className="text-3xl font-bold text-secondary-dark mb-4">Application Received!</h3>
            <p className="text-slate-500 text-lg leading-relaxed mb-10">
              Thank you for your interest in Vishaka. Our talent acquisition team will review your
              profile and reach out to you if your skills match our requirements.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="bg-primary text-white px-10 py-4 rounded-2xl font-black uppercase tracking-widest shadow-xl shadow-primary/20 hover:bg-primary-dark transition-all"
            >
              Apply for another role
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-[10px] md:text-sm font-black text-primary uppercase tracking-[0.4em] mb-4 md:mb-6">Join the Team</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-secondary-dark mb-4 md:mb-8 tracking-tight">Quick Application</h3>
            <p className="text-sm md:text-base text-slate-500 font-medium px-4">
              Ready to take the next step? Fill out the details below and attach your resume.
            </p>
          </div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white rounded-[2rem] md:rounded-[3rem] p-6 sm:p-8 md:p-12 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-slate-100 flex flex-col gap-5 md:gap-7"
          >
            <div className="mb-1 md:mb-2">
              <p className="text-[9px] md:text-[10px] font-black text-primary uppercase tracking-[0.4em] mb-1.5">Quick Application</p>
              <h4 className="text-xl md:text-2xl font-bold text-secondary-dark tracking-tight">Tell us about yourself</h4>
            </div>

            {/* Row 1: Name + Email */}
            <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
              {[
                { label: 'Full Name', icon: User, type: 'text', placeholder: 'John Doe' },
                { label: 'Email Address', icon: Mail, type: 'email', placeholder: 'you@email.com' },
              ].map(({ label, icon: Icon, type, placeholder }) => (
                <div key={label} className="group flex flex-col gap-1.5">
                  <label className="text-[9px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">{label}</label>
                  <div className="relative">
                    <Icon className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-primary transition-colors" size={16} />
                    <input
                      type={type}
                      placeholder={placeholder}
                      required
                      className="w-full pl-11 pr-4 py-3.5 bg-slate-50 rounded-xl border border-transparent focus:border-primary/30 focus:bg-white focus:ring-4 focus:ring-primary/5 text-secondary-dark font-semibold text-sm placeholder:text-slate-300 focus:outline-none transition-all"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Row 2: Phone + Position */}
            <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
              <div className="group flex flex-col gap-1.5">
                <label className="text-[9px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">Phone Number</label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-primary transition-colors" size={16} />
                  <input
                    type="tel"
                    placeholder="+91 00000 00000"
                    required
                    className="w-full pl-11 pr-4 py-3.5 bg-slate-50 rounded-xl border border-transparent focus:border-primary/30 focus:bg-white focus:ring-4 focus:ring-primary/5 text-secondary-dark font-semibold text-sm placeholder:text-slate-300 focus:outline-none transition-all"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[9px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">Position of Interest</label>
                <CustomSelect
                  options={positions}
                  value={position}
                  onChange={setPosition}
                  icon={Briefcase}
                  className="bg-slate-50 rounded-xl border-transparent focus-within:border-primary/30 focus-within:bg-white focus-within:ring-4 focus-within:ring-primary/5 transition-all"
                />
              </div>
            </div>

            {/* Row 3: Resume Upload */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[9px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">Resume / CV</label>
              <label
                className={`flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5 w-full py-6 sm:h-28 border-2 border-dashed rounded-2xl cursor-pointer transition-all ${dragging ? 'border-primary bg-primary/5' : 'border-slate-200 bg-slate-50 hover:border-primary/40 focus-within:border-primary/30'}`}
                onDragOver={e => { e.preventDefault(); setDragging(true); }}
                onDragLeave={() => setDragging(false)}
                onDrop={e => { e.preventDefault(); setDragging(false); handleFile(e.dataTransfer.files[0]); }}
              >
                {fileName ? (
                  <>
                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <FileText size={18} className="text-primary" />
                    </div>
                    <div className="text-center sm:text-left">
                      <p className="text-sm font-bold text-secondary-dark truncate max-w-[180px] sm:max-w-[200px]">{fileName}</p>
                      <p className="text-[9px] text-primary font-black uppercase tracking-widest">Attached ✓</p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all ${dragging ? 'bg-primary text-white' : 'bg-slate-200/50 text-slate-400'}`}>
                      <Upload size={18} />
                    </div>
                    <div className="text-center sm:text-left">
                      <p className="text-sm font-semibold text-slate-600">Drop or <span className="text-primary font-bold">browse</span> your resume</p>
                      <p className="text-[9px] text-slate-400 font-black uppercase tracking-widest mt-0.5">PDF, DOC — Max 5MB</p>
                    </div>
                  </>
                )}
                <input type="file" accept=".pdf,.doc,.docx" className="hidden" onChange={e => handleFile(e.target.files[0])} />
              </label>
            </div>

            {/* Submit */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 bg-secondary-dark text-white rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-primary transition-all duration-300 shadow-xl shadow-secondary-dark/10 mt-2"
            >
              Submit Application <Send size={16} />
            </motion.button>

            <p className="text-center text-[8px] md:text-[9px] text-slate-400 font-black uppercase tracking-widest px-4">
              Strictly confidential · We won't spam you
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ApplicationForm;
