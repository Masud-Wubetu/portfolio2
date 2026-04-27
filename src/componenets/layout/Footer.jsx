import React from 'react'
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiHeart, FiArrowUp } from 'react-icons/fi'
import { personalInfo, navLinks, socialLinks } from '../../utils/constants'
import { scrollToSection } from '../../hooks/useScrollSpy'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  const handleNavClick = (e, href) => {
    e.preventDefault();
    const sectionId = href.replace('#', '');
    scrollToSection(sectionId);
  }

  return (
    <footer className="relative border-t border-white/5 text-gray-400 bg-[#080B12] pt-24 pb-12 overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-transparent rounded-full blur-[120px] pointer-events-none -mr-64 -mb-64" />
      
      <div className="max-w-[1440px] mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-transparent rounded-xl flex items-center justify-center border border-primary/20">
                <span className="text-primary font-medium tracking-tighter text-xl">M</span>
              </div>
              <h3 className="text-3xl font-medium tracking-tighter text-white tracking-tighter">
                Masud <span className="text-primary">Wubetu.</span>
              </h3>
            </div>
            <p className="text-lg leading-relaxed text-gray-400 max-w-md">
              Architecting high-performance digital experiences with a focus on engineering excellence and aesthetic precision.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a 
                  key={social.name}
                  href={social.url} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="w-12 h-12 rounded-xl bg-transparent border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white hover:-translate-y-1 transition-all duration-300 group"
                  aria-label={social.name}
                >
                  {social.name === 'GitHub' && <FiGithub size={20} />}
                  {social.name === 'LinkedIn' && <FiLinkedin size={20} />}
                  {social.name === 'Twitter' && <FiTwitter size={20} />}
                  {social.name === 'Email' && <FiMail size={20} />}
                </a>
              ))}
            </div>
          </div>
          
          {/* Navigation Column */}
          <div className="md:col-span-3">
            <h4 className="text-white font-medium uppercase tracking-widest text-xs mb-8">Navigation</h4>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <button 
                    onClick={(e) => handleNavClick(e, link.href)} 
                    className="text-gray-400 hover:text-primary font-medium transition-all duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-4" />
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="md:col-span-4">
            <h4 className="text-white font-medium uppercase tracking-widest text-xs mb-8">Get in Touch</h4>
            <div className="space-y-6">
              <a href={`mailto:${personalInfo.email}`} className="block group">
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-1 group-hover:text-primary transition-colors">Email Me</p>
                <p className="text-xl font-medium text-white group-hover:text-primary transition-colors">{personalInfo.email}</p>
              </a>
              <div className="block">
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Location</p>
                <p className="text-xl font-medium text-white">{personalInfo.location}</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6 text-sm">
            <p>© {currentYear} {personalInfo.name}</p>
            <span className="w-1 h-1 rounded-full bg-transparent0" />
            <p className="flex items-center gap-2">
              Built with <FiHeart size={14} className="text-primary fill-primary/20" /> by Antigravity
            </p>
          </div>
          
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group flex items-center gap-3 text-sm font-medium text-white uppercase tracking-widest hover:text-primary transition-all"
          >
            Back to Top
            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-primary group-hover:bg-transparent transition-all">
              <FiArrowUp size={16} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer