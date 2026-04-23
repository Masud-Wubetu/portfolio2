import React from 'react'
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiHeart } from 'react-icons/fi'
import { personalInfo, navLinks } from '../../utils/constants'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-gray-900 border-t border-gray-800 text-gray-300">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 mb-8 border-b border-gray-800 pb-10">
          <div className="text-center md:text-left max-w-sm">
            <h3 className="text-2xl font-bold text-white mb-4">Masud <span className="text-blue-500">Wubetu</span></h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              A full-stack developer dedicated to building modern, robust, and beautiful web applications. Let's create something amazing together.
            </p>
            <div className="flex items-center justify-center md:justify-start gap-4">
              <a href="https://github.com/Masud-Wubetu" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all text-gray-400">
                <FiGithub size={18} />
              </a>
              <a href="https://www.linkedin.com/in/masud-wubetu-15ab93363/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all text-gray-400">
                <FiLinkedin size={18} />
              </a>
              <a href={`mailto:${personalInfo.email}`} className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all text-gray-400">
                <FiMail size={18} />
              </a>
            </div>
          </div>
          
          <div className="flex gap-16 text-center md:text-left">
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>© {currentYear} {personalInfo.name}. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with <FiHeart size={14} className="text-red-500 fill-red-500" /> by {personalInfo.name}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer