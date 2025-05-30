import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play_icon.png'
const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className="about-img" />
            <img src={play_icon} alt="" className="play-icon" />
        </div>
        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing Tomorrow's Leaders Today</h2>
            <p>Embark on a transformative educational journey with ouruniversity's comprehensive 
                education programs. Our cutting-edgecurriculum is designed to empower students with 
                the knowledge,skills, and experiences needed to excel in the dynamic field 
                ofeducation.
            </p>
            <p>With a focus on innovation, hands-on learning, and personalizementorship, our 
                programs prepare aspiring educators to make ameaningful impact in classrooms, 
                schools, and communities.
            </p>
            <p>Whether you aspire to become a teacher, administrator,counselor, or educational
                 leader, our diverse range of programsoffers the perfect pathway to achieve 
                 your goals and unlock yourfull potential in shaping the future of education.
            </p>
        </div>
    </div>
  )
}

export default About