import React from 'react'
import './Hero.css'
import AnchorLink from 'react-anchor-link-smooth-scroll';
// import profile_img from '../../assets/profile_img.svg'

const Hero = () => {
  return (
    <div id='home' className='hero'>

      
     
      <h1><span>I am Abdullah Chaudhary</span> Front End Web Developer</h1>
      <p>I am Abdullah Chaudhary is a talented front-end web developer specializing in React.js. With a strong focus on creating dynamic and user-friendly interfaces, he brings a keen eye for design and functionality.  </p>

      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className = 'anchor-link' offset={50} href='#contact' >Connect With Me</AnchorLink></div>
        <div className="hero-resume">My Resume</div>
      </div>
      
      
    </div>
  )
}

export default Hero



