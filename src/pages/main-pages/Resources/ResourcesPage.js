import React from 'react';
import './ResourcesPage.css';
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';
import { Link } from 'react-router-dom';


const ResourcesPage = () => {
  return (
    <div>
      <Header />
      <div className="resources-page">
      <h1 className="title">Resources</h1>
      <div className="images">
        <div className="image-container">
          <Link to="/racism">
          <img src={require('../../../images/Racism.jpeg')} alt="Racism" className="resources-image" />
          </Link>
          <Link to="/racism" className="image-title">Racism</Link>
        </div>
        <div className="image-container">
          <img src={require('../../../images/mental-health.jpeg')} alt="Mental Health and Mood Disorders" className="resources-image" />
          <p className="image-title">Mental Health and Mood Disorders</p>
        </div>
        <div className="image-container">
          <img src={require('../../../images/body-image.jpeg')} alt="Body Image and Mental Health" className="resources-image" />
          <p className="image-title">Body Image and Mental Health</p>
        </div>
        <div className="image-container">
          <img src={require('../../../images/homelesness.jpeg')} alt="Homelessness" className="resources-image" />
          <p className="image-title">Homelessness</p>
        </div>
        <div className="image-container">
          <img src={require('../../../images/womens-rights.jpeg')} alt="Women's Rights" className="resources-image" />
          <p className="image-title">Women's Rights</p>
        </div>
        <div className="image-container">
          <img src={require('../../../images/gender-fluidity.jpeg')} alt="Gender Fluidity and Androgyny" className="resources-image" />
          <p className="image-title">Gender Fluidity and Androgyny</p>
        </div>
        <div className="image-container">
          <img src={require('../../../images/plastic-pollution.jpeg')} alt="Plastic Pollution" className="resources-image" />
          <p className="image-title">Plastic Pollution</p>
        </div>
        <div className="image-container">
          <img src={require('../../../images/global-warming.jpeg')} alt="Global Warming" className="resources-image" />
          <p className="image-title">Global Warming</p>
        </div>
        <div className="image-container">
          <img src={require('../../../images/abortion-rights.jpeg')} alt="Abortion Rights" className="resources-image" />
          <p className="image-title">Abortion Rights</p>
        </div>
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default ResourcesPage;
