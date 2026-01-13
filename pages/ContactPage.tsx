import React from 'react';
import ContactSection from '../components/ContactSection';
import Logo from '../components/Logo';

const ContactPage: React.FC = () => {
  return (
    <div className="bg-[#F7F5F0]">
      {/* Dark Hero Header */}
      <section className="bg-[#0F1E2E] pt-40 pb-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-5 pointer-events-none">
          <Logo className="w-[500px] h-[500px]" light={true} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-[#C6A75E] font-bold tracking-[0.4em] uppercase text-xs mb-6 block">Direct Access</span>
          <h1 className="text-5xl md:text-7xl font-bold text-[#F7F5F0] mb-8 serif leading-tight">
            Consult the Firm.
          </h1>
          <div className="w-24 h-1 bg-[#C6A75E] mb-8 mx-auto"></div>
          <p className="max-w-2xl text-xl text-[#F7F5F0]/70 font-light leading-relaxed mx-auto">
            We respond to elite inquiries with the urgency and discretion they command.
          </p>
        </div>
      </section>

      <ContactSection />
      
      {/* Aesthetic Map Placeholder */}
      <div className="w-full h-[500px] bg-slate-200 relative grayscale group overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center bg-[#0F1E2E]/5 backdrop-blur-sm transition-all group-hover:backdrop-blur-none">
          <div className="text-center px-4 bg-white/90 p-12 border border-[#C6A75E]/20 shadow-2xl">
            <h3 className="text-2xl font-bold text-[#0F1E2E] mb-4 serif uppercase tracking-widest">Global Headquarters</h3>
            <p className="text-[#C6A75E] font-bold text-sm tracking-widest mb-6">LAGOS • LONDON • DUBAI</p>
            <p className="text-slate-500 font-light">Harrington House, Financial District, Lagos</p>
            <div className="mt-8 flex justify-center space-x-4">
               <div className="w-2 h-2 rounded-full bg-[#C6A75E] animate-pulse"></div>
               <span className="text-[10px] font-bold uppercase tracking-widest text-[#0F1E2E]">Active Deployment</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;