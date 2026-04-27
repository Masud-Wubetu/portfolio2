import React, { useEffect, useState } from 'react'
import { Code, Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'
import { navLinks, personalInfo } from '../../utils/constants'
import { useScrollSpy, scrollToSection } from '../../hooks/useScrollSpy'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Strip '#' from hrefs for scroll spy
  const sectionIds = navLinks.map(link => link.href.replace('#', ''));
  const activeSection = useScrollSpy(sectionIds);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Scrolled state for background
      setIsScrolled(currentScrollY > 20);

      // Visibility logic (Hide on scroll down, show on scroll up)
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);

      // Scroll progress logic
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleNavClick = (href) => {
    const sectionId = href.replace('#', '');
    scrollToSection(sectionId);
    setIsMenuOpen(false);
    setIsVisible(true);
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[1000] w-full transition-all duration-500 ease-in-out ${isScrolled
        ? 'py-4 bg-black/70 backdrop-blur-2xl border-b border-white/10 shadow-2xl'
        : 'py-8 bg-transparent'
        } ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}
      style={{ transform: `translate3d(0, ${isVisible ? '0' : '-100%'}, 0)` }}
    >
      {/* Scroll Progress Bar */}
      <div className='absolute top-0 left-0 h-[3px] bg-primary shadow-[0_0_15px_rgba(168,85,247,0.6)] transition-all duration-150 ease-out'
        style={{ width: `${scrollProgress}%` }} />

      <div className='max-w-[1440px] mx-auto px-8'>

        <div className='flex items-center justify-between'>
          {/* logo */}
          <div className='flex items-center gap-4 group cursor-pointer'
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className='p-2.5 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors duration-300'>
              <Code className='w-7 h-7 text-primary' />
            </div>

            <button
              className='text-3xl font-bold bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent hover:from-primary hover:to-primary/60 transition-all duration-300'
              aria-label='Home'
            >
              {personalInfo.name.split(' ')[0]}<span className='text-primary'>.</span>
            </button>
          </div>

          {/* desktop navigation */}
          <div className='hidden md:flex items-center gap-10'>
            <div className='flex items-center gap-2 bg-white/5 p-1.5 rounded-xl border border-white/10 backdrop-blur-md'>
              {navLinks.map((link) => {
                const sectionId = link.href.replace('#', '');
                const isActive = activeSection === sectionId;

                return (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className={`px-6 py-2.5 rounded-lg text-base font-semibold tracking-wide transition-all duration-300 relative group/nav ${isActive
                      ? 'text-white'
                      : 'text-white/50 hover:text-white'
                      }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="activeNav"
                        className='absolute inset-0 bg-gradient-to-r from-primary/40 to-primary/20 rounded-lg border border-primary/30'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                    <span className='relative z-10'>{link.name}</span>

                    {/* Hover indicator */}
                    {!isActive && (
                      <span className='absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-primary transition-all duration-300 group-hover/nav:w-1/2 opacity-50' />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* CTA button */}
          <div className='hidden md:flex items-center gap-6'>
            <button
              onClick={() => handleNavClick('#contact')}
              className='group relative px-8 py-3 rounded-xl overflow-hidden transition-all duration-300'
            >
              <div className='absolute inset-0 bg-primary opacity-20 group-hover:opacity-30 transition-opacity' />
              <div className='absolute inset-0 border border-primary/50 rounded-xl' />
              <span className='relative text-base font-bold tracking-wider text-white flex items-center gap-3'>
                HIRE ME
                <div className='w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_10px_rgba(168,85,247,0.8)]' />
              </span>
            </button>
          </div>

          {/* mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className='md:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-all'
            aria-label='Toggle menu'
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className='w-7 h-7' /> : <Menu className='w-7 h-7' />}
          </button>
        </div>
      </div>

      {/* mobile menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 transition-all duration-500 ease-in-out border-b border-white/10 overflow-hidden ${isMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
          }`}
      >
        <div className='bg-black/95 backdrop-blur-2xl px-8 py-10 flex flex-col gap-5'>
          {navLinks.map((link) => {
            const sectionId = link.href.replace('#', '');
            const isActive = activeSection === sectionId;

            return (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`text-left px-6 py-4 rounded-2xl text-xl font-semibold transition-all duration-300 ${isActive
                  ? 'text-primary bg-primary/10 border-l-4 border-primary'
                  : 'text-white/70 hover:text-white hover:bg-white/5'
                  }`}
              >
                {link.name}
              </button>
            );
          })}
          <button
            onClick={() => handleNavClick('#contact')}
            className='w-full px-8 py-5 bg-primary text-white text-xl font-bold rounded-2xl hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 mt-4'
          >
            Hire me
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar