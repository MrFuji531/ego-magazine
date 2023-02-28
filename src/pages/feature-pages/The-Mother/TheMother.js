import React from 'react';
import FeaturePage from '../../../components/feature-page/feature-page.js';

const TheMother = () => {
return (
<FeaturePage
title="The Mother"
publishDate="December 4th 2021"
credits={[
{ text: "Alain Pottier", link: "https://visionbyalain.com/" },
{ text: "Jaya Prisco", link: "https://www.instagram.com/jaya_prisco/" },
{ text: "Aleena Shaji", link: "https://www.instagram.com/aleenashaji/" },
{ text: "Natasha Lancaster", link: "https://www.instagram.com/natashaalancaster/" },
{ text: "Kamila Gray", link: "https://www.instagram.com/pearsparkle/" },
{ text: "Kara lacobellis", link: "https://www.instagram.com/kitsch.makeup.world/" },

]}
mediaType="video"
mediaSrc={require('../../../images/the-mother/the-mother-vid.mov')}
mediaAlt="The Mother audio"
poem={`Is global warming an on volcano?
Are the world leaders aware and know?
Do they know entire universe is on fire?
Industries and pollution sill they admire, \n\

Weather change and unseasoned rains,
Flood’s havoc is worry main,
Everything to loose and nothing to gain,
All efforts nothing but going in vain \n\

World’s largest nations flout the rules,
Advise other nations and look fools,
Unseasonable floods and rain in deserts,
They held meetings only for concerts, \n\

Glaciers and drifting and melting,
Cold regions boil and are sweating,
Human survival is at stake,
People not bother and not awake, \n\

Sea and oceans may swell,
Waves may sweep and dwell,
Shores may be wiped out and washed,
Destruction all over and fear unleashed, \n\

Nothing will be left and saved,
Nature’s fury only paved,
Digging grave for self and others,
Who has time to think and bothers, \n\

Forests are over and vanishing,
Green belt only in name and finishing,
Oil, gas, smoke polluting the air,
You will find children with white hair, \n\

Diseases of several kinds and no cure,
Unnatural death is certain and for sure,
We displease the nature and invite wrath,
Inhaling poison and difficult breath, \n\

One fifth of land will be submerged,
Sea will rise and can’t be caged,
Situation alarming and can’t be managed,
No solution in sight and steps not arranged, \n\

Something to be done in earnestness,
Industries can thrive but with neatness,
Water can be used but with pureness,
Humans to be saved with equal fitness \n\

Can we not be serious again?
Back to nature and energy regain,
Lovely fields and fresh air,
Will the efforts not be fair?`}
poemCredit="Mehta Hasmukh Amathalal"
poemCreditLink="https://www.poemhunter.com/hasmukh-amathalal/"
images={[
{ src: require('../../../images/the-mother/the-mother-1.jpeg'), alt: "Image 1", credits: [ { text:"Jewellery by Sveva Collection", link: "https://www.instagram.com/svevacollection/"}] },
{ src: require('../../../images/the-mother/the-mother-2.jpeg'), alt: "Image 2", credits: [ { text:"Jewellery by Sveva Collection", link: "https://www.instagram.com/svevacollection/"}] },
{ src: require('../../../images/the-mother/the-mother-3.jpeg'), alt: "Image 3", credits: [ { text:"Jacket by Judith Penak", link: "https://www.judithpenakcouture.com.au/"}, {text:"Earrings by Dorku Design", link:'https://pinkysstore.com/collections/dorkus-designs'}, {text:'Rings by Charlotte Paternoster', link:'https://charlottepaternoster.com/'}] },
{ src: require('../../../images/the-mother/the-mother-4.jpeg'), alt: "Image 4", credits: [ { text:"Jacket by Judith Penak", link: "https://www.judithpenakcouture.com.au/"}, {text:"Earrings by Dorku Design", link:'https://pinkysstore.com/collections/dorkus-designs'}, {text:'Rings by Charlotte Paternoster', link:'https://charlottepaternoster.com/'}] },
{ src: require('../../../images/the-mother/the-mother-5.jpeg'), alt: "Image 5", credits: [ { text:"Dress by Gautam Kapoor", link: "https://gkastudio.com/"}, {text:"Dress by Saphire Gaskas", link:'https://www.instagram.com/saphire_gaskas_designs/'}, {text:'Rings by Kinkorar', link:'https://www.kinkoradesigns.com/'}, {text:"Earrings by Dorku Design", link:'https://pinkysstore.com/collections/dorkus-designs'},] },
{ src: require('../../../images/the-mother/the-mother-6.jpeg'), alt: "Image 6", credits: [ { text:"Dress by Saphire Gaskas", link: "https://www.instagram.com/saphire_gaskas_designs/"}, {text:"Dress by Gautam Kapoor", link:'https://gkastudio.com/'}, {text:"Earrings by Dorku Design", link:'https://pinkysstore.com/collections/dorkus-designs'}] },
]}
learnMoreLink="https://www.example.com/learnmore"
/>
);
};

export default TheMother;