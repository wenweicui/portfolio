import React, { useRef } from 'react';
import SectionHeader from './SectionHeader';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs.sendForm(
      'wenwei_cui_gmail', 
      'template_BqzvVCwv', 
      form.current!, 
      'user_UiknmXYnn7QdPF63nH0Kl'
    ).then((result: any) => {
          console.log(result.text);
      }, (error: any) => {
          console.log(error.text);
      });
  };

  return (
    <form 
      ref={form} 
      onSubmit={sendEmail}
      className="contact-form"
    >
      <label>Name</label>
      <input type="text" name="user_name" placeholder='Enter your name'/>
      <label>Email</label>
      <input type="email" name="user_email" placeholder='Enter your email'/>
      <label>Message</label>
      <textarea name="message" placeholder='Enter your message' />
      <button type="submit">Submit</button>
    </form>
  );
};

const ContactSection = () => {

  return (
    <section
      id="contact-section"
    >
      <SectionHeader>
        Contact
      </SectionHeader>
      <div className='contact-form-container'>
        <h3>Drop me a line below</h3>
        <p>
          Whether you want to get in touch, talk about a project collaboration, 
          or just say hi, I'd love to hear from you. Simply fill the from and send me an email.
        </p>
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactSection;