import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Calendar,
  User,
  ChevronRight,
  Search,
  Tag,
  Clock,
  TrendingUp
} from 'lucide-react';
import { blogs } from '../data/blogs';

// Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Standardized Blog Hero */}
      <section className="relative pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 md:pb-24 bg-secondary-dark overflow-hidden">
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
            <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em] mb-6">Press & Knowledge Hub</h2>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 sm:mb-8 tracking-tight">
              Latest <br /> <span className="text-primary italic">Insights</span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-slate-400 font-light leading-relaxed">
              Stay informed about our latest achievements, site launches, and corporate announcements.
            </p>

            {/* Search HUD */}
            <div className="relative max-w-xl group mx-auto mt-16">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-teal-500/20 rounded-[2rem] blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative flex items-center bg-white/5 border border-white/10 backdrop-blur-2xl rounded-[2rem] overflow-hidden focus-within:border-primary/50 transition-all">
                <Search className="absolute left-6 text-primary" size={24} />
                <input
                  type="text"
                  placeholder="Mastering construction: Search articles..."
                  className="w-full pl-16 pr-8 py-6 bg-transparent text-white focus:outline-none font-medium placeholder:text-white/20"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32">
        <div className="container mx-auto px-4">
          {/* Ensure enough slides for loop mode (min 6 recommended) */}
          {(() => {
            const displayBlogs = blogs.length > 0 && blogs.length < 6 ? [...blogs, ...blogs, ...blogs] : blogs;
            const canLoop = displayBlogs.length >= 6;

            return (
              <>
                {/* Mobile Swiper (Hidden on LG+) */}
                <div className="lg:hidden overflow-hidden">
                  <div className="h-[620px]">
                    <Swiper
                      modules={[Pagination, Autoplay]}
                      spaceBetween={20}
                      slidesPerView={1.1}
                      centeredSlides={true}
                      loop={canLoop}
                      autoplay={{ delay: 5000, disableOnInteraction: false }}
                      pagination={{ clickable: true }}
                      className="blog-swiper h-full pb-20"
                    >
                      {displayBlogs.map((post, idx) => (
                        <SwiperSlide key={`${post.id}-${idx}`} className="h-full">
                          <motion.article className="bg-white rounded-[3rem] overflow-hidden shadow-xl shadow-slate-200/50 flex flex-col h-[550px]">
                            <div className="relative h-60 overflow-hidden">
                              <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                              <div className="absolute top-6 left-6 px-4 py-2 rounded-xl bg-white/90 backdrop-blur-sm shadow-lg">
                                <span className="text-[9px] font-black text-primary uppercase tracking-widest">{post.category}</span>
                              </div>
                            </div>
                            <div className="p-8 flex flex-col flex-grow">
                              <h3 className="text-xl font-bold text-secondary-dark mb-4 leading-tight uppercase tracking-tighter">{post.title}</h3>
                              <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-3">{post.desc}</p>
                              <Link to={`/blog/${post.slug}`} className="mt-auto flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-primary">
                                Read More <ChevronRight size={14} />
                              </Link>
                            </div>
                          </motion.article>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                </div>

                {/* Desktop Grid (Visible on LG+) */}
                <div className="hidden lg:grid grid-cols-1 lg:grid-cols-3 gap-12">
                  {blogs.map((post, index) => (
                    <motion.article
                      key={post.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="group bg-white rounded-[3rem] overflow-hidden shadow-xl shadow-slate-200/50 hover:shadow-2xl transition-all duration-500 flex flex-col h-full"
                    >
                      <div className="relative h-72 overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute top-6 left-6 px-4 py-2 rounded-xl bg-white/90 backdrop-blur-sm shadow-lg">
                          <span className="text-[10px] font-black text-primary uppercase tracking-widest leading-none block">{post.category}</span>
                        </div>
                      </div>

                      <div className="p-10 flex flex-col flex-grow">
                        <div className="flex items-center gap-6 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-6">
                          <span className="flex items-center gap-2"><Calendar size={14} className="text-primary" /> {post.date}</span>
                          <span className="flex items-center gap-2"><User size={14} className="text-primary" /> {post.author}</span>
                        </div>

                        <h3 className="text-2xl font-bold text-secondary-dark mb-4 leading-tight group-hover:text-primary transition-colors uppercase tracking-tighter">
                          {post.title}
                        </h3>

                        <p className="text-slate-500 leading-relaxed mb-8 line-clamp-3">
                          {post.desc}
                        </p>

                        <div className="mt-auto">
                          <Link to={`/blog/${post.slug}`} className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-secondary-dark hover:text-primary transition-colors group/btn">
                            Read Full Article
                            <ChevronRight size={18} className="transition-transform group-hover/btn:translate-x-1" />
                          </Link>
                        </div>
                      </div>
                    </motion.article>
                  ))}
                </div>

                {/* Newsletter Cleanup */}
                <div className="mt-16 sm:mt-24 md:mt-32 lg:mt-40 rounded-[2.5rem] sm:rounded-[4rem] bg-secondary-dark p-8 sm:p-12 md:p-16 lg:p-24 relative overflow-hidden group">
                  <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] group-hover:bg-primary/30 transition-colors duration-1000"></div>
                  <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
                    <div className="max-w-xl text-center lg:text-left text-white">
                      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 tracking-tight uppercase">Knowledge <br /> In Your Inbox</h2>
                      <p className="text-slate-400 text-lg md:text-xl font-light leading-relaxed">Subscribe to our newsletter and get exclusive construction tips and project insights delivered to your inbox.</p>
                    </div>
                    <div className="flex w-full max-w-md relative">
                      <input
                        type="email"
                        placeholder="Official Email Address"
                        className="w-full pl-8 pr-40 py-6 rounded-3xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-primary font-bold placeholder:text-white/20 transition-all"
                      />
                      <button className="absolute right-2 top-2 bottom-2 px-8 bg-primary text-white rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-white hover:text-primary transition-all shadow-xl">
                        Subscribe
                      </button>
                    </div>
                  </div>
                </div>
              </>
            );
          })()}
        </div>
      </section>
    </div>
  );
};

export default Blog;
