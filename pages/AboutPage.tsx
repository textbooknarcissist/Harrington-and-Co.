import React from 'react';
import { ShieldCheck, Compass, Layers, Landmark, Instagram, Twitter, Linkedin } from 'lucide-react';
import { LAWYERS } from '../constants';
import Logo from '../components/Logo';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-[#F7F5F0]">
      {/* Dark Header for Navbar Consistency */}
      <section className="bg-[#0F1E2E] pt-40 pb-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-5 pointer-events-none">
          <Logo className="w-[600px] h-[600px]" light={true} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center md:text-left">
          <span className="text-[#C6A75E] font-bold tracking-[0.4em] uppercase text-xs mb-6 block">Our Philosophy</span>
          <h1 className="text-5xl md:text-7xl font-bold text-[#F7F5F0] mb-8 serif leading-tight">
            The Architecture <br /> of Justice.
          </h1>
          <div className="w-24 h-1 bg-[#C6A75E] mb-8 mx-auto md:mx-0"></div>
          <p className="max-w-2xl text-xl text-[#F7F5F0]/70 font-light leading-relaxed">
            We do not just practice law; we engineer the frameworks that safeguard global commerce and personal legacies.
          </p>
        </div>
      </section>

      {/* The Harrington Method */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative group">
              <div className="absolute -inset-4 border border-[#C6A75E]/20 rounded-sm -z-10 group-hover:scale-105 transition-transform duration-700"></div>
              <img 
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=1200" 
                alt="Architecture and Design" 
                className="w-full h-[600px] object-cover grayscale brightness-75 hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute bottom-10 left-10 right-10 p-8 bg-[#0F1E2E]/90 backdrop-blur-md border-l-4 border-[#C6A75E]">
                <h3 className="text-[#F7F5F0] text-2xl font-bold serif mb-2 italic">"Precision is our primary currency."</h3>
                <p className="text-[#C6A75E] text-[10px] font-bold uppercase tracking-[0.3em]">HARRINGTON CORE VALUES</p>
              </div>
            </div>

            <div className="space-y-10">
              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-[#0F1E2E] serif">Beyond Advocacy: Strategic Engineering</h2>
                <p className="text-[#4A5568] text-lg font-light leading-relaxed">
                  Harrington and Co was founded on the belief that traditional legal counsel is no longer sufficient in a hyper-connected, volatile global economy. We operate as <strong>Legal Architects</strong>—mapping risks before they manifest and building resilient structures for growth.
                </p>
                <p className="text-[#4A5568] leading-relaxed">
                  Our multidisciplinary approach combines deep jurisprudence with technological foresight. We don't just win cases; we eliminate the conditions that create them. From maritime logistics to the frontiers of AI governance, we provide the quiet strength behind the world's most ambitious projects.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8 pt-8 border-t border-slate-200">
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-[#0F1E2E] serif">24+</div>
                  <p className="text-[#C6A75E] text-[10px] font-bold uppercase tracking-widest">Global Jurisdictions</p>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-[#0F1E2E] serif">98%</div>
                  <p className="text-[#C6A75E] text-[10px] font-bold uppercase tracking-widest">Advisory Retention</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Three Pillars */}
      <section className="py-24 bg-[#0F1E2E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl text-[#F7F5F0] font-bold serif mb-6">Our Foundational Tenets</h2>
            <p className="text-[#F7F5F0]/50 max-w-2xl mx-auto font-light">The constants that define our engagement with every client, regardless of the scale of the brief.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { 
                icon: <Compass className="w-10 h-10" />, 
                title: 'Strategic Forethought', 
                desc: 'We evaluate the legal landscape across decades, not quarters, ensuring our clients’ legacies are fortified against future shifts.' 
              },
              { 
                icon: <Layers className="w-10 h-10" />, 
                title: 'Unrivaled Precision', 
                desc: 'In the details lies the difference between a contract and a shield. We execute with a standard of meticulousness that borders on the absolute.' 
              },
              { 
                icon: <ShieldCheck className="w-10 h-10" />, 
                title: 'Absolute Discretion', 
                desc: 'Privacy is the ultimate luxury. We maintain a fortress of confidentiality for the high-stakes interests we represent.' 
              }
            ].map((pillar, i) => (
              <div key={i} className="bg-white/5 p-12 border border-white/10 group hover:border-[#C6A75E]/40 transition-all duration-500">
                <div className="text-[#C6A75E] mb-8 group-hover:scale-110 transition-transform duration-500">{pillar.icon}</div>
                <h3 className="text-[#F7F5F0] text-2xl font-bold serif mb-6">{pillar.title}</h3>
                <p className="text-[#F7F5F0]/40 text-sm font-light leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <span className="text-[#C6A75E] font-bold tracking-[0.3em] uppercase text-xs mb-4 block">The Counsel</span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0F1E2E] serif leading-tight">Elite Representation <br /> Across Continents.</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {LAWYERS.map((lawyer) => (
              <div key={lawyer.id} className="group">
                <div className="relative overflow-hidden mb-8 aspect-[4/5] bg-slate-100 shadow-2xl transition-all duration-700">
                  <img 
                    src={lawyer.imageUrl} 
                    alt={lawyer.name} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[#0F1E2E]/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-6">
                    <Linkedin size={20} className="text-[#F7F5F0] hover:text-[#C6A75E] cursor-pointer transition-colors" />
                    <Twitter size={20} className="text-[#F7F5F0] hover:text-[#C6A75E] cursor-pointer transition-colors" />
                    <Instagram size={20} className="text-[#F7F5F0] hover:text-[#C6A75E] cursor-pointer transition-colors" />
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-[#0F1E2E] serif mb-2">{lawyer.name}</h3>
                  <p className="text-[#C6A75E] font-bold text-[10px] uppercase tracking-[0.3em] mb-3">{lawyer.role}</p>
                  <div className="w-8 h-0.5 bg-slate-200 mx-auto"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;