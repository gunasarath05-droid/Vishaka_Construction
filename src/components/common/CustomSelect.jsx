import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const CustomSelect = ({
    options,
    value,
    onChange,
    placeholder = "Select option",
    icon: Icon,
    className = ""
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef(null);

    // Close when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (containerRef.current && !containerRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSelect = (option) => {
        onChange(option);
        setIsOpen(false);
    };

    return (
        <div className={`relative ${className}`} ref={containerRef}>
            {/* Trigger Button */}
            <div
                onClick={() => setIsOpen(!isOpen)}
                className={`flex items-center gap-3 px-4 py-4 rounded-2xl bg-white border border-slate-100 cursor-pointer transition-all duration-300 group
                    ${isOpen ? 'ring-2 ring-primary/20 border-primary/30 shadow-lg' : 'hover:border-slate-200 hover:shadow-md'}
                `}
            >
                {Icon && (
                    <div className={`transition-colors duration-300 ${isOpen ? 'text-primary' : 'text-slate-300'}`}>
                        <Icon size={18} />
                    </div>
                )}

                <div className="flex-1 overflow-hidden">
                    <span className={`block truncate text-sm font-medium ${value ? 'text-secondary-dark' : 'text-slate-400'}`}>
                        {value || placeholder}
                    </span>
                </div>

                <div className={`transition-transform duration-300 ${isOpen ? 'rotate-180 text-primary' : 'text-slate-300'}`}>
                    <ChevronDown size={18} />
                </div>
            </div>

            {/* Options Dropdown */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute z-[200] left-0 right-0 mt-2 bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100 overflow-hidden py-2"
                    >
                        {options.map((option, index) => (
                            <motion.div
                                key={option}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.03 }}
                                onClick={() => handleSelect(option)}
                                className={`px-4 py-3 text-sm font-medium cursor-pointer transition-all flex items-center justify-between
                                    ${value === option
                                        ? 'bg-primary/5 text-primary'
                                        : 'text-slate-600 hover:bg-slate-50 hover:text-primary'}
                                `}
                            >
                                <span>{option}</span>
                                {value === option && (
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                )}
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default CustomSelect;
