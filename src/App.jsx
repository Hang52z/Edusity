import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from '../src/Components/Hero/Hero'
import Program from './Components/Programs/Program'

const App = () => {
  return (
    <div> 
      <Navbar/>
      <Hero/>
      <Program/>
    </div>
  )
}

export default App