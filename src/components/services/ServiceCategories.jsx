import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, Building2, Factory, Hammer, Zap, ChevronRight } from 'lucide-react';
import images from '../../data/images';

// Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const ServiceCategories = () => {
    const categories = [
        {
            id: "residential-construction",
            title: "Residential Construction",
            desc: "Crafting dream homes that combine luxury, comfort, and structural integrity. From custom villas to modern apartments.",
            icon: Home,
            image: images.project1,
            stats: "150+ Homes Delivered"
        },
        {
            id: "commercial-projects",
            title: "Commercial Projects",
            desc: "Designing and building high-performance commercial spaces that inspire productivity and reflect brand excellence.",
            icon: Building2,
            image: images.project2,
            stats: "80+ Offices & Retails"
        },
        {
            id: "renovation-works",
            title: "Renovation & Remodeling",
            desc: "Transforming aging structures into modern masterpieces with seamless integration and structural upgrades.",
            icon: Hammer,
            image: images.project3,
            stats: "200+ Remodels Completed"
        },
        {
            id: "turnkey-projects",
            title: "Turnkey Projects",
            desc: "End-to-end project management from conceptualization to final handover, ensuring zero-stress delivery.",
            icon: Zap,
            image: images.project4,
            stats: "50+ Turnkey Deliveries"
        }
    ];

    const ServiceCard = ({ cat }) => (
        <Link
            to={`/services/${cat.id}`}
            className="group block relative h-full transform-gpu"
        >
            <div className="relative bg-[#020617] rounded-[2.5rem] md:rounded-[3.5rem] shadow-2xl overflow-hidden h-full flex flex-col border border-white/10">
                <div className="absolute inset-0 z-0">
                    <img
                        src={cat.image || images.project1}
                        alt={cat.title}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />
                </div>

                <div className="relative z-10 p-8 md:p-10 mt-auto">
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-teal-500 flex items-center justify-center text-white mb-6 transform transition-transform duration-500 group-hover:-translate-y-2 shadow-lg">
                        {cat.icon && <cat.icon size={28} />}
                    </div>

                    <h4 className="text-2xl md:text-3xl font-black text-white mb-3 uppercase tracking-tighter leading-none transition-colors group-hover:text-teal-400">
                        {cat.title}
                    </h4>

                    <p className="text-slate-300 text-sm md:text-base mb-6 font-light leading-relaxed line-clamp-3 md:group-hover:line-clamp-none transition-all duration-500">
                        {cat.desc}
                    </p>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-teal-500 font-black text-[10px] tracking-[0.2em] uppercase">
                            <span className="w-8 h-[2px] bg-teal-500"></span>
                            {cat.stats}
                        </div>
                        <ChevronRight size={20} className="text-teal-500 transform transition-transform group-hover:translate-x-1" />
                    </div>
                </div>
            </div>
        </Link>
    );

    return (
        <section className="min-h-screen flex items-center bg-slate-50 relative overflow-hidden py-12" id="service-categories">
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16 px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-[10px] font-black text-teal-600 uppercase tracking-[0.4em] mb-4">Core Sectors</h2>
                        <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6 tracking-tighter uppercase">Specialized Solutions for <br />Every Industry</h3>
                        <p className="text-slate-500 text-lg font-light leading-relaxed">
                            We deliver excellence across diverse sectors, ensuring each project meets the unique technical and aesthetic requirements of its domain.
                        </p>
                    </motion.div>
                </div>

                {/* Unified Swiper — Matching ServicesHighlight pattern exactly */}
                <div className="relative group/swiper">
                    <Swiper
                        modules={[Pagination, Autoplay]}
                        spaceBetween={20}
                        slidesPerView={1.15}
                        centeredSlides={true}
                        loop={true}
                        speed={1000}
                        grabCursor={true}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true
                        }}
                        pagination={{
                            clickable: true,
                            dynamicBullets: true
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 30,
                                centeredSlides: false,
                            },
                            1024: {
                                slidesPerView: 3.2,
                                spaceBetween: 30,
                                centeredSlides: true,
                            }
                        }}
                        className="services-cat-swiper pb-16 lg:pb-24"
                    >
                        {[...categories, ...categories].map((cat, idx) => (
                            <SwiperSlide key={`${cat.id}-${idx}`} className="py-8 sm:py-10 overflow-visible">
                                {({ isActive }) => (
                                    <div className={`h-[480px] sm:h-[520px] md:h-[580px] lg:h-[600px] transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] ${isActive
                                        ? 'opacity-100 scale-100 z-20 rounded-[2.5rem] md:rounded-[3.5rem] shadow-xl'
                                        : 'opacity-50 scale-95 blur-[0.5px] z-10'
                                        }`}>
                                        <div className={`absolute -inset-2 bg-teal-500/5 blur-3xl rounded-[3rem] -z-10 transition-opacity duration-1000 ${isActive ? 'opacity-100' : 'opacity-0'}`}></div>
                                        <ServiceCard cat={cat} />
                                    </div>
                                )}
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                <style jsx="true">{`
                    .services-cat-swiper .swiper-pagination { bottom: 0 !important; }
                    .services-cat-swiper .swiper-pagination-bullet { background: #0d9488; opacity: 0.2; width: 10px; height: 10px; transition: all 0.6s ease; }
                    .services-cat-swiper .swiper-pagination-bullet-active { opacity: 1; width: 30px; border-radius: 5px; }
                `}</style>
            </div>
        </section >
    );
};

export default ServiceCategories;
