import React from 'react';
import { Mail, Phone, Twitter, Instagram, Linkedin, MapPin, ArrowUpRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0F1E2E] text-[#F7F5F0] pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          
          {/* Column 1: Contact */}
          <div className="space-y-8 order-last lg:order-first">
            <div>
              <h3 className="text-lg font-bold serif mb-8 tracking-widest text-[#C6A75E] uppercase">Contact HQ</h3>
              <div className="space-y-6">
                <a href="mailto:mfredebel@gmail.com" className="group flex items-center gap-4 py-3 border-b border-white/5 hover:border-[#C6A75E]/30 transition-all">
                  <div className="w-10 h-10 bg-white/5 flex items-center justify-center rounded-sm group-hover:bg-[#C6A75E]/10">
                    <Mail size={16} className="text-[#C6A75E]" />
                  </div>
                  <div>
                    <span className="block text-[10px] text-white/30 uppercase tracking-[0.2em] font-bold">Inquiries</span>
                    <span className="block text-sm font-medium group-hover:text-[#C6A75E] transition-colors">mfredebel@gmail.com</span>
                  </div>
                </a>
                
                <a href="tel:09065624016" className="group flex items-center gap-4 py-3 border-b border-white/5 hover:border-[#C6A75E]/30 transition-all">
                  <div className="w-10 h-10 bg-white/5 flex items-center justify-center rounded-sm group-hover:bg-[#C6A75E]/10">
                    <Phone size={16} className="text-[#C6A75E]" />
                  </div>
                  <div>
                    <span className="block text-[10px] text-white/30 uppercase tracking-[0.2em] font-bold">Reception</span>
                    <span className="block text-sm font-medium group-hover:text-[#C6A75E] transition-colors">09065624016</span>
                  </div>
                </a>

                <div className="group flex items-center gap-4 py-3">
                  <div className="w-10 h-10 bg-white/5 flex items-center justify-center rounded-sm">
                    <MapPin size={16} className="text-[#C6A75E]" />
                  </div>
                  <div>
                    <span className="block text-[10px] text-white/30 uppercase tracking-[0.2em] font-bold">Address</span>
                    <span className="block text-sm font-medium">Harrington House, Lagos</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="lg:pl-10">
            <h3 className="text-lg font-bold serif mb-8 tracking-widest text-[#C6A75E] uppercase">Quick Access</h3>
            <ul className="space-y-4">
              {['Home', 'About', 'Practice', 'Blog', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`} className="text-sm text-[#F7F5F0]/50 hover:text-[#C6A75E] hover:pl-2 transition-all duration-300 flex items-center group">
                    <span className="w-1.5 h-1.5 bg-[#C6A75E]/40 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Legal & Privacy */}
          <div className="lg:pl-5">
            <h3 className="text-lg font-bold serif mb-8 tracking-widest text-[#C6A75E] uppercase">Compliance</h3>
            <ul className="space-y-4">
              {['Privacy Policy', 'Terms of Engagement', 'Cookie Disclaimer', 'Client Portal', 'Career Inquiries'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-[#F7F5F0]/50 hover:text-[#C6A75E] transition-all duration-300 flex items-center justify-between group">
                    {item}
                    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-40 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Engagement */}
          <div>
            <h3 className="text-lg font-bold serif mb-8 tracking-widest text-[#C6A75E] uppercase">Connect</h3>
            <p className="text-xs text-white/40 leading-relaxed mb-8 font-light italic">
              "Providing elite legal representation across jurisdictions with unwavering commitment."
            </p>
            <div className="flex gap-4">
              {[
                { icon: Twitter, href: '#', label: 'Twitter' },
                { icon: Linkedin, href: '#', label: 'LinkedIn' },
                { icon: Instagram, href: '#', label: 'Instagram' }
              ].map((social, i) => (
                <a 
                  key={i}
                  href={social.href} 
                  aria-label={`Follow us on ${social.label}`}
                  className="w-12 h-12 border border-white/10 flex items-center justify-center hover:bg-[#C6A75E] hover:border-[#C6A75E] hover:text-[#0F1E2E] transition-all duration-500 rounded-sm"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 text-center md:text-left">
            <p className="text-[10px] text-white/30 uppercase tracking-[0.4em] font-bold">
              Harrington and Co
            </p>
            <div className="flex gap-6 text-[10px] text-white/20 uppercase tracking-widest">
              <span>NGA Bar Association</span>
              <span>•</span>
              <span>Intl Legal Counsel</span>
            </div>
          </div>
          <p className="text-[10px] text-white/30 uppercase tracking-widest font-light">
            © {new Date().getFullYear()} All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;