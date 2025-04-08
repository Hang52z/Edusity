import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from '../src/Components/Hero/Hero'
import Programs from './Components/Programs/Program'

const App = () => {
  return (
    <div> 
      <Navbar/>
      <Hero/>
      <div className="container">
      <Programs/>
      </div>
    </div>
  )
}

export default App