import React from 'react'
import Navbar from './componenets/layout/Navbar'
import Hero from './componenets/sections/Hero'
import About from './componenets/sections/About'
import Skills from './componenets/sections/Skills'
import Projects from './componenets/sections/Projects'
import Services from './componenets/sections/Services'
import Testimonials from './componenets/sections/Testimonials'

const App = () => {
  return (
    <div className='min-h-screen bg-black pb-[100vh]'>
      <Navbar/>

      <main>
        <Hero/>                  
        <About/>
        <Skills/>
        <Projects/>
        <Services/>
        <Testimonials/>
      </main>
    </div>
  )
}

export default App