import React from 'react';
import FeaturePage from '../../../components/feature-page/feature-page.js';

const MyChoice = () => {
return (
<FeaturePage
title="My Choice"
publishDate="December 4th 2021"
credits={[
{ text: "Sulaiman Enayatzada", link: "https://www.instagram.com/lazyfair_/" },
{ text: "Jaya Prisco", link: "https://www.instagram.com/jaya_prisco/" },
{ text: "Harriet Ripley", link: "https://www.instagram.com/harrietripley/" },
{ text: "Mami Metherall", link: "https://www.instagram.com/mamimetherell/" },
{ text: "Saphire Gaskas", link: "https://www.saphiremhs.com.au/" },
{ text: "Nisal", link: "https://www.instagram.com/nisal.mua/" },
]}

mediaType="video"
mediaSrc={require('../../../images/my-choice/my-choice-vid.mov')}
mediaAlt="My Choice audio"
poem={`Dear Women
of the patriarchal state \n\

Who have broken themselves
into so many irreconcilable pieces
to fit into this fractured world \n\

Who split and ripped themselves
inside and sideways
to seem, to seem
human
beneath a greedy, dehumanizing gaze \n\

I see you
we see you
we sisters of the liberation
fighting our inner and outer oppressors
for the freedoms you never had
fighting our inner and outer oppressors
with radical self-love
planting our flags in our wholeness
our enoughness
our loveliness
our goodness
to honour you in life
with the death of the patriarchy.`}
poemCredit="Reese Leyva"
poemCreditLink="https://www.instagram.com/reese.leyva/"
images={[
{ src: require('../../../images/my-choice/my-choice-1.jpeg'), alt: "Image 1", credits: [ { text:"Gauntlests by Terzann Elliot", link: "https://linktr.ee/somethingsht"}, {text: 'Rings by Mason Tilly', link: 'https://fingercandyjewellery.bigcartel.com/'}, {text: 'Daphne Huguette', link:'https://daphnehuguette.com/'}, {text: 'Face piece by Courtney Hogan', link:'https://daphnehuguette.com/'}] },
{ src: require('../../../images/my-choice/my-choice-2.jpeg'), alt: "Image 2", credits: [ { text:"Gauntlests & corset by Terzann Elliot", link: "https://linktr.ee/somethingsht"}, {text: 'Face piece by Courtney Hogan', link:'https://daphnehuguette.com/'}] },
{ src: require('../../../images/my-choice/my-choice-3.jpeg'), alt: "Image 3", credits: [ { text:"Dress by Oscar Keene", link: "https://oscarkeene.com/"}] },
{ src: require('../../../images/my-choice/my-choice-4.jpeg'), alt: "Image 4", credits: [ { text:"Dress by Oscar Keene", link: "https://oscarkeene.com/"}] },
{ src: require('../../../images/my-choice/my-choice-5.jpeg'), alt: "Image 5", credits: [ { text:"Clothes & Jewellery by Coral Jamieson", link: "http://coraljamiesondesigns.com/"}, {text: 'Rings by by Mason Tilly', link:'https://fingercandyjewellery.bigcartel.com/'}, {text: 'Daphne Huguette', link:'https://daphnehuguette.com/'}] },
{ src: require('../../../images/my-choice/my-choice-6.jpeg'), alt: "Image 6", credits: [ { text:"Clothes & Jewellery by Coral Jamieson", link: "http://coraljamiesondesigns.com/"}, {text: 'Rings by by Mason Tilly', link:'https://fingercandyjewellery.bigcartel.com/'}, {text: 'Daphne Huguette', link:'https://daphnehuguette.com/'}] },
]}
learnMoreLink="https://www.example.com/learnmore"
/>
);
};

export default MyChoice;