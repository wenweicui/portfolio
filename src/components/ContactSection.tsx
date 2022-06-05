import React, { useRef, useState } from "react";
import SectionHeader from "./SectionHeader";
import emailjs from "@emailjs/browser";

const socialLinks = [
  {
    name: "Github",
    url: "https://github.com/wenweicui",
    className: "fab fa-github",
  },
  {
    name: "Dribbble",
    url: "https://dribbble.com/williamcui",
    className: "fab fa-dribbble",
  },
  {
    name: "Linkedin",
    url: "https://ca.linkedin.com/in/wenweicui",
    className: "fab fa-linkedin",
  },
];

const ContactForm = () => {
  const [buttonText, setButtonText] = useState("Submit");
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "wenwei_cui_gmail",
        "template_BqzvVCwv",
        form.current!,
        "user_UiknmXYnn7QdPF63nH0Kl"
      )
      .then(
        (result: any) => {
          console.log(result);
          if (result.status === 200) {
            setButtonText("Message Sent ✓");
            setTimeout(function () {
              setButtonText("Submit");
            }, 5000);
          }
        },
        (error: any) => {
          if (error) {
            setButtonText("Something went wrong, please try agian later");
            setTimeout(function () {
              setButtonText("Submit");
            }, 5000);
          }
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="contact-form">
      <label>Name</label>
      <input type="text" name="user_name" placeholder="Enter your name" />
      <label>Email</label>
      <input type="email" name="user_email" placeholder="Enter your email" />
      <label>Message</label>
      <textarea name="message" placeholder="Enter your message" />
      <button type="submit">{buttonText}</button>
    </form>
  );
};

const ContactSection = () => {
  return (
    <section id="contact-section">
      <SectionHeader>Contact</SectionHeader>
      <div className="contact-form-container">
        <h3>Drop me a line below</h3>
        <p>
          Whether you want to get in touch, talk about a project collaboration,
          or just say hi, I'd love to hear from you. Simply fill the from and
          send me an email.
        </p>
        <ContactForm />
        <div className="contact-social-group">
          {socialLinks &&
            socialLinks.map((item) => {
              return (
                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  className="social-icon"
                  rel="noreferrer"
                >
                  <i className={item.className} />
                  {item.name}
                </a>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
