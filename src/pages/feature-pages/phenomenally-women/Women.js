import React from 'react';
import FeaturePage from '../../../components/feature-page/feature-page.js';

const Women = () => {
return (
<FeaturePage
title="Phenomenally Women"
publishDate="March 8th 2022"
credits={[
{ text: "Jaya Prisco", link: "https://www.instagram.com/jaya_prisco/" },
{ text: "Alain Pottier", link: "https://www.instagram.com/visionbyalain/" },
{ text: "Yumi Yoshida", link: "https://www.instagram.com/yumi_mua/" },
{ text: "Freja", link: "https://www.instagram.com/wishyoumakeup/" },
{ text: "Harriet Ripley", link: "https://www.instagram.com/harrietripley/" },
{ text: "Rashmi Kazony", link: "https://www.instagram.com/rashmi.kazony/" },
{ text: "Margie Melgar", link: "https://www.instagram.com/margiepty/" },
{ text: "Gloryce Dofeel", link: "instagram.com/gloryce_aili_dofeel/" },
{ text: "Gabriella Martinez", link: "https://www.instagram.com/gorgeoushotline/" },
]}

mediaType="video"
mediaSrc={require('../../../images/women/women-1.mov')}
mediaAlt="Phenomenally women audio"
poem={`Remember, Woman, you were born \n\

life giver, miracle creator, magic maker. \n\

You were born with the heart of a thousand mothers, \n\

open and fearless and sweet. \n\

You were born with the fire of Queens and conquerors, \n\

warrioress blood you bleed. \n\

You were born with the wisdom of sage and shamans, \n\

no wound can you not heal. \n\

You were born teller of your own tale, \n\

before none you should kneel. \n\

You were born with an immesurable soul \n\

reaching out past infinity. \n\

You were born to desire with passion, abandon, \n\
 
and name your own destiny. \n\

Remember, Woman, remember \n\

you are more than you can see. \n\

Remember, Woman, remember \n\

you are loved endlessly. \n\

Remember, Woman, your power and grace, \n\

the depth of your deep sea heart. \n\

Never forget you are Woman, divine, \n\

as you have been from the start.`}
poemCredit="Reese Leyva"
poemCreditLink="https://www.instagram.com/reese.leyva/"
images={[
{ src: require('../../../images/women/women-1.jpeg'), alt: "Image 1", credits: [ { text:"Dresses by Missoni", link: "https://www.missoni.com/au/"}, {text: 'La DoubleJ', link: 'https://www.ladoublej.com/es/'}, {text: 'Corset by Lauren Olivia', link:'https://www.instagram.com/laurenoliviar/'}, {text: 'Jewellery by Jeanette Maree', link:'https://www.jeanettemaree.com/'}, {text: 'Botanical Studios', link: 'https://www.botanicalstudios.com.au/'}] },
{ src: require('../../../images/women/women-2.jpeg'), alt: "Image 2", credits: [ { text:"Dresses by Missoni", link: "https://www.missoni.com/au/"}, {text: 'La DoubleJ', link: 'https://www.ladoublej.com/es/'}, {text: 'Corset by Lauren Olivia', link:'https://www.instagram.com/laurenoliviar/'}, {text: 'Jewellery by Jeanette Maree', link:'https://www.jeanettemaree.com/'}, {text: 'Botanical Studios', link: 'https://www.botanicalstudios.com.au/'}] },
{ src: require('../../../images/women/women-3.jpeg'), alt: "Image 3", credits: [ { text:"Dresses by Missoni", link: "https://www.missoni.com/au/"}, {text: 'La DoubleJ', link: 'https://www.ladoublej.com/es/'}, {text: 'Corset by Lauren Olivia', link:'https://www.instagram.com/laurenoliviar/'}, {text: 'Jewellery by Jeanette Maree', link:'https://www.jeanettemaree.com/'}, {text: 'Botanical Studios', link: 'https://www.botanicalstudios.com.au/'}, {text:'Daphne Huguette', link: 'https://daphnehuguette.com/'}] },
{ src: require('../../../images/women/women-4.jpeg'), alt: "Image 4", credits: [ { text:"Jewellery by Sveva Collection", link: "https://svevacollection.com/"}]},
{ src: require('../../../images/women/women-5.jpeg'), alt: "Image 5", credits: [ { text:"Jewellery by Sveva Collection", link: "https://svevacollection.com/"}]},
{ src: require('../../../images/women/women-6.jpeg'), alt: "Image 6", credits: [ { text:"Jewellery by Sveva Collection", link: "https://svevacollection.com/"}, {text:'Fans by flow for sun', link:'https://www.instagram.com/flowforsun/'}]},
]}
learnMoreLink="https://www.example.com/learnmore"
/>
);
};

export default Women;