import React from 'react';
import Header from '../../components/Header/Header.js';
import Footer from '../../components/Footer/Footer.js';
import './feature-page.css';

const FeaturePage = (props) => {

  return (
    <div>
      <Header/>
      <div className="feature-page-container">
        <h1 className="title">{props.title}</h1>
        <div className="publish-info">
          <div className="featured">Featured</div>
          <div className="date">{props.publishDate}</div>
        </div>
        <div className="credits">
          {props.credits.map((credit, index) => (
            <a
              href={credit.link}
              key={index}
              className="credit-link"
            >
            {index < props.credits.length  && <span className="separator">•</span>}
              {credit.text}
            </a>
          ))}
        </div>
        <div className="media-item">
          {props.mediaType === 'video' ? (
            <video src={props.mediaSrc} />
          ) : (
            <img src={props.mediaSrc} alt={props.mediaAlt}/>
          )}
        </div>
        <div className="poem">
          <p>{props.poem}</p>
          <a className="poem-credit" href={props.poemCreditLink}>{props.poemCredit}</a>
        </div>
        <div className="image-columns">
          {props.images.map((image, index) => (
            <div key={index} className="image-row">
              <img src={image.src} alt={image.alt} />
              {image.credits && (
                <div className="image-credits">
                  {image.credits.map((credit, creditIndex) => (
                    <a
                      href={credit.link}
                      key={creditIndex}
                      className="image-credit-link"
                    >
                      {creditIndex === 0 && <span className="separator">•</span>}
                      {credit.text}
                      {creditIndex < image.credits.length -1 && <span className="separator">•</span>}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <a href={props.learnMoreLink} className="learn-more-link">Learn More Here</a>
      </div>
      <Footer/>
    </div>
  );
};

export default FeaturePage;