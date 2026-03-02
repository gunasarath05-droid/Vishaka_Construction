import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import {
    ChevronLeft,
    ArrowRight,
    CheckCircle2,
    ShieldCheck,
    Zap,
    HardHat,
    Layout,
    Clock,
    Waves,
    Building2 as Building
} from 'lucide-react';

import CTASection from '../components/common/CTASection';
import images from '../data/images';

const ServiceDetailView = () => {
    const { serviceId } = useParams();

    // Data for different services
    const serviceData = {
        "residential-construction": {
            title: "Residential Construction",
            heroImage: images.project1,
            description: "We specialize in crafting bespoke living spaces that combine aesthetic brilliance with structural perfection. Our residential projects range from ultra-luxury villas to smart modern apartment complexes.",
            features: [
                {
                    title: "Custom Villa Design",
                    desc: "Tailor-made architectural solutions that reflect your personal lifestyle and aspirations.",
                    icon: Layout,
                    benefits: ["Unique Design", "Premium Finishes", "Space Optimization"]
                },
                {
                    title: "Modern Apartment Towers",
                    desc: "High-density living solutions with a focus on community, light, and modern amenities.",
                    icon: Building,
                    benefits: ["Strategic Locations", "Smart Facilities", "Eco-friendly Design"]
                },
                {
                    title: "Sustainable Living",
                    desc: "Integration of solar energy, water harvesting, and green materials into every home.",
                    icon: Waves,
                    benefits: ["Reduced Costs", "Healthier Living", "Future Proof"]
                }
            ],
            gallery: [
                images.gallery1,
                images.gallery2,
                images.gallery3,
                images.gallery4,
            ]
        },
        "commercial-projects": {
            title: "Commercial Projects",
            heroImage: images.project2,
            description: "Our commercial constructions are designed to foster innovation and business growth. We build spaces that are not just functional but are landmarks of corporate identity.",
            features: [
                {
                    title: "Corporate Offices",
                    desc: "Dynamic work environments that boost productivity and reflect brand prestige.",
                    icon: ShieldCheck,
                    benefits: ["Modular Layouts", "Acoustic Excellence", "High Tech Integration"]
                },
                {
                    title: "Retail & Malls",
                    desc: "High-traffic commercial hubs designed for seamless visitor flow and maximum brand visibility.",
                    icon: Zap,
                    benefits: ["Prime Visibility", "Logistical Ease", "Cinematic Spaces"]
                },
                {
                    title: "Infrastructure Support",
                    desc: "Reliable structural solutions for large-scale commercial utility and connectivity.",
                    icon: HardHat,
                    benefits: ["Scalable Growth", "Max Safety", "Efficient Design"]
                }
            ],
            gallery: [
                images.gallery1,
                images.gallery2,
                images.gallery3,
                images.gallery4,]
        },
        "renovation-works": {
            title: "Renovation & Remodeling",
            heroImage: images.project3,
            description: "Breathing new life into existing structures. We handle everything from structural reinforcement to high-end interior makeovers with minimal disruption.",
            features: [
                {
                    title: "Structural Restoration",
                    desc: "Strengthening the core of aging buildings while maintaining historical or architectural value.",
                    icon: HardHat,
                    benefits: ["Extended Life", "Safety Upgrades", "Property Value Boost"]
                },
                {
                    title: "Interior Modernization",
                    desc: "Complete overhaul of internal spaces with modern materials, lighting, and finishes.",
                    icon: Layout,
                    benefits: ["Modern Aesthetic", "Better Functionality", "Energy Efficiency"]
                },
                {
                    title: "Exterior Refacing",
                    desc: "Transforming the outward appearance of buildings for a contemporary and premium look.",
                    icon: Clock,
                    benefits: ["First Impression", "Weather Protection", "Modern Materials"]
                }
            ],
            gallery: [
                images.gallery1,
                images.gallery2,
                images.gallery3,
                images.gallery4,
            ]
        },
        "turnkey-projects": {
            title: "Turnkey Projects",
            heroImage: images.project4,
            description: "From the first brick to the final key handover, we manage every aspect of construction, procurement, and design. You provide the vision; we provide the keys.",
            features: [
                {
                    title: "Conceptual Design",
                    desc: "Full architectural planning and spatial layout by our expert design team.",
                    icon: Layout,
                    benefits: ["Holistic Planning", "Budget Accuracy", "Visual Previews"]
                },
                {
                    title: "Procurement & Liaison",
                    desc: "Hassle-free material sourcing and legal approvals with government authorities.",
                    icon: ShieldCheck,
                    benefits: ["Verified Quality", "Faster Approvals", "Single Point Contact"]
                },
                {
                    title: "Execution & Fit-out",
                    desc: "High-speed construction and interior finishing with strict quality control.",
                    icon: HardHat,
                    benefits: ["On-time Handover", "Premium Quality", "Zero Stress"]
                }
            ],
            gallery: [
                images.gallery1,
                images.gallery2,
                images.gallery3,
                images.gallery4,
            ]
        }
    };


    const currentService = serviceData[serviceId] || serviceData["residential-construction"];
    const [hoveredImage, setHoveredImage] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [serviceId]);

    return (
        <div className="bg-white">
            <main>
                {/* Hero Section */}
                <section className="relative h-[60vh] flex items-center overflow-hidden">
                    <img
                        src={currentService.heroImage}
                        alt={currentService.title}
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

                    <div className="container mx-auto px-4 relative z-10 pt-20">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <Link to="/services" className="inline-flex items-center gap-2 text-white/60 hover:text-primary mb-8 transition-colors group">
                                <ChevronLeft className="group-hover:-translate-x-1 transition-transform" />
                                <span className="text-sm font-bold uppercase tracking-widest">Back to Services</span>
                            </Link>
                            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 uppercase tracking-tight">
                                {currentService.title.split(' ')[0]} <br />
                                <span className="text-primary">{currentService.title.split(' ').slice(1).join(' ')}</span>
                            </h1>
                            <p className="max-w-2xl text-lg md:text-xl text-slate-300 font-light leading-relaxed">
                                {currentService.description}
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Service Breakdown */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-20">
                            <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em] mb-4">Core Offerings</h2>
                            <h3 className="text-4xl font-bold text-secondary-dark">Comprehensive Solutions</h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                            {currentService.features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.2, duration: 0.6 }}
                                    className="group p-10 rounded-[3rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:border-primary/20 transition-all duration-500"
                                >
                                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                                        <feature.icon size={32} />
                                    </div>
                                    <h4 className="text-2xl font-bold text-secondary-dark mb-4">{feature.title}</h4>
                                    <p className="text-slate-500 mb-8 leading-relaxed">
                                        {feature.desc}
                                    </p>

                                    <div className="space-y-4">
                                        {feature.benefits.map((benefit, i) => (
                                            <div key={i} className="flex items-center gap-3 text-sm font-bold text-slate-700">
                                                <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                                                {benefit}
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Visual Support Gallery */}
                <section className="py-24 bg-secondary-dark relative">
                    <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 blur-[120px]"></div>
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="flex flex-col lg:flex-row items-end justify-between mb-16 gap-8">
                            <div className="max-w-xl">
                                <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em] mb-4">Quality in Motion</h2>
                                <h3 className="text-4xl font-bold text-white mb-6">Visual Proof of our <br />Engineering Excellence</h3>
                            </div>
                            <button className="px-8 py-4 rounded-full bg-primary text-white font-bold hover:shadow-primary/20 hover:scale-105 transition-all text-sm uppercase tracking-widest flex items-center gap-2">
                                View Portfolio <ArrowRight size={18} />
                            </button>
                        </div>

                        <div className="gallery-container">
                            <Swiper
                                modules={[Autoplay, Pagination, Navigation]}
                                spaceBetween={30}
                                slidesPerView={1}
                                centeredSlides={true}
                                loop={true}
                                autoplay={{
                                    delay: 3500,
                                    disableOnInteraction: false,
                                }}
                                breakpoints={{
                                    640: {
                                        slidesPerView: 2,
                                    },
                                    1024: {
                                        slidesPerView: 3,
                                    }
                                }}
                                className="pb-16"
                            >
                                {currentService.gallery.map((img, i) => (
                                    <SwiperSlide key={i}>
                                        <motion.div
                                            className="relative rounded-[2.5rem] overflow-hidden group cursor-pointer"
                                            onMouseEnter={() => setHoveredImage(img)}
                                            onMouseLeave={() => setHoveredImage(null)}
                                            whileHover={{ y: -10 }}
                                            transition={{ duration: 0.4 }}
                                        >
                                            <img
                                                src={img}
                                                alt="Gallery"
                                                className="w-full h-[450px] object-cover group-hover:scale-110 transition-transform duration-700"
                                            />
                                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center gap-4">
                                                <div className="w-16 h-16 rounded-full glass border border-white/20 flex items-center justify-center text-white">
                                                    <CheckCircle2 size={32} />
                                                </div>
                                                <p className="text-white font-bold uppercase tracking-widest text-xs">View Detail</p>
                                            </div>
                                        </motion.div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </section>

                {/* Hover Image Popup */}
                <AnimatePresence>
                    {hoveredImage && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/90 p-4 md:p-12 pointer-events-none"
                        >
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.9, opacity: 0 }}
                                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                                className="relative max-w-5xl w-full aspect-video rounded-3xl overflow-hidden shadow-2xl border border-white/10"
                            >
                                <img
                                    src={hoveredImage}
                                    alt="Preview"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                                <div className="absolute bottom-8 left-8">
                                    <h4 className="text-white text-2xl font-bold uppercase tracking-wider">{currentService.title}</h4>
                                    <p className="text-primary font-bold uppercase tracking-[0.3em] text-sm">Project Spotlight</p>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>

                <CTASection />
            </main>
        </div>
    );
};

export default ServiceDetailView;
