import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowLeft, Clock, Share2, Tag, ChevronRight } from 'lucide-react';
import { blogs } from '../data/blogs';
import CTASection from '../components/common/CTASection';

const BlogDetail = () => {
    const { blogSlug } = useParams();
    const navigate = useNavigate();
    const post = blogs.find(p => p.slug === blogSlug);

    useEffect(() => {
        window.scrollTo(0, 0);
        if (!post) {
            navigate('/blog');
        }
    }, [post, navigate]);

    if (!post) return null;

    return (
        <div className="bg-white min-h-screen">
            {/* Header / Hero */}
            <article>
                <header className="relative py-32 bg-secondary-dark overflow-hidden">
                    <div className="absolute inset-0 opacity-20">
                        <img
                            src={post.image}
                            alt=""
                            className="w-full h-full object-cover blur-sm"
                        />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary-dark via-secondary-dark/80 to-transparent"></div>

                    <div className="container mx-auto px-4 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="max-w-4xl mx-auto text-center"
                        >
                            <Link
                                to="/blog"
                                className="inline-flex items-center gap-2 text-primary text-[10px] font-black uppercase tracking-[0.4em] mb-12 hover:opacity-70 transition-opacity"
                            >
                                <ArrowLeft size={16} /> Back to Insights
                            </Link>

                            <div className="inline-block px-5 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-widest mb-10">
                                {post.category}
                            </div>

                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-10 tracking-tighter leading-tight uppercase">
                                {post.title}
                            </h1>

                            <div className="flex flex-wrap justify-center items-center gap-8 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                                <span className="flex items-center gap-2"><Calendar size={14} className="text-primary" /> {post.date}</span>
                                <span className="flex items-center gap-2"><User size={14} className="text-primary" /> {post.author}</span>
                                <span className="flex items-center gap-2"><Clock size={14} className="text-primary" /> 5 Min Read</span>
                            </div>
                        </motion.div>
                    </div>
                </header>

                {/* Content */}
                <div className="container mx-auto px-4 py-24">
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="relative aspect-video rounded-[3rem] overflow-hidden shadow-2xl mb-20"
                        >
                            <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                        </motion.div>

                        <div
                            className="prose prose-xl prose-slate max-w-none 
                            prose-headings:text-secondary-dark prose-headings:font-black prose-headings:tracking-tighter prose-headings:uppercase
                            prose-p:text-slate-600 prose-p:leading-relaxed prose-p:font-medium
                            prose-strong:text-primary
                            prose-img:rounded-[2rem]
                            "
                            dangerouslySetInnerHTML={{ __html: post.content }}
                        />

                        {/* Footer / Share */}
                        <div className="mt-20 pt-20 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-10">
                            <div className="flex items-center gap-4">
                                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Tags:</span>
                                <div className="flex gap-2">
                                    <span className="px-4 py-2 bg-slate-50 rounded-xl text-[9px] font-black text-slate-500 uppercase tracking-widest">Construction</span>
                                    <span className="px-4 py-2 bg-slate-50 rounded-xl text-[9px] font-black text-slate-500 uppercase tracking-widest">Engineering</span>
                                </div>
                            </div>
                            <button className="flex items-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-primary transition-colors">
                                Share Article <Share2 size={16} />
                            </button>
                        </div>
                    </div>
                </div>
            </article>

            {/* Related Posts */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-black text-secondary-dark tracking-tighter uppercase mb-16 text-center">More from our <span className="text-primary italic">Engineers</span></h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {blogs.filter(b => b.id !== post.id).slice(0, 3).map(related => (
                            <Link to={`/blog/${related.slug}`} key={related.id} className="group bg-white p-2 rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all duration-500">
                                <div className="aspect-video rounded-[2rem] overflow-hidden mb-6">
                                    <img src={related.image} alt={related.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                </div>
                                <div className="px-6 pb-6">
                                    <h4 className="text-lg font-bold text-secondary-dark mb-4 line-clamp-2 leading-snug tracking-tight group-hover:text-primary transition-colors">{related.title}</h4>
                                    <div className="flex items-center justify-between">
                                        <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{related.date}</span>
                                        <ChevronRight size={16} className="text-primary" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <CTASection />
        </div>
    );
};

export default BlogDetail;
