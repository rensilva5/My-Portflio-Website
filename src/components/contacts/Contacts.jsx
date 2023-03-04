import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {SiMessenger} from 'react-icons/si'
import {BsWhatsapp} from  'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contacts = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_rz0y9vb', 'template_8detey7', form.current, 'kSaz_8uIYfIf_Ed34')
    e.target.reset()
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact me</h2>

      <div className="container contact">
        <div className="contact_options">
        <article className="contact_option">
          <MdOutlineEmail className='contact_option-icon' />
          <h4>Email</h4>
          <h5>renzoasilva@gmail.com</h5>
          <a href="mailto:renzoasilva@gmail.com" target='_blank'>Send a message</a>
        </article>
        <article className="contact_option">
          <SiMessenger className='contact_option-icon' />
          <h4>Messenger</h4>
          <h5>Facebook</h5>
          <a href="https://m.me/renzo.silvasanchez" target='_blank'>Send a message</a>
        </article>
        <article className="contact_option">
          <BsWhatsapp className='contact_option-icon' />
          <h4>WhatsApp</h4>
          <h5>+1 561 900 ****</h5>
          <a href="https://api.whatsapp.com/send?phone=5619008952" target='_blank'>Send a message</a>
        </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Enter Full Name' required />
          <input type="email" name="email" placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Message' required></textarea>
          <button typeof='submit' className='btn btn-primary'>Send</button>
        </form>
      </div>
    </section>
  )
}

export default Contacts;