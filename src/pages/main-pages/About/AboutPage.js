import React from 'react';
import Header from '../../../components/Header/Header.js';
import Footer from '../../../components/Footer/Footer.js';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div>
    <Header />
    <div className="about-page">
      <div className="about-page-content">
        <h1 className="about-title">About</h1>
        <p className="about-description">
          e.g.o. is a digital Fashion Magazine based in Melbourne, Australia. With a background in sociology and a talent for fashion design and styling, the founder and creative director, Jaya Prisco with the help of her dear friend, Benjamin Cummins, decided to combine her two passions and create an online platform that addresses global issues through fashion. With the collaboration of sustainable and slow fashion designers, styling and photography came together to create a narrative and expose social dilemmas. e.g.o. uses fashion and beauty not just for mere aesthetic appearance, but as a tool for spreading social awareness on striking issues. Characterised by a unique combination of eye catching covers, poems, and powerful, statement imageries e.g.o. wants to arouse the interest of the digital generation and establish a new and daring way to approach the fashion world.
        </p>
        <p className="about-copyright">
          All material on the site is the property of either contributor or the individual artist who holds the exclusive rights to its use and distribution. Feel free to share their work, but always name the source and link their individual websites. For any commercial purpose, it is mandatory to contact the photographers or the artists for permission.
        </p>
        <p className="about-credit">
          Creative director & editor in chief,
          <br />
          Jaya Prisco and Benjamin Cummins.
        </p>
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default AboutPage;
