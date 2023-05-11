import React, { useState } from 'react';
import './Join.css'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
const Join = () => {
    const form  = useRef()
    const [email, setEmail] = useState('');
    
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_vywb1im', 'template_4f3zj9f', form.current, 'mSDYw1gHkFw-MXIgAfoot')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

       // Logic for sending email
    setEmail(''); // Clear input field after sending email
    }
    return (
        <div className="Join" id="join-us">
            <div className="left-j">
                <hr/>
                <div>
                <span className='strok-text'>READY TO</span>
                <span> LEVEL UP</span>
                </div>
                <div>
                <span> YOUR BODY</span>
                <span className='strok-text'> WITH US?</span>
                </div>
            </div>
            <div className="right-j">
                <form ref={form} action="" className='email-container' onSubmit={sendEmail}>
                    <input type="email" id="emailInput" name='user_email'
                     placeholder='Enter your email address' 
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                     />
                     <button className='btn btn-j' id="sendEmailButton">Join Now</button>
                </form>
            </div>
        </div>
    )
}
export default Join