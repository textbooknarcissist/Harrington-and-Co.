import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#0F1E2E] border-y border-white/5" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-[#C6A75E] font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Engagement</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#F7F5F0] mb-8 serif">Book a Consultation</h2>
            <p className="text-[#F7F5F0]/60 mb-12 text-lg leading-relaxed font-light">
              Strategic counsel begins with a conversation. Reach out via the channels below or provide your details for a prioritized callback.
            </p>
            
            <div className="space-y-10">
              <div className="flex items-start group">
                <div className="flex-shrink-0 bg-white/5 p-4 rounded-sm border border-white/10 transition-colors group-hover:bg-[#C6A75E]/10 group-hover:border-[#C6A75E]/30">
                  <Phone className="w-5 h-5 text-[#C6A75E]" />
                </div>
                <div className="ml-6">
                  <h3 className="text-[10px] font-bold uppercase tracking-widest text-[#F7F5F0]/30 mb-2">Priority Line</h3>
                  <a href="tel:09065624016" className="text-xl md:text-2xl font-bold text-[#F7F5F0] hover:text-[#C6A75E] transition-colors serif">
                    09065624016
                  </a>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="flex-shrink-0 bg-white/5 p-4 rounded-sm border border-white/10 transition-colors group-hover:bg-[#C6A75E]/10 group-hover:border-[#C6A75E]/30">
                  <Mail className="w-5 h-5 text-[#C6A75E]" />
                </div>
                <div className="ml-6">
                  <h3 className="text-[10px] font-bold uppercase tracking-widest text-[#F7F5F0]/30 mb-2">Secure Email</h3>
                  <a href="mailto:mfredebel@gmail.com" className="text-xl md:text-2xl font-bold text-[#F7F5F0] hover:text-[#C6A75E] transition-colors break-all serif">
                    mfredebel@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="flex-shrink-0 bg-white/5 p-4 rounded-sm border border-white/10 transition-colors group-hover:bg-[#C6A75E]/10 group-hover:border-[#C6A75E]/30">
                  <MapPin className="w-5 h-5 text-[#C6A75E]" />
                </div>
                <div className="ml-6">
                  <h3 className="text-[10px] font-bold uppercase tracking-widest text-[#F7F5F0]/30 mb-2">The Office</h3>
                  <address className="not-italic text-xl md:text-2xl font-bold text-[#F7F5F0] serif leading-snug">
                    Harrington House, Lagos
                  </address>
                </div>
              </div>
            </div>
          </div>

          <div 
            className="p-8 md:p-12 rounded-sm shadow-[0_40px_100px_rgba(0,0,0,0.5)] relative overflow-hidden group border border-[#C6A75E]/20 transition-transform duration-500 hover:-translate-y-2"
            style={{
              backgroundColor: '#0F1E2E',
              backgroundImage: `
                linear-gradient(to right, rgba(198, 167, 94, 0.08) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(198, 167, 94, 0.08) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px'
            }}
          >
            {/* Elegant corner accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#C6A75E]/10 to-transparent rounded-bl-full -z-0"></div>
            
            <form className="space-y-6 relative z-10" action="#" method="POST">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="sm:col-span-1">
                  <label htmlFor="full-name" className="block text-xs font-bold text-[#C6A75E] mb-2 uppercase tracking-widest">Full Name</label>
                  <input
                    type="text"
                    id="full-name"
                    name="full-name"
                    autoComplete="name"
                    required
                    className="w-full px-5 py-4 bg-[#0F1E2E]/50 border border-[#C6A75E]/30 rounded-sm focus:outline-none focus:ring-1 focus:ring-[#C6A75E] transition-all text-[#F7F5F0] placeholder:text-[#F7F5F0]/20"
                    placeholder="John Doe"
                  />
                </div>
                <div className="sm:col-span-1">
                  <label htmlFor="email" className="block text-xs font-bold text-[#C6A75E] mb-2 uppercase tracking-widest">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    autoComplete="email"
                    required
                    className="w-full px-5 py-4 bg-[#0F1E2E]/50 border border-[#C6A75E]/30 rounded-sm focus:outline-none focus:ring-1 focus:ring-[#C6A75E] transition-all text-[#F7F5F0] placeholder:text-[#F7F5F0]/20"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="category" className="block text-xs font-bold text-[#C6A75E] mb-2 uppercase tracking-widest">Legal Counsel Category</label>
                <div className="relative">
                  <select
                    id="category"
                    name="category"
                    required
                    className="w-full px-5 py-4 bg-[#0F1E2E]/80 border border-[#C6A75E]/30 rounded-sm focus:outline-none focus:ring-1 focus:ring-[#C6A75E] transition-all text-[#F7F5F0] appearance-none cursor-pointer"
                  >
                    <option value="" disabled selected className="bg-[#0F1E2E]">Select Subject Area</option>
                    <option value="corporate" className="bg-[#0F1E2E]">Corporate & Commercial</option>
                    <option value="maritime" className="bg-[#0F1E2E]">Maritime & Shipping</option>
                    <option value="ip" className="bg-[#0F1E2E]">Intellectual Property</option>
                    <option value="finance" className="bg-[#0F1E2E]">Banking & Finance</option>
                    <option value="realestate" className="bg-[#0F1E2E]">Real Estate & Probate</option>
                    <option value="dispute" className="bg-[#0F1E2E]">Dispute Resolution</option>
                    <option value="digital" className="bg-[#0F1E2E]">Digital Sovereignty</option>
                    <option value="other" className="bg-[#0F1E2E]">Other Inquiry</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#C6A75E]">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-bold text-[#C6A75E] mb-2 uppercase tracking-widest">Brief Description of Matter</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full px-5 py-4 bg-[#0F1E2E]/50 border border-[#C6A75E]/30 rounded-sm focus:outline-none focus:ring-1 focus:ring-[#C6A75E] transition-all text-[#F7F5F0] placeholder:text-[#F7F5F0]/20"
                  placeholder="Provide a high-level summary..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-5 bg-[#C6A75E] text-[#0F1E2E] font-bold rounded-sm hover:bg-[#F7F5F0] transition-all duration-300 tracking-[0.2em] uppercase text-xs shadow-xl"
              >
                Request Appointment
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;