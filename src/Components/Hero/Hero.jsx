import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark_arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h1>We Ensure better education for a better world</h1>
            <p>At Edusity, we believe in making learning accessible, engaging, and future-ready. Whether you're a student, educator, or lifelong learner, our platform empowers you with cutting-edge tools, interactive courses, and personalized learning experiences. Join us in shaping the future of education—where knowledge knows no limits! 🎓✨</p>
            <button className='btn'>Explore More <img src={dark_arrow} alt="" /> </button>
        </div>
    </div>
  )
}

export default Hero
