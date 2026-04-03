import React from 'react'
import Navbar from './componenets/layout/Navbar'
import Hero from './componenets/sections/Hero'

const App = () => {
  return (
    <div className='min-h-screen bg-black'>
      <Navbar/>

      <main>
        <Hero/>
      </main>
    </div>
  )
}

export default App