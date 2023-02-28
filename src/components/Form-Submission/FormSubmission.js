import React from 'react';
import './FormSubmission.css';

const FormSubmission = () => {
  return (
    <div className="form-submission">
      <form>
        <div className="form-group">
          <label htmlFor="name">Name*</label>
          <input type="text" id="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Your e-mail*</label>
          <input type="text" id="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <input type="text" id="subject" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Your message*</label>
          <textarea id="message" rows="5" required />
        </div>
      </form>
      </div>
  );
};

export default FormSubmission;
