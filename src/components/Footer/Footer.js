import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="mailing-list">
        <h2 className="mailing-list-title">Join our Mailing list</h2>
        <p className="mailing-list-quote">
          “Fashion is a statement, it has a political role and is a way to highlight the consciousness of the society at that time.”
          <br />
          <span className="quote-credit">- Dayna Simpson</span>
        </p>
        <form>
          <label className="email-address-label">EMAIL ADDRESS:</label>
          <input className="email-address-input" type="email" placeholder="Your email address" />
          <button className="sign-up-button">Sign Up</button>
        </form>
      </div>
      <p className="acknowledgement">
        E.G.O. acknowledges the traditional custodians of the land on which we work, the Wurundjeri and Boon Wurrung people of the Kulin Nation. We acknowledge their continued connection and contribution to land, water and community, and pay our respects to Elders past, present and emerging. Sovereignty was never ceded; this always was, always will be, Aboriginal land.
      </p>
      <p className="copyright">
        &copy; E.G.O. Magazine Art - Jaya Prisco - Marion avenue, Brunswick West, 3055, Victoria, Australia
      </p>
      <p className="privacy-policy">
        <a href="#">Privacy Policy</a> | <a href="#">Cookie Policy</a>
      </p>
      <div className="instagram-icon">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </div>
    </footer>
  );
};

export default Footer;
