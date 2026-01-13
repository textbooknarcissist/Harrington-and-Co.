import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section className="py-24 bg-white" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0F1E2E] mb-8 serif">Book a Consultation</h2>
            <p className="text-[#4A5568] mb-12 text-lg leading-relaxed font-light">
              Strategic counsel begins with a conversation. Please complete the form below or contact our partners directly via the channels provided.
            </p>
            
            <div className="space-y-10">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-[#0F1E2E] p-4 rounded-sm shadow-lg">
                  <Phone className="w-6 h-6 text-[#C6A75E]" />
                </div>
                <div className="ml-6">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-[#4A5568]/50 mb-2">Priority Line</h3>
                  <a href="tel:09065624016" className="text-2xl font-bold text-[#0F1E2E] hover:text-[#C6A75E] transition-colors serif">
                    09065624016
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 bg-[#0F1E2E] p-4 rounded-sm shadow-lg">
                  <Mail className="w-6 h-6 text-[#C6A75E]" />
                </div>
                <div className="ml-6">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-[#4A5568]/50 mb-2">Secure Email</h3>
                  <a href="mailto:mfredebel@gmail.com" className="text-2xl font-bold text-[#0F1E2E] hover:text-[#C6A75E] transition-colors break-all serif">
                    mfredebel@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 bg-[#0F1E2E] p-4 rounded-sm shadow-lg">
                  <MapPin className="w-6 h-6 text-[#C6A75E]" />
                </div>
                <div className="ml-6">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-[#4A5568]/50 mb-2">The Office</h3>
                  <address className="not-italic text-2xl font-bold text-[#0F1E2E] serif leading-snug">
                    Harrington House, Suite 101<br />
                    Lagos, Nigeria
                  </address>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#F7F5F0] p-12 rounded-sm shadow-2xl border border-slate-100 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#C6A75E]/5 rounded-bl-full -z-0"></div>
            <form className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="first-name" className="block text-xs font-bold text-[#0F1E2E] mb-2 uppercase tracking-widest">First Name</label>
                  <input
                    type="text"
                    id="first-name"
                    className="w-full px-5 py-4 bg-white border border-slate-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#C6A75E]/20 transition-all"
                    placeholder="Jane"
                  />
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-xs font-bold text-[#0F1E2E] mb-2 uppercase tracking-widest">Last Name</label>
                  <input
                    type="text"
                    id="last-name"
                    className="w-full px-5 py-4 bg-white border border-slate-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#C6A75E]/20 transition-all"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-bold text-[#0F1E2E] mb-2 uppercase tracking-widest">Email Address</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-5 py-4 bg-white border border-slate-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#C6A75E]/20 transition-all"
                  placeholder="jane.doe@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-xs font-bold text-[#0F1E2E] mb-2 uppercase tracking-widest">Nature of Inquiry</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-5 py-4 bg-white border border-slate-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#C6A75E]/20 transition-all"
                  placeholder="Summarize your legal requirements..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-5 bg-[#0F1E2E] text-white font-bold rounded-sm hover:bg-[#C6A75E] hover:text-[#0F1E2E] transition-all duration-300 tracking-[0.2em] uppercase text-xs"
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