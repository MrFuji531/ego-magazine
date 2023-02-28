import React from 'react';
import './HomePage.css';
import Features from '../../../components/Features/Features';
import Header from '../../../components/Header/Header.js';
import Footer from '../../../components/Footer/Footer';

const HomePage = () => {
  return (
    <div className="home-page">
    <Header />      
    <Features />
    <Footer />
    </div>
  );
};

export default HomePage;
