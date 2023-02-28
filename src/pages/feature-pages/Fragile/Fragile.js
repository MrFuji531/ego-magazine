import React from 'react';
import FeaturePage from '../../../components/feature-page/feature-page.js';

const Fragile = () => {
return (
<FeaturePage
title="Fragile"
publishDate="September 21st 2022"
credits={[
{ text: "Jaya Prisco", link: "https://www.instagram.com/jaya_prisco/" },
{ text: "Alain Potter", link: "https://visionbyalain.com/" },
{ text: "Saphire Gaskas", link: "https://www.saphiremhs.com.au/" },
{ text: "Bella Donovan", link: "https://www.instagram.com/b00biegloom/" },
{ text: "Ryam Chu", link: "https://www.instagram.com/rychu_55/" },

]}
mediaType="image"
mediaSrc={require('../../../images/fragile/fragile-1.jpeg')}
mediaAlt="Fragile Main Photo"
poem={`Like a storm raging on
Thundering through my heart
Spiralling out of control
No where to turn
No positive use for the storm
Battering my emotions \n\

The thunder can only last for so long
Then it will morph into motivation
To rise from the hate and bile
Like a flower slowly blossoming
After a challenging winter\n\

BROKEN NOT DESTROYED`}
poemCredit="Megan Ponton"
poemCreditLink="https://allpoetry.com/Megan_Ponton"
images={[
{ src: require('../../../images/fragile/fragile-2.jpeg'), alt: "Image 1", credits: [ { text:"Dress by Yanru Chen", link: "https://www.instagram.com/yanru___chen/"}] },
{ src: require('../../../images/fragile/fragile-3.jpeg'), alt: "Image 2", credits: [ { text:"Dress by Yanru Chen", link: "https://www.instagram.com/yanru___chen/"}] },
{ src: require('../../../images/fragile/fragile-4.jpeg'), alt: "Image 3", credits: [ { text:"Black and white pants by Lazy Susan", link: "https://www.instagram.com/lazysusan.clothing/"} ] },
{ src: require('../../../images/fragile/fragile-5.jpeg'), alt: "Image 4", credits: [ { text:"Mask by Jaya Prisco", link: "https://www.instagram.com/jaya_prisco/"} ] },
{ src: require('../../../images/fragile/fragile-6.jpeg'), alt: "Image 5", credits: [ { text:"Garments by Jaya Prisco", link: "https://www.instagram.com/jaya_prisco/"}] },
{ src: require('../../../images/fragile/fragile-7.jpeg'), alt: "Image 6", credits: [ { text:"Garments by Jaya Prisco", link: "https://www.instagram.com/jaya_prisco/"} ] }
]}
learnMoreLink="https://www.example.com/learnmore"
/>
);
};

export default Fragile;