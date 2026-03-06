import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots, faTimes, faPlus } from '@fortawesome/free-solid-svg-icons';
import './Contact.css';

export default function Contact() {
  const [isOpen, setIsOpen] = useState(false);
  const form = useRef();

  const toggleModal = () => setIsOpen(!isOpen);

  const sendEmail = (e) => {
    e.preventDefault();
    // Use your EmailJS IDs here
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then(() => {
        alert("Message Sent!");
        setIsOpen(false);
      }, (err) => alert("Error: " + err.text));
  };

  return (
    <>
      {/* 1. THE FLOATING MESSAGE ICON */}
      <div className={`floating-msg-btn ${isOpen ? 'active' : ''}`} onClick={toggleModal}>
        <FontAwesomeIcon icon={isOpen ? faTimes : faCommentDots} />
      </div>

      {/* 2. THE DRIBBBLE-STYLE POPUP */}
      {isOpen && (
        <div className="contact-popup-overlay">
          <div className="dribbble-contact-card">
            
            <div className="card-header">
              <h2>Contact Me</h2>
              <FontAwesomeIcon icon={faPlus} className="sparkle-icon" />
            </div>

            <form ref={form} onSubmit={sendEmail} className="dribbble-form">
              <div className="form-row">
                <div className="form-group">
                  <label>Name</label>
                  <input type="text" name="user_name" placeholder="Enter your Name" required />
                </div>
                <div className="form-group">
                  <label>Surname</label>
                  <input type="text" name="user_surname" placeholder="Enter your Surname" />
                </div>
              </div>

              <div className="form-group">
                <label>Phone Number</label>
                <input type="tel" name="user_phone" placeholder="Enter your number" />
              </div>

              <div className="form-group">
                <label>Email</label>
                <input type="email" name="user_email" placeholder="example@mail.com" required />
              </div>

              <div className="form-group">
                <label>Message</label>
                <textarea name="message" placeholder="Your message here..." rows="2" required />
              </div>

              <button type="submit" className="get-in-touch-btn">
                GET IN TOUCH
                <div className="btn-highlight"></div>
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}