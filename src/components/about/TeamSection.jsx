import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Mail } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Autoplay } from 'swiper/modules';
import images from '../../data/images';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

const TeamSection = () => {
  const team = [
    {
      name: "Dinesh Kumar.G",
      role: "Founder & CEO",
      image: images.founder,
      bio: "15+ years of experience in structural engineering and strategic leadership."
    },
    {
      name: "Sarah Williams",
      role: "Head Architect",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2000&auto=format&fit=crop",
      bio: "Award-winning architect specializing in sustainable urban designs."
    },
    {
      name: "Michael Chen",
      role: "Project Manager",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2000&auto=format&fit=crop",
      bio: "Expert in large-scale infrastructure and efficient resource management."
    },
    {
      name: "Emily Rodriguez",
      role: "Design Lead",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2000&auto=format&fit=crop",
      bio: "Passionate about creating human-centric spaces that inspire."
    }
  ];

  const TeamCard = ({ member, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="group"
    >
      <div className="relative rounded-[2rem] overflow-hidden mb-6 aspect-[4/5] bg-slate-100 shadow-xl group-hover:shadow-primary/10 transition-all duration-700">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
        />
        {/* Overlay on hover/active */}
        <div className="absolute inset-x-4 bottom-4 glass-dark p-6 rounded-2xl translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <p className="text-white text-sm mb-4 line-clamp-2">{member.bio}</p>
          <div className="flex gap-4">
            <a href="#" className="text-white/60 hover:text-primary transition-colors"><Linkedin size={18} /></a>
            <a href="#" className="text-white/60 hover:text-primary transition-colors"><Twitter size={18} /></a>
            <a href="#" className="text-white/60 hover:text-primary transition-colors"><Mail size={18} /></a>
          </div>
        </div>
      </div>
      <div className="text-center sm:text-left px-2">
        <h4 className="text-xl font-bold text-secondary-dark mb-1 group-hover:text-primary transition-colors">{member.name}</h4>
        <p className="text-primary text-sm font-semibold uppercase tracking-widest">{member.role}</p>
      </div>
    </motion.div>
  );

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
          <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em] mb-4">Our Team</h2>
          <h3 className="text-4xl font-bold text-secondary-dark mb-6">The Minds Behind <br />The Landmarks</h3>
          <p className="text-slate-500 text-lg">
            Meet our dedicated team of professionals who turn every blueprint into a legacy of craftsmanship.
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <TeamCard key={index} member={member} index={index} />
          ))}
        </div>

        {/* Mobile Stacked Carousel */}
        <div className="md:hidden flex justify-center py-10">
          <div className="w-[300px] sm:w-[350px]">
            <Swiper
              effect={'cards'}
              grabCursor={true}
              modules={[EffectCards, Autoplay]}
              className="team-swiper"
              cardsEffect={{
                slideShadows: false,
                rotate: true,
                perSlideOffset: 8,
                perSlideRotate: 2
              }}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
            >
              {team.map((member, index) => (
                <SwiperSlide key={index} className="rounded-[2rem] overflow-visible">
                  <TeamCard member={member} index={0} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <style jsx="true">{`
            .team-swiper {
              width: 100%;
              overflow: visible !important;
            }
            .team-swiper .swiper-slide {
              background: white;
              border-radius: 2rem;
            }
            .team-swiper .swiper-slide-active {
              z-index: 20;
            }
          `}</style>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
