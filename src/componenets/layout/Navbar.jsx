import React, { useEffect } from 'react'
import { Code, Menu, X } from 'lucide-react'
import { navLinks, personalInfo } from '../../utils/constants'
import useScrollSpy from '../../hooks/useScrollSpy'
import { useState } from 'react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuopen] = useState(false);
  const [ isScrolled, setIsScrolled ] = useState(false);
  const activeSection = useScrollSpy(navLinks.map(link => link.id));

  useEffect


  return (
    <div>Navbar</div>
  )
}

export default Navbar