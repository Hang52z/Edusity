import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from '../src/Components/Hero/Hero'
import Programs from './Components/Programs/Program'
import Title from './Components/Title/Title'
import About from './Components/About/About'

const App = () => {
  return (
    <div> 
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle='Our PROGRAM' title='What We Offer'/>
        <Programs/>
        <About/>
      </div>
    </div>
  )
}

export default App