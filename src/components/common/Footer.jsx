import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-white pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                <div>
                    <div className="flex items-center space-x-2 mb-6">
                        <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl">
                            V
                        </div>
                        <Link to="/" className="text-xl font-bold tracking-tight hover:text-primary transition-colors">
                            VISHAKA <span className="font-light text-primary">CONSTRUCTIONS</span>
                        </Link>
                    </div>
                    <p className="text-slate-400 leading-relaxed mb-8">
                        Building excellence through innovation and integrity. We transform visions into reality with precision engineering and sustainable practices.
                    </p>
                    <div className="flex space-x-4">
                        {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                            <a key={i} href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors">
                                <Icon size={18} />
                            </a>
                        ))}
                    </div>
                </div>

                <div>
                    <h4 className="text-lg font-bold mb-6 border-l-4 border-primary pl-3">Quick Links</h4>
                    <ul className="space-y-4 text-slate-400">
                        {[
                            { name: 'Home', path: '/' },
                            { name: 'About Us', path: '/about' },
                            { name: 'Our Services', path: '/services' },
                            { name: 'Recent Projects', path: '/projects' },
                            { name: 'Media', path: '/media' },
                            { name: 'Careers', path: '/careers' },
                            { name: 'Contact', path: '/contact' }
                        ].map((link) => (
                            <li key={link.name}>
                                <Link to={link.path} className="hover:text-primary transition-colors">{link.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h4 className="text-lg font-bold mb-6 border-l-4 border-primary pl-3">Services</h4>
                    <ul className="space-y-4 text-slate-400">
                        {[
                            'Residential Construction',
                            'Commercial Projects',
                            'Interior Design',
                            'Sustainable Building',
                            'Project Management'
                        ].map((service) => (
                            <li key={service}><Link to="/services" className="hover:text-primary transition-colors">{service}</Link></li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h4 className="text-lg font-bold mb-6 border-l-4 border-primary pl-3">Contact Info</h4>
                    <ul className="space-y-4">
                        <li className="flex items-start space-x-3 text-slate-400">
                            <MapPin className="text-primary flex-shrink-0" size={20} />
                            <span>123 Construction Ave, Suite 500, City Skyline, ST 12345</span>
                        </li>
                        <li className="flex items-center space-x-3 text-slate-400">
                            <Phone className="text-primary flex-shrink-0" size={20} />
                            <span>+91 97911 31317</span>
                        </li>
                        <li className="flex items-center space-x-3 text-slate-400">
                            <Mail className="text-primary flex-shrink-0" size={20} />
                            <span>info@vishakaconstructions.com</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
                <p>&copy; {new Date().getFullYear()} Vishaka Constructions. All rights reserved. | <Link to="/privacy" className="hover:text-white">Privacy Policy</Link></p>
            </div>
        </footer>
    );
};

export default Footer;
