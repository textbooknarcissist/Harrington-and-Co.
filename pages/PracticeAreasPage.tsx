import React from 'react';
import { Globe, ShieldAlert, Cpu, Landmark, Ship, Briefcase, ArrowRight } from 'lucide-react';
import Logo from '../components/Logo';

const sophisticatedPractices = [
  {
    id: '01',
    title: 'Commercial Equilibrium',
    desc: 'Beyond simple transactions, we facilitate complex mergers, acquisitions, and restructuring to ensure long-term corporate stability.',
    icon: <Briefcase className="w-10 h-10" />,
  },
  {
    id: '02',
    title: 'Digital Sovereignty',
    desc: 'Protecting your technological frontiers through rigorous AI ethics, blockchain governance, and elite cybersecurity legal protocols.',
    icon: <Cpu className="w-10 h-10" />,
  },
  {
    id: '03',
    title: 'Maritime Cartography',
    desc: 'Navigating the complex legal currents of international waters, logistics, and global trade route disputes with veteran precision.',
    icon: <Ship className="w-10 h-10" />,
  },
  {
    id: '04',
    title: 'Sovereign Asset Protection',
    desc: 'Private wealth custody and legacy planning for high-net-worth families, focused on multigenerational wealth preservation.',
    icon: <Landmark className="w-10 h-10" />,
  },
  {
    id: '05',
    title: 'Strategic Dispute Resolution',
    desc: 'High-stakes arbitration and mediation that prioritizes resolution over litigation, protecting boardroom reputations.',
    icon: <ShieldAlert className="w-10 h-10" />,
  },
  {
    id: '06',
    title: 'Inter-Jurisdictional Trade',
    desc: 'Seamless legal navigation across borders, ensuring compliance and competitive advantage in a globalized regulatory field.',
    icon: <Globe className="w-10 h-10" />,
  }
];

const PracticeAreasPage: React.FC = () => {
  return (
    <div className="bg-[#F7F5F0]">
      {/* Dark Hero Section */}
      <section className="bg-[#0F1E2E] pt-40 pb-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-5 pointer-events-none">
          <Logo className="w-[700px] h-[700px]" light={true} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <span className="text-[#C6A75E] font-bold tracking-[0.4em] uppercase text-xs mb-6 block">Our Capabilities</span>
            <h1 className="text-5xl md:text-8xl font-bold text-[#F7F5F0] mb-8 serif leading-none">
              Specialized <br /> Legal Insight.
            </h1>
            <div className="w-24 h-1 bg-[#C6A75E] mb-8"></div>
            <p className="text-xl text-[#F7F5F0]/70 font-light leading-relaxed max-w-2xl">
              We provide a spectrum of elite legal services designed for the complexities of modern industry and private interest.
            </p>
          </div>
        </div>
      </section>

      {/* Grid Section */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            {sophisticatedPractices.map((area) => (
              <div 
                key={area.id} 
                className="group relative bg-white p-12 shadow-[0_15px_50px_-20px_rgba(15,30,46,0.1)] border-b-2 border-transparent hover:border-[#C6A75E] transition-all duration-500"
              >
                <div className="absolute -top-6 left-12 text-5xl font-bold text-slate-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500 serif">
                  {area.id}
                </div>
                
                <div className="mb-10 text-[#C6A75E] group-hover:translate-x-2 transition-transform duration-500">
                  {area.icon}
                </div>

                <h3 className="text-2xl font-bold text-[#0F1E2E] mb-6 serif group-hover:text-[#C6A75E] transition-colors">
                  {area.title}
                </h3>
                
                <p className="text-[#4A5568] leading-relaxed mb-12 font-light text-sm">
                  {area.desc}
                </p>

                <a 
                  href="#/contact" 
                  className="inline-flex items-center text-[10px] font-bold text-[#0F1E2E] uppercase tracking-[0.3em] group/btn hover:text-[#C6A75E] transition-colors"
                >
                  Consult Expert 
                  <ArrowRight className="ml-3 w-4 h-4 transition-transform group-hover/btn:translate-x-2" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy of Engagement */}
      <section className="py-24 bg-[#0F1E2E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="absolute -top-10 -left-10 w-40 h-40 border border-[#C6A75E]/20"></div>
                <img 
                  src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1200" 
                  alt="Boardroom" 
                  className="w-full h-[500px] object-cover grayscale brightness-50"
                />
                <div className="absolute inset-0 bg-[#0F1E2E]/30"></div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 space-y-10">
              <h2 className="text-4xl text-[#F7F5F0] font-bold serif leading-tight">Dynamic Counsel for a <br /> Volatile World</h2>
              <p className="text-[#F7F5F0]/60 text-lg font-light leading-relaxed">
                Our practice is built on the reality that legal challenges do not exist in a vacuum. We provide holistic, 360-degree advocacy that considers the business, reputational, and social implications of every legal decision.
              </p>
              
              <ul className="space-y-6">
                {[
                  'Cross-Continental Legal Syncing',
                  'Predictive Risk Mitigation',
                  'Boardroom-Centric Advocacy'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-[#F7F5F0]">
                    <div className="w-2 h-2 rounded-full bg-[#C6A75E]"></div>
                    <span className="text-sm font-bold uppercase tracking-widest">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 text-center bg-white">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#0F1E2E] mb-8 serif italic">Secure Your Legacy.</h2>
          <p className="text-[#4A5568] mb-12 text-lg font-light">
            Our specialized partners are available for high-level consultations on complex matters. Let us design the shield your ambitions require.
          </p>
          <a 
            href="#/contact" 
            className="inline-block px-12 py-5 bg-[#C6A75E] text-[#0F1E2E] font-bold uppercase tracking-[0.2em] text-xs hover:bg-[#0F1E2E] hover:text-[#F7F5F0] transition-all duration-300 shadow-xl"
          >
            Initiate Consultation
          </a>
        </div>
      </section>
    </div>
  );
};

export default PracticeAreasPage;