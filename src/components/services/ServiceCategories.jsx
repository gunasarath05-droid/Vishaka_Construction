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

    const ServiceCard = ({ cat, isActive, isMobile = false }) => (
        <Link
            to={`/services/${cat.id}`}
            className={`block relative h-full rounded-[3.5rem] overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${isMobile
                ? isActive
                    ? 'scale-105 opacity-100 blur-0 shadow-[0_30px_60px_-15px_rgba(13,148,136,0.3)] z-20 brightness-110'
                    : 'scale-90 opacity-40 blur-[1px] z-10'
                : 'group shadow-2xl'
                }`}
        >
            <img
                src={cat.image}
                alt={cat.title}
                className={`absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ${!isMobile && 'group-hover:scale-110'}`}
            />
            <div className={`absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent transition-opacity duration-500`} />

            {/* Active Glow Border (Mobile only) */}
            {isMobile && isActive && (
                <div className="absolute inset-0 border-2 border-primary/30 rounded-[3.5rem] z-20 pointer-events-none animate-pulse" />
            )}

            <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end">
                <div className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-primary flex items-center justify-center text-white mb-6 transform transition-transform duration-500 ${!isMobile && 'group-hover:-translate-y-2'}`}>
                    <cat.icon size={isMobile ? 28 : 32} />
                </div>

                <h4 className={`text-2xl md:text-3xl font-black text-white mb-3 uppercase tracking-tighter leading-none transition-colors ${!isMobile && 'group-hover:text-primary'}`}>
                    {cat.title}
                </h4>

                <p className={`text-slate-300 text-sm md:text-base mb-6 font-light leading-relaxed transition-all duration-500 ${!isMobile ? 'line-clamp-2 group-hover:line-clamp-none' : 'line-clamp-3'}`}>
                    {cat.desc}
                </p>

                <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-2 text-primary font-black text-[10px] tracking-[0.2em] uppercase">
                        <span className="w-8 h-[2px] bg-primary"></span>
                        {cat.stats}
                    </div>
                    {isMobile && <ChevronRight size={20} className="text-primary" />}
                </div>
            </div>
        </Link>
    );

    return (
        <section className="py-16 sm:py-20 md:py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4 py-4">
                <div className="text-center max-w-3xl mx-auto mb-16 px-4">
                    <h2 className="text-[10px] font-black text-primary uppercase tracking-[0.4em] mb-4">Core Sectors</h2>
                    <h3 className="text-3xl sm:text-4xl font-bold text-secondary-dark mb-6 tracking-tighter uppercase">Specialized Solutions for <br />Every Industry</h3>
                    <p className="text-slate-500 text-lg font-light leading-relaxed">
                        We deliver excellence across diverse sectors, ensuring each project meets the unique technical and aesthetic requirements of its domain.
                    </p>
                </div>

                {/* Mobile Tactile Slider */}
                <div className="lg:hidden h-[540px] sm:h-[580px] md:h-[640px]">
                    {(() => {
                        const displayCategories = categories.length > 0 && categories.length < 6 ? [...categories, ...categories] : categories;

                        return (
                            <Swiper
                                modules={[Pagination, Autoplay]}
                                spaceBetween={0}
                                slidesPerView={1.2}
                                centeredSlides={true}
                                loop={true}
                                autoplay={{ delay: 4000, disableOnInteraction: false }}
                                pagination={{ clickable: true }}
                                className="services-cat-swiper h-full overflow-visible"
                            >
                                {displayCategories.map((cat, index) => (
                                    <SwiperSlide key={index} className="pt-10 pb-24 overflow-visible">
                                        {({ isActive }) => (
                                            <ServiceCard cat={cat} isActive={isActive} isMobile={true} />
                                        )}
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        );
                    })()}
                </div>

                <style jsx="true">{`
                        .services-cat-swiper .swiper-pagination {
                            bottom: 10px !important;
                        }
                        .services-cat-swiper .swiper-pagination-bullet {
                            background: #0d9488;
                            opacity: 0.2;
                            margin: 0 6px !important;
                            transition: all 0.3s ease;
                        }
                        .services-cat-swiper .swiper-pagination-bullet-active {
                            opacity: 1;
                            width: 24px;
                            border-radius: 4px;
                        }
                    `}</style>

                {/* Desktop Professional Grid */}
                <div className="hidden lg:grid grid-cols-4 gap-6">
                    {categories.map((cat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="h-[520px]"
                        >
                            <ServiceCard cat={cat} isActive={false} isMobile={false} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceCategories;
