import React from 'react';
import './Footer.css';
import user_icon from '../../assets/user_icon.svg'





const Footer = () => {
  return (
    <div id='' className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
          <h1>AC-CREATIONS</h1>
          <p>I am Abdullah Chaudhary is a talented front-end web developer specializing in React.js.</p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
             <img src={user_icon} alt="" />
             <input type="email" placeholder='Enter your email' />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">

        </p>
        <div className="footer-bottom-right">
          <p>Term of Services</p>
          <p>Privacy Policy</p>
          <p>Connect With Me</p>
        </div>
      </div>
                        
    </div>
  )
}

export default Footer
