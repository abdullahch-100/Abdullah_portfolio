import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'


const About = () => {
  return (
    <div id='about' className="about"> 
    <div className="about-title">
      <h1>About Me</h1>
      <img src={theme_pattern} alt="" />
    </div>
     <div className="about-sections">
      <div className="about-left">
        <img src= "images/profile-image.png" alt="" />
      </div>
       <div className="about-right">
        <div className="about-para">
          <h3>I' am a front-end developer specializing in React & Next.js. I create next-gen digital experiences, blending functionality with striking animations. Passionate about modern web design, I aim to deliver creative and precise solutions in every project.</h3>
          <h3>I Collaborate with Global Clients to Create Compelling and Immersive Digital Experiences Through Innovative Web Design and Development.</h3>
        </div>
         <div className="about-skills">
          <div className="about-skill"><p>HTML & CSS</p><hr style={{width: "80%"}} /></div>
          <div className="about-skill"><p>BOOTSTRAP & TAILWIND CSS</p><hr style={{width: "75%"}} /></div>
          <div className="about-skill"><p>JAVASCRIPT</p><hr style={{width: "60%"}} /></div>
          <div className="about-skill"><p>REACT JS</p><hr style={{width: "70%"}} /></div>
          <div className="about-skill"><p>NEXT JS</p><hr style={{width: "50%"}} /></div>
         </div>
       </div>
     </div>
        <div className="about-achivements">
        <div className="about-achivement">
          <h1>10+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achivement">
          <h1>6+</h1>
          <p>MONTHS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achivement">
          <h1>15+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
        </div>
    </div>
  )
}

export default About;
