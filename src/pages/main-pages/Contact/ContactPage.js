import React from 'react';
import Header from '../../../components/Header/Header.js';
import Footer from '../../../components/Footer/Footer.js';
import FormSubmission from '../../../components/Form-Submission/FormSubmission';
import './ContactPage.css';


const ContactPage = () => {
  return (
    <div>
      <Header />
      <div className="contact-page">    
        <h1>Contact</h1>
        <FormSubmission /> 
        <button className="submit-button" type="submit">Send</button>
        </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
