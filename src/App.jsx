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

const App = () => {
  return (
    <div className='min-h-screen bg-black pb-[100vh] relative'>
      <div className="z-0">
        <ParticleBackground />
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