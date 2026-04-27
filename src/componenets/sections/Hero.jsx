import React from 'react'
import { FiMail, FiLinkedin, FiGithub } from 'react-icons/fi';
import { personalInfo } from '../../utils/constants';
import { scrollToSection } from '../../hooks/useScrollSpy';
import FadeIn from '../animations/FadeIn';
import { motion } from 'framer-motion';
import TypewriterText from '../animations/TypewriterText';
import profilePicture from '../../assets/image.png'

const Hero = () => {
  return (
    <section id="home" className='relative min-h-screen flex items-center overflow-hidden bg-transparent pt-20'>
      {/* Background elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-transparent rounded-full blur-[120px] pointer-events-none" />

      {/* content container */}
      <div className='relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 w-full'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-16 items-center'>

          {/*Left column - content */}
          <div className='text-left lg:col-span-7'>
            <FadeIn delay={0}>
              <div className="mb-6 flex items-center">
                <span className="text-3xl md:text-4xl font-medium tracking-wide text-primary drop-shadow-[0_0_15px_rgba(122,19,255,0.4)]">
                  Hello
                </span>
                <span className="text-3xl md:text-4xl ml-3 animate-pulse inline-block origin-[70%_70%]">👋</span>
              </div>
            </FadeIn>

            <FadeIn delay={100}>
              <h1 className='text-5xl md:text-7xl font-medium tracking-tighter text-white mb-8 tracking-tight'>
                I am <span className="relative inline-block">
                  Masud
                  <span className="absolute -bottom-2 left-0 w-full h-1.5 bg-primary/80 rounded-full shadow-[0_0_15px_rgba(122,19,255,0.6)]"></span>
                </span> Wubetu
              </h1>
            </FadeIn>

            <FadeIn delay={200}>
              <div className="mb-12 h-16 md:h-10">
                <TypewriterText 
                  texts={[
                    "I build systems that don't break at scale.",
                    "I architect high-performance digital solutions.",
                    "I transform complex logic into elegant code.",
                    "I engineer seamless full-stack experiences.",
                    "I craft robust architectures for the modern web."
                  ]} 
                />
              </div>
            </FadeIn>

            <FadeIn delay={300}>
              <div className="flex items-center gap-6 mb-12">
                <a href={`mailto:${personalInfo.email}`} className="text-gray-400 hover:text-primary transition-colors hover:scale-110 duration-300">
                  <FiMail className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/in/masud-wubetu-15ab93363/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-primary transition-colors hover:scale-110 duration-300">
                  <FiLinkedin className="w-6 h-6" />
                </a>
                <a href="https://github.com/Masud-Wubetu" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-primary transition-colors hover:scale-110 duration-300">
                  <FiGithub className="w-6 h-6" />
                </a>
              </div>
            </FadeIn>

            <FadeIn delay={400}>
              <div className='flex flex-wrap items-center gap-6'>
                <button
                  onClick={() => scrollToSection('contact')}
                  className='px-8 py-3 rounded-lg border border-primary text-white bg-transparent hover:bg-primary/10 hover:shadow-[0_0_20px_rgba(122,19,255,0.3)] transition-all duration-300 font-mono text-sm tracking-wide uppercase'
                >
                  Let's Talk
                </button>
                <a
                  href="/Resume.pdf"
                  target="_blank"
                  className='px-8 py-3 rounded-lg border border-gray-600 text-gray-300 hover:text-white hover:border-gray-400 hover:bg-transparent transition-all duration-300 font-mono text-sm tracking-wide uppercase'
                >
                  Download CV
                </a>
              </div>
            </FadeIn>
          </div>

          <div className='lg:col-span-5 flex justify-center lg:justify-end'>
            <FadeIn delay={300}>
              <motion.div
                className='relative group'
              >
                {/* Floating clean image */}
                <div className='relative overflow-hidden rounded-2xl w-[320px] h-[400px] md:w-[400px] md:h-[500px] shadow-[0_0_40px_rgba(122,19,255,0.15)] border border-primary/20 group-hover:border-primary bg-[#0f1524] flex items-center justify-center'>
                  <div className='absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent opacity-50' />
                  <img
                    src={profilePicture}
                    alt='Masud Wubetu'
                    className='w-full h-full object-cover'
                  />
                </div>

                {/* Decorative neon dots */}
                <div className="absolute -top-6 -right-6 w-12 h-12 border-t-2 border-r-2 border-primary/50 rounded-tr-xl opacity-0 group-hover:opacity-100"></div>
                <div className="absolute -bottom-6 -left-6 w-12 h-12 border-b-2 border-l-2 border-primary/50 rounded-bl-xl opacity-0 group-hover:opacity-100"></div>
              </motion.div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero