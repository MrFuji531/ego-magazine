import React from 'react';
import FeaturePage from '../../../components/feature-page/feature-page.js';

const Worthy = () => {
return (
<FeaturePage
title="Fragile"
publishDate="September 21st 2022"
credits={[
{ text: "Jaya Prisco", link: "https://www.instagram.com/jaya_prisco/" },
{ text: "Mayah Lasky", link: "https://www.instagram.com/melaskoarts" },
{ text: "Taylor Bennie-Faull", link: "https://www.instagram.com/taylordbenniefaull/" },
{ text: "Holden Snell", link: "https://www.instagram.com/nastyboyholden/" },
{ text: "Vanessa Wiesner", link: "https://www.instagram.com/__vanessa_siol__/" },
{ text: "Brie Heath", link: "https://www.instagram.com/brieheath" },
{ text: "Nichale Rampersad", link: "https://www.instagram.com/mahbahh/" },


]}
mediaType="video"
mediaSrc={require('../../../images/worthy/worthy-audio.mov')}
mediaAlt="Worthy audio"
poem={`You are more than the fat on your body,
you are a flower, beautiful and unique in your own way and you need to understand that
you are more than the scars that were put there by your own free will
you are a strong tree that gives life
and you need to learn how to free your roots from your sadness
you are more than your anxieties
you are a soul created to do great things
you are not your depression or the thoughts in your head
you are a lovely human being that is being kept alive by millions of cells in your body that love you and take care of you
and i hope that is enough`}
poemCredit="Inna S"
poemCreditLink="https://allpoetry.com/Inna_S"
images={[
{ src: require('../../../images/worthy/worthy-1.jpeg'), alt: "Image 1", credits: [{ text:"Leotard by Ramp Tramp Tramp", link: "https://ramptramptrampstamp.com/shop/"}] },
{ src: require('../../../images/worthy/worthy-2.jpeg'), alt: "Image 2", credits: [{ text:"Leotard by Ramp Tramp Tramp", link: "https://ramptramptrampstamp.com/shop/"}] },
{ src: require('../../../images/worthy/worthy-3.jpeg'), alt: "Image 3"},
{ src: require('../../../images/worthy/worthy-4.jpeg'), alt: "Image 4", credits: [{ text:"Shorts by Ramp Tramp Tramp", link: "https://ramptramptrampstamp.com/shop/"}] },
{ src: require('../../../images/worthy/worthy-5.jpeg'), alt: "Image 5", credits: [{ text:"Lingerie by Hara the Label", link: "https://www.harathelabel.com.au/"}] },
{ src: require('../../../images/worthy/worthy-6.jpeg'), alt: "Image 5", credits: [{ text:"Lingerie by Hara the Label", link: "https://www.harathelabel.com.au/"}] },
]}
learnMoreLink="https://www.example.com/learnmore"
/>
);
};

export default Worthy;