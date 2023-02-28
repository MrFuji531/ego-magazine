import React from 'react';
import FeaturePage from '../../../components/feature-page/feature-page.js';

const Venomous = () => {
return (
<FeaturePage
title="Venomous"
publishDate="January 1, 2022"
credits={[
{ text: "Jaya Prisco", link: "https://www.instagram.com/jaya_prisco/" },
{ text: "Alain Potter", link: "https://visionbyalain.com/" },
{ text: "Kahlii Morrison", link: "https://www.instagram.com/kahliimorrison_mua/" },
{ text: "Saphire Gaskas", link: "https://www.saphiremhs.com.au/" },
{ text: "Yalani Johnson", link: "https://www.instagram.com/yalanijohnson/" },
{ text: "Anna Royals", link: "https://www.instagram.com/anna_royals.old/" },
{ text: "Barasa Remijo", link: "https://www.instagram.com/barasa._/" },





]}
mediaType="image"
mediaSrc={require('../../../images/venomous/venomous_1.jpeg')}
mediaAlt="Venomous Main Photo"
poem={`We see a person that dresses different,
Not something we would wear,
Their music is strange to our ears
And they have to us weird hair! \n\

The words they use make no sense,
So we think it must be wrong,
They don’t conform to our attitude,
So we assume they won’t get along. \n\

The color of their skin is no match,
For the color that is ours,
So we thumb our nose in the air,
As if we have super powers. \n\

This describes not everyone,
But does envision many,
For those that are different,
Respect they haven’t any! \n\n\

Black or white, red or brown,
All the colors of the wind,
Remember we are all the same,
If we would just peel back the skin!`}
poemCredit="Goalsv"
poemCreditLink="https://www.allpoetry.com/goalsv"
images={[
{ src: require('../../../images/venomous/venomous-2.jpeg'), alt: "Image 1" },
{ src: require('../../../images/venomous/venomous-3.jpeg'), alt: "Image 2" },
{ src: require('../../../images/venomous/venomous-4.jpeg'), alt: "Image 3" },
{ src: require('../../../images/venomous/venomous-5.jpeg'), alt: "Image 3" },
{ src: require('../../../images/venomous/venomous-6.jpeg'), alt: "Image 3" },
{ src: require('../../../images/venomous/venomous-7.jpeg'), alt: "Image 3" },
]}
learnMoreLink="https://www.example.com/learnmore"
/>
);
};

export default Venomous;