import './contact.css';
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { useRef } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Contact(){
    const [message, setMessage] = useState('');
    const handleChange = (e) => {
        const value = e.target.value;
        if (value.length <= 500) {
        setMessage(value);
    }
    }


    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_yeloyki',
      'template_efeogsf',
      form.current,
      'V1oAGzX88dkxDIcvH' 
    )
    .then((result) => {
      toast.success('Sent successfully!');
      form.current.reset();
  }, (error) => {
      toast.error('An error occurred, please try again later.');
  });
  };
    return(
        <div className='containerC'>
            <div className='msg'>
                <h1>Contact me.</h1>
                <p>I'm always eager to explore new opportunities and take on exciting projects. If you have a project in mind, or just want to say hi, feel free to send me a message.</p>
            </div>
            <form ref={form} onSubmit={sendEmail} className='form'>
                <div className='name-mail'>
                    <div className='name'>
                        <label htmlFor="name">Name</label>
                        <input type="text" name='user_name' placeholder='Your Name' required  />
                    </div>
                    <div className='mail'>
                        <label htmlFor="email">Email</label>
                        <input type="email" name='user_email' placeholder='jhon@contact.com' required  />
                    </div>
                </div>
                <div className='message'>
                
                    <label className='label' htmlFor="message">Message</label>
                    <textarea name='message' value={message} onChange={handleChange} rows={6} className="msg-inpt" maxLength={500} placeholder='Hello there, I Would like to ask you about...' required ></textarea>
                     <div className="char-count">
                        {500 - message.length} /500 Character
                    </div>

                    <div className='send-btn'>
                        <button type='submit'><i class="fa-solid fa-paper-plane"></i> Send</button>
                    </div>
                </div>
                
                
            </form>
             <ToastContainer position="top-right" autoClose={3000} />
            <div className='contact2'>
                <h3>Or contact me with...</h3>
                <div className='social'>
                    <a href="mailto:yassinelmaataoui24@gmail.com"><i class="bi bi-envelope-at"></i> Email</a>
                    <a href="https://www.linkedin.com/in/yassine-el-maataoui-7b029536a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"><i class="fa-brands fa-linkedin"></i>LinkedIn</a>
                    <a href="https://www.instagram.com"><i class="bi bi-instagram"></i> Instagram</a>
                    <a href="http://wa.me/212646342598"><i class="bi bi-whatsapp"></i> Whatssap</a>
                    
                 </div>
            </div>
        </div>
    )
}

export default Contact;