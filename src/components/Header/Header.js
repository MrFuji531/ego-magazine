import React from 'react';
import { Link } from 'react-router-dom';
import logo300 from '../../images/logo-300.png';
import logo600 from '../../images/logo-600.png';
import './Header.css';


const Header = () => {
  return (
    <div className="home-page">
      <img className='logo'
        src={logo600}
        srcSet={`${logo300} 300w, ${logo600} 600w`}
        alt="Ego Magazine Logo"
      />
      <nav className="menu">
        <Link className="menu-item" to="/">Home</Link>
        <Link className="menu-item" to="/resources">Resources</Link>
        <Link className="menu-item" to="/about">About</Link>
        <Link className="menu-item" to="/submissions">Submissions</Link>
        <Link className="menu-item" to="/contact">Contact</Link>
      </nav>
    </div>
  );
};

export default Header;
