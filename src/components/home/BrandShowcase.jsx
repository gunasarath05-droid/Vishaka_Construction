import React from 'react';

const BrandShowcase = () => {
    const brands = [
        { name: 'Skyline Architects', logo: 'https://i.pinimg.com/736x/35/ac/ef/35acef3c64685e6334ffbdca3d25a81b.jpg', id: 1 },
        { name: 'Core Engineering', logo: 'https://i.pinimg.com/1200x/cc/ad/66/ccad66069ccb0c3da8a64e2dfdc26b5b.jpg', id: 2 },
        { name: 'Urban Build', logo: 'https://i.pinimg.com/1200x/55/1b/56/551b56c01bb47a03d55284a4dc610597.jpg', id: 3 },
        { name: 'Industrial Trust', logo: 'https://i.pinimg.com/1200x/2f/2c/5f/2f2c5f8538f4ad610242d35e0c254421.jpg', id: 4 },
        { name: 'Eco Frameworks', logo: 'https://i.pinimg.com/736x/11/c6/48/11c64807b488559b4ed1f545cb1ecb4a.jpg', id: 5 },
        { name: 'Global Foundation', logo: 'https://i.pinimg.com/736x/3b/56/a3/3b56a3634b46cb3a4dd47ce82f367b9c.jpg', id: 6 },
    ];

    return (
        <section className="relative bg-white py-24 overflow-hidden">
            <div className="max-w-full">
                {/* Main Container with "Architectural" feel */}
                <div className="relative bg-[#004D4D] rounded-t-[3rem] md:rounded-t-[4rem] overflow-hidden min-h-[600px] flex items-center shadow-2xl border border-teal-900/20">

                    {/* Background Layer: Image & Subtle Texture */}
                    <div className="absolute inset-0 z-0">
                        <img
                            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000"
                            alt="Background"
                            className="w-full h-full object-cover opacity-10 mix-blend-overlay"
                        />
                    </div>

                    <div className="relative z-20 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 p-6 sm:p-10 lg:p-24 items-center">

                        {/* Left Side: Editorial Typography */}
                        <div className="lg:col-span-5 text-white">
                            <div>
                                <div className="flex items-center space-x-3 mb-6">
                                    <div className="w-12 h-[2px] bg-teal-500"></div>
                                    <span className="text-teal-400 font-bold text-xs tracking-[0.3em] uppercase">
                                        Trusted By Leaders
                                    </span>
                                </div>

                                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6 sm:mb-8">
                                    OUR <span className="text-teal-400">PARTNERS</span>
                                </h2>

                                <p className="text-teal-50/60 text-lg leading-relaxed mb-12 max-w-md">
                                    Collaborating with industry leaders to deliver excellence in every project. We work with the best to ensure the highest standards.
                                </p>

                            </div>
                        </div>

                        <div className="lg:col-span-7">
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
                                {brands.map((brand) => (
                                    <div
                                        key={brand.id}
                                        className="relative group aspect-[2/1]"
                                    >
                                        {/* Main Card: Pure White with Glass Finish */}
                                        <div className="relative h-full bg-white/95 backdrop-blur-sm rounded-2xl md:rounded-[2rem] flex items-center justify-center transition-all duration-700 shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-white/20 group-hover:shadow-[0_30px_60px_rgba(0,0,0,0.12)] group-hover:-translate-y-2 overflow-hidden">

                                            {/* Subtle Inner Glow */}
                                            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                                            <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                                                <img
                                                    src={brand.logo}
                                                    alt={brand.name}
                                                    className="max-h-[55%] w-auto object-contain transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-110 filter brightness-[1.05]"
                                                />
                                            </div>

                                            {/* Hover Decorative Element (Architectural Detail) */}
                                            <div className="absolute top-4 right-4 w-2 h-2 border-t border-r border-teal-500/0 group-hover:border-teal-500/40 transition-all duration-500 scale-150"></div>
                                            <div className="absolute bottom-4 left-4 w-2 h-2 border-b border-l border-teal-500/0 group-hover:border-teal-500/40 transition-all duration-500 scale-150"></div>
                                        </div>

                                        {/* Bottom Brand Label (Subtle) */}
                                        <div className="mt-4 text-center opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-y-2 group-hover:translate-y-0">
                                            <span className="text-teal-100/40 text-[10px] uppercase tracking-widest font-bold">
                                                {brand.name}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default BrandShowcase;
