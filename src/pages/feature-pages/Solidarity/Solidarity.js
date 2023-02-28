import React from 'react';
import FeaturePage from '../../../components/feature-page/feature-page.js';

const Solidarity = () => {
return (
<FeaturePage
title="Solidarity"
publishDate="May 30th 2022"
credits={[
{ text: "Jaya Prisco", link: "https://www.instagram.com/jaya_prisco/" },
{ text: "Jaida the Creator", link: "https://www.instagram.com/jaidathecreator/" },
{ text: "Saphire Gaskas", link: "https://www.instagram.com/saphire_mua_hair_studio/" },
{ text: "Moses", link: "https://www.instagram.com/moseslikejesus/" },
{ text: "Tamasin Altmann", link: "https://www.instagram.com/tamsalty/" },
{ text: "Benjamin Balngo", link: "https://www.instagram.com/blangobenjamin/" },
{ text: "Najma Amin", link: "https://www.instagram.com/najmaamin/?igshid=YmMyMTA2M2Y=" },


]}
mediaType="video"
mediaSrc={require('../../../images/solidarity/solidarity-vid.mp4')}
mediaAlt="Solidarity audio"
poem={`Her skin is full
of holes, and
she’s raped by
the dawn on a
daily basis;
wandering the midnight
streets of this
broken City.
Her feet are
calloused and raw.
That once tough heart is
soft now, looking for
love in the rabid
faces of evil.
Seagulls still fly into
cars, and spiders
spin webs in the dark.
Abandoned houses have
become her home
and her soul aches
for someone to hold.
Sometimes,
dreams float by,
like a dragonfly
on a soft breeze.`}
poemCredit="Thomas W. Case"
poemCreditLink="https://allpoetry.com/Thomas_W._Case"
images={[
{ src: require('../../../images/solidarity/solidarity-1.jpeg'), alt: "Image 1", credits: [ { text:"Garments by Inner Sanctum", link: "https://www.instagram.com/inner___sanctum/"}, {text: 'Reborn Homie', link:'https://www.instagram.com/reborn.homie/'}, {text: 'Sabatucci', link:'https://www.instagram.com/sabatucci___/'}, {text: 'Jewellery by Metal Bender', link: 'https://www.instagram.com/metal__bender/'}] },
{ src: require('../../../images/solidarity/solidarity-2.jpeg'), alt: "Image 2", credits: [ { text:"Garments by Inner Sanctum", link: "https://www.instagram.com/inner___sanctum/"}, {text: 'Reborn Homie', link:'https://www.instagram.com/reborn.homie/'}, {text: 'Jewellery by Metal Bender', link: 'https://www.instagram.com/metal__bender/'}] },
{ src: require('../../../images/solidarity/solidarity-3.jpeg'), alt: "Image 3", credits: [ { text:"Garments by Inner Sanctum", link: "https://www.instagram.com/inner___sanctum/"}, {text: 'Reborn Homie', link:'https://www.instagram.com/reborn.homie/'}, {text: 'Moira Isobal', link:"https://www.instagram.com/_moiraisabel/"}, {text: 'Sabatucci', link:'https://www.instagram.com/sabatucci___/'}, {text: 'Faze one', link: 'https://www.instagram.com/_fazeone/'}, {text: 'Jewellery by Metal Bender', link: 'https://www.instagram.com/metal__bender/'}, {text: 'Sacred Steel', link:'https://www.instagram.com/sacredsteelarmour/'}] },
{ src: require('../../../images/solidarity/solidarity-4.jpeg'), alt: "Image 4", credits: [ { text:"Garments by Inner Sanctum", link: "https://www.instagram.com/inner___sanctum/"}, {text: 'Reborn Homie', link:'https://www.instagram.com/reborn.homie/'}] },
{ src: require('../../../images/solidarity/solidarity-5.jpeg'), alt: "Image 5", credits: [ {text: 'Garments by Moira Isobal', link:"https://www.instagram.com/_moiraisabel/"}, {text: 'Sabatucci', link:'https://www.instagram.com/sabatucci___/'}] },
{ src: require('../../../images/solidarity/solidarity-5.jpeg'), alt: "Image 6", credits: [ {text: 'Garments by Moira Isobal', link:"https://www.instagram.com/_moiraisabel/"}, {text: 'Sabatucci', link:'https://www.instagram.com/sabatucci___/'}, {text: 'Faze one', link: 'https://www.instagram.com/_fazeone/'}, {text: 'Jewellery by Metal Bender', link: 'https://www.instagram.com/metal__bender/'}, {text: 'Sacred Steel', link:'https://www.instagram.com/sacredsteelarmour/'}] },
]}
learnMoreLink="https://www.example.com/learnmore"
/>
);
};

export default Solidarity;