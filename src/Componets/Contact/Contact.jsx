import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from'../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {


const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);


    formData.append("access_key", "64eeee58-62d0-4428-8d1b-2a221c0f3935");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };
 


  return (
    <div id='contact' className='contact'>
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>I am currently available to take on new projects, so feel free to send a message about anything that you want me to work on.You can contact anytime</p>
          <div className="contact-details">
            <div className="contact-detail">
            <img src={mail_icon} alt="" /><p>cha873173@gmail.com</p>


            </div>
            <div className="contact-detail">
            <img src={call_icon} alt="" /><p>0312-4264871</p>


            </div>
          <div className="contact-detail">
            <img src={location_icon} alt="" /><p>Pakistan</p>

          </div>
          </div>
        </div>
        <form onSubmit={onSubmit}  className="contact-right">
          <label htmlFor="Your Name">Your NAME</label>
          <input type="text" name="name" id=""  placeholder='Enter Your Nmae'/>
          <label htmlFor="Your Email">Your Email</label>
          <input type="email" name='email' placeholder='Enter Your Email' />
          <label htmlFor="Right Your Message here">Write Your Message</label>
          <textarea name="Message" rows={8} placeholder='enter your message'></textarea>
          <button  type='submit' className='Contact-Submit'>Submit Now</button>

        </form>
      </div>
    </div>
  )
}

export default Contact
