import React, { useState } from 'react';
import './Features.css';
import { Link } from 'react-router-dom';


const Feature = (props) => {
  return (
    <div className="feature">
    <Link to={props.link}>
      <img
        src={props.image}
        alt={props.title}
        className="feature-image"
      />
    </Link>
    <Link to={props.link}>
      <h2 className="feature-title">{props.title}</h2>
    </Link>
      <p className="feature-description">{props.description}</p>
      <Link to={props.link} className="feature-link">Read More</Link>
    </div>
  );
};

const Features = () => {
  const [featuresToShow, setFeaturesToShow] = useState(6);
  const features = [
    {
      image: require('../../images/venomous.jpeg'),
      title: 'Venomous',
      description: 'Featured October 27th 2022 • Jaya Prisco • Alain Pottier • Kahlii Morrison •Saphire Gaskas • Yalani Johnson • Anna Royals • Barasa Remijò',
      link: `/venomous`
    },
    {
      image: require('../../images/fragile.jpeg'),
      title: 'Fragile',
      description: 'Featured September 21st 2022 • Jaya Prisco • Alain Pottier • Saphire Gaskas • Bella Donovan • Ryan Chu',
      link: `/fragile`
    },
    {
      image: require('../../images/worthy.jpg'),
      title: 'Worthy',
      description: 'Featured July 21st 2022 • Jaya Prisco • Mayah Lasky • Taylor Bennie-Faull • Holden',
      link: `/worthy`
    },
    {
      image: require('../../images/solidarity.jpeg'),
      title: 'Solidarity',
      description: 'Featured May 30th 2022 • Jaya Prisco • Jaida the Creator • Saphire Gaskas • Moses • Tamasin',
      link: `/solidarity`
    },
    {
      image: require('../../images/phenomenally-women.jpeg'),
      title: 'Phenomenally Women',
      description: 'Featured March 8th 2022 • Jaya Prisco • Alain Pottier • Yumi Yoshida • Freja',
      link: `/women`
    },
    {
      image: require('../../images/fluid.jpeg'),
      title: 'Fluid',
      description: 'Featured February 4th, 2022 • Nicole Hobbs • Jaya Prisco • Aimee Balint •Bryce  • Bethany •  Dear momYou’ve always wanted',
      link: `/fluid`
    },
    {
      image: require('../../images/fake-islands.jpeg'),
      title: 'Fake Islands',
      description: 'Featured January 10th, 2022 • Jaya Prisco • Mayah Eden Lasky • Milly Carmichael  • Yumu',
      link: `/fake-islands`
      },
      {
      image: require('../../images/the-mother.jpeg'),
      title: 'The Mother',
      description: 'Featured December 4th, 2021 • Alain Pottier • Jaya Prisco • Aleena Shaji • Natasha Lancaster • Kamila Gray',
      link: `/the-mother`
      },
      {
      image: require('../../images/my-choice.jpeg'),
      title: 'My Choice',
      description: 'Featured December 4th, 2021 • Sulaiman Enayatzada • Jaya Prisco • Harriet Ripley • Mami Metherell • Saphire Gaskas',
      link: `/my-choice`
      },
  ];

  const handleLoadMore = () => {
    setFeaturesToShow(featuresToShow + 6);
  };

  return (
    <div className="features">
      <h2 className="features-title">Features</h2>
      {features.slice(0, featuresToShow).map((feature, index) => (
        <Feature
          key={index}
          image={feature.image}
          title={feature.title}
          description={feature.description}
          link={feature.link}
        />
      ))}
      {featuresToShow < features.length && (
        <button className="load-more-button" onClick={handleLoadMore}>Load More</button>
      )}
    </div>
  );
};

export default Features;