import React from 'react';
import { motion } from 'framer-motion';
import { Play, Newspaper, Image as ImageIcon, Video as VideoIcon } from 'lucide-react';

const Video = () => {
  const pressReleases = [
    {
      title: "Vishaka Engineering Wins Sustainability Award 2024",
      date: "Feb 15, 2024",
      desc: "Recognized for our pioneering work in eco-friendly industrial park construction."
    },
    {
      title: "New Corporate Headquarters Unveiled in Chennai",
      date: "Jan 10, 2024",
      desc: "A state-of-the-art office reflecting our growth and commitment to excellence."
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-secondary-dark overflow-hidden">
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
            <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em] mb-6">Press & Media</h2>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
              Latest News & <br /> <span className="text-primary italic">Updates</span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-slate-400 font-light leading-relaxed">
              Stay informed about our latest achievements, site launches, and corporate announcements.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Media Blocks */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Press Releases */}
            <div>
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                  <Newspaper size={24} />
                </div>
                <h3 className="text-2xl font-bold text-secondary-dark">Press Releases</h3>
              </div>

              <div className="space-y-8">
                {pressReleases.map((news, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 hover:shadow-xl transition-all group"
                  >
                    <p className="text-primary text-xs font-black uppercase tracking-widest mb-3">{news.date}</p>
                    <h4 className="text-xl font-bold text-secondary-dark mb-4 group-hover:text-primary transition-colors">{news.title}</h4>
                    <p className="text-slate-500 leading-relaxed mb-6">{news.desc}</p>
                    <button className="text-sm font-bold uppercase tracking-widest text-secondary-dark border-b-2 border-primary/20 hover:border-primary transition-all">
                      Read Full Article
                    </button>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Video Highlights */}
            <div>
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                  <VideoIcon size={24} />
                </div>
                <h3 className="text-2xl font-bold text-secondary-dark">Video Gallery</h3>
              </div>

              <div className="relative rounded-[3rem] overflow-hidden group shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop"
                  alt="Video Thumbnail"
                  className="w-full h-[450px] object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/20 transition-all">
                  <button className="w-24 h-24 rounded-full bg-primary text-white flex items-center justify-center shadow-2xl shadow-primary/40 hover:scale-110 transition-transform">
                    <Play fill="currentColor" size={32} />
                  </button>
                </div>
                <div className="absolute bottom-8 left-8 right-8 p-6 glass rounded-2xl text-white">
                  <p className="text-[10px] font-black uppercase tracking-widest mb-2">Corporate Film</p>
                  <h4 className="text-xl font-bold uppercase">The Vishaka Engineering Story</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Video;
