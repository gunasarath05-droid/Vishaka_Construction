import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const CustomDropdown = ({ options, value, onChange, placeholder = "Select an option" }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const selectedOption = options.find(opt => opt.value === value);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSelect = (option) => {
        onChange(option.value);
        setIsOpen(false);
    };

    return (
        <div className="relative w-full" ref={dropdownRef}>
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className={`w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-left text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all font-medium flex items-center justify-between group ${isOpen ? 'ring-2 ring-white/30' : ''}`}
            >
                <span className={!selectedOption ? 'text-white/50' : 'text-white'}>
                    {selectedOption ? selectedOption.label : placeholder}
                </span>
                <ChevronDown
                    className={`w-5 h-5 text-white/50 transition-transform duration-300 group-hover:text-white ${isOpen ? 'rotate-180' : ''}`}
                />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 5, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute z-50 w-full bg-[#0f172a]/90 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl overflow-hidden mt-1"
                    >
                        <div className="max-h-60 overflow-y-auto custom-scrollbar">
                            {options.map((option) => (
                                <button
                                    key={option.value}
                                    type="button"
                                    onClick={() => handleSelect(option)}
                                    className={`w-full px-4 py-3 text-left transition-all hover:bg-white/10 flex items-center space-x-3 ${value === option.value ? 'bg-white/15 text-white font-bold' : 'text-white/70 hover:text-white'
                                        }`}
                                >
                                    <span>{option.label}</span>
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default CustomDropdown;
