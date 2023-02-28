import React from 'react';
import Header from '../../../components/Header/Header.js';
import Footer from '../../../components/Footer/Footer.js';
import './SubmissionsPage.css';
import FormSubmission from '../../../components/Form-Submission/FormSubmission.js';

const SubmissionsPage = () => {
  return (
    <div>
    <Header />   
<div className="submissions-page">
      <h1>Submissions</h1>
      <p>Our platform accepts submissions. Please send us via email high resolution photos featuring minimum three different looks with all credits for clothes and team members. Please note that we only consider ethical and slow fashion designers. Once reviewed and approved by our team, your content will be exposed on our homepage and social media. If you are interested in working with us, please fill the form below.</p>
      <p>Thank you for choosing E.G.O. magazine.</p>
      <FormSubmission />   
        <div className="form-group">
          <label htmlFor="file">Choose file</label>
          <input type="file" id="file" />
        </div>
        <button className="submit-button" type="submit">Send</button>
      {/* </form> */}
      </div>
      <Footer />
    </div>
  );
};

export default SubmissionsPage;
