import React, { useEffect } from 'react'
import { Code, Menu, X } from 'lucide-react'
import { navLinks, personalInfo } from '../../utils/constants'
import useScrollSpy from '../../hooks/useScrollSpy'
import { useState } from 'react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuopen] = useState(false);
  const [ isScrolled, setIsScrolled ] = useState(false);
  const activeSection = useScrollSpy(navLinks.map(link => link.id));

  useEffect(() => {
    const handleScroll = () => {
       setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () =>  window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId);
    setIsMenuopen(false);
  }



  return (
    <nav className={`ixed top-0 left-0 right-0 z-1000 w-full  py-4 transition-all duration-300 ${isScrolled
            ? 'bg-black/30 backdrop-blur-lg'
            : 'bg-transparent'
            }`}
         style={{ transfrom: 'translate3d(0, 0, 0)'}}>
          <div className=''>
            <div className=''>

            </div>
          </div>

    </nav>
  )
}

export default Navbar