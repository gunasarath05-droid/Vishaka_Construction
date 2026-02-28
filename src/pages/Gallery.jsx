import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ImageIcon,
  Video,
  HardHat,
  Calendar,
  Maximize2,
  Filter,
  Layers,
  Activity
} from 'lucide-react';

import images from "../data/images"

const Gallery = () => {
  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', name: 'All Work' },
    { id: 'construction', name: 'Construction Sites' },
    { id: 'interiors', name: 'Premium Interiors' },
    { id: 'events', name: 'Corporate Events' }
  ];

  const galleryItems = [
    {
      id: 1,
      title: "Crystal Heights Exterior",
      category: 'construction',
      image: images.project1,
      type: 'image'
    },
    {
      id: 2,
      title: "Modern Boardroom",
      category: 'interiors',
      image: images.project2,
      type: 'image'
    },
    {
      id: 3,
      title: "Site Progress 2024",
      category: 'construction',
      image: images.project3,
      type: 'video'
    },
    {
      id: 4,
      title: "Grand Opening Ceremony",
      category: 'events',
      image: images.project4,
      type: 'image'
    },
    {
      id: 5,
      title: "Luxury Villa Kitchen",
      category: 'interiors',
      image: images.project5,
      type: 'image'
    },
    {
      id: 6,
      title: "Industrial Park Layout",
      category: 'construction',
      image: images.project6,
      type: 'image'
    },
   {
      id: 7,
      title: "Crystal Heights Exterior",
      category: 'construction',
      image: images.project7,
      type: 'image'
    },
    {
      id: 8,
      title: "Modern Boardroom",
      category: 'interiors',
      image: images.project8,
      type: 'image'
    },
    {
      id: 9,
      title: "Site Progress 2024",
      category: 'construction',
      image: images.project13,
      type: 'video'
    },
    {
      id: 10,
      title: "Grand Opening Ceremony",
      category: 'events',
      image: images.project10,
      type: 'image'
    },
    {
      id: 11,
      title: "Luxury Villa Kitchen",
      category: 'interiors',
      image: images.project11,
      type: 'image'
    },
    {
      id: 12,
      title: "Industrial Park Layout",
      category: 'construction',
      image: images.project12,
      type: 'image'
    },
  ];

  const filteredItems = filter === 'all' ? galleryItems : galleryItems.filter(item => item.category === filter);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen">
      {/* Standardized Gallery Hero */}
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
            <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em] mb-6">Visual Portfolio</h2>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
              Engineering <br /> <span className="text-primary italic">Excellence</span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-slate-400 font-light leading-relaxed">
              Experience our architectural journey through a curated collection of our most iconic projects and site highlights.
            </p>

            {/* Filters */}
            <div className="flex flex-wrap justify-center gap-4 mt-12 bg-white/5 p-4 rounded-[2.5rem] border border-white/10 backdrop-blur-xl w-fit mx-auto">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setFilter(cat.id)}
                  className={`px-8 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all duration-500 ${filter === cat.id
                    ? 'bg-primary text-white shadow-2xl shadow-primary/40 scale-105'
                    : 'text-white/40 hover:text-white hover:bg-white/5'
                    }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Masonry-style Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode='popLayout'>
              {filteredItems.map((item) => (
                <motion.div
                  layout
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="group relative rounded-[2.5rem] overflow-hidden bg-slate-100 aspect-[4/5]"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="absolute inset-0 p-8 flex flex-col justify-end transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 opacity-0 group-hover:opacity-100">
                    <div className="flex items-center gap-2 text-primary text-[10px] font-black uppercase tracking-widest mb-3">
                      {item.type === 'video' ? <Video size={14} /> : <ImageIcon size={14} />}
                      {item.category}
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-4 leading-tight">{item.title}</h4>
                    <button className="w-12 h-12 rounded-full glass border border-white/20 flex items-center justify-center text-white hover:bg-primary transition-colors self-start">
                      <Maximize2 size={20} />
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Stats Loader Placeholder */}
          <div className="mt-20 flex flex-wrap justify-center gap-16 border-t border-slate-100 pt-20">
            <div className="text-center">
              <h5 className="text-4xl font-black text-secondary-dark mb-2">2.5k+</h5>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Construction Shots</p>
            </div>
            <div className="text-center">
              <h5 className="text-4xl font-black text-secondary-dark mb-2">150+</h5>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Video walkthroughs</p>
            </div>
            <div className="text-center">
              <h5 className="text-4xl font-black text-secondary-dark mb-2">500+</h5>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Interior Concepts</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
