import React from 'react'
import Navbar from './componenets/layout/Navbar'
import Hero from './componenets/sections/Hero'
import About from './componenets/sections/About'
import Skills from './componenets/sections/Skills'
import Projects from './componenets/sections/Projects'
import Testimonials from './componenets/sections/Testimonials'
import Contact from './componenets/sections/Contact'
import Footer from './componenets/layout/Footer'
import ParticleBackground from './componenets/backgrounds/ParticleBackground'
import CustomCursor from './componenets/ui/CustomCursor'

const App = () => {
  return (
    <div className='min-h-screen relative'>
      <CustomCursor />
      {/* Background Layers */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <ParticleBackground />
        
        {/* Subtle Fixed Glows for Depth */}
        <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[20%] right-[-5%] w-[35%] h-[35%] bg-blue-500/5 rounded-full blur-[100px]" />
        <div className="absolute top-[30%] right-[10%] w-[25%] h-[25%] bg-primary/3 rounded-full blur-[80px]" />
      </div>
      <Navbar />

      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}

export default App