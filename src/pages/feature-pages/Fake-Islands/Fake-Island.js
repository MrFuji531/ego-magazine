import React from 'react';
import FeaturePage from '../../../components/feature-page/feature-page.js';

const FakeIslands = () => {
return (
<FeaturePage
title="Fake Islands"
publishDate="January 10th 2022"
credits={[
{ text: "Jaya Prisco", link: "https://www.instagram.com/jaya_prisco/" },
{ text: "Maya Eden Lasky", link: "https://www.instagram.com/melaskoarts/" },
{ text: "Milly Carmichael", link: "https://www.instagram.com/milly.carmichael/" },
{ text: "Yumu Yoshida", link: "https://www.yumiyoshida.com/" },
{ text: "Indigo Tait-atkin", link: "https://www.instagram.com/indi_gog/" },
]}

mediaType="video"
mediaSrc={require('../../../images/fake-island/fakeisland-vid.mov')}
mediaAlt="Fake Islands audio"
poem={`Since creation pristine, now Earth’s waters we see \n\

Are vast ponds of pollution and plastic debris. \n\

In the misguided minds of too many who lead \n\

More important than oceans are power and greed. \n\

Seas are rising as glaciers and coral reefs shrink. \n\

Now humanity stands on catastrophe’s brink. \n\

Whether strangled, unable to breathe or to feed, \n\

Or entangled by plastics that movements impede, \n\

Left defenseless are creatures that under seas lie \n\

That increasingly suffer and needlessly die. \n\

To ignore global warming is reckless and wrong. \n\

Without unified action, it may not be long \n\

Until sea life, a critical sustenance source, \n\

Will by vanishing vengeance on nations enforce. \n\

While both paper and wood over time will decay \n\

And their trees are renewable, plastic won’t rot. \n\

And though metal’s recycled or eaten away \n\

By incessant corrosion, most plastics are not. \n\

Though we cannot all plastics now instantly ban, \n\

We must fund more research and do all that we can \n\

To use other materials to crisis reduce \n\

Until science can soluble plastics produce. \n\

Then permit toxic dumping in oceans no more \n\

To preserve life within them and planet restore.`}
poemCredit="Richard Thomas"
poemCreditLink="https://allpoetry.com/Richom"
images={[
{ src: require('../../../images/fake-island/fake-island-1.jpeg'), alt: "Image 1", credits: [ { text:"Clothes by Jaya Prisco", link: "https://www.instagram.com/jaya_prisco/"}] },
{ src: require('../../../images/fake-island/fake-island-2.jpeg'), alt: "Image 2", credits: [ { text:"Clothes by Jaya Prisco", link: "https://www.instagram.com/jaya_prisco/"}, {text: 'Jewellery by Sveva Collection', link:'https://svevacollection.com/'}] },
{ src: require('../../../images/fake-island/fake-island-3.jpeg'), alt: "Image 3", credits: [ { text:"Clothes by Jaya Prisco", link: "https://www.instagram.com/jaya_prisco/"}, {text: 'Jewellery by Sveva Collection', link:'https://svevacollection.com/'}] },
{ src: require('../../../images/fake-island/fake-island-4.jpeg'), alt: "Image 4", credits: [ { text:"Clothes by Jaya Prisco", link: "https://www.instagram.com/jaya_prisco/"}] },
{ src: require('../../../images/fake-island/fake-island-5.jpeg'), alt: "Image 5", credits: [ { text:"Clothes by Jaya Prisco", link: "https://www.instagram.com/jaya_prisco/"}] },
{ src: require('../../../images/fake-island/fake-island-6.jpeg'), alt: "Image 6", credits: [ { text:"Clothes by Jaya Prisco", link: "https://www.instagram.com/jaya_prisco/"}] },
{ src: require('../../../images/fake-island/fake-island-7.jpeg'), alt: "Image 7" },

]}
learnMoreLink="https://www.example.com/learnmore"
/>
);
};

export default FakeIslands;