import React from 'react';
import FeaturePage from '../../../components/feature-page/feature-page.js';

const Fluid = () => {
return (
<FeaturePage
title="Fluid"
publishDate="February 4th 2022"
credits={[
{ text: "Nicole Hobbs", link: "https://www.instagram.com/nicole_hobbz/" },
{ text: "Jaya Prisco", link: "https://www.instagram.com/jaya_prisco/" },
{ text: "Aimee Balint", link: "https://instagram.com/aimloui/" },
{ text: "Bryce", link: "https://www.instagram.com/brycenotnyce/" },
{ text: "Bethany", link: "https://www.instagram.com/lusatia.bullseye/" },
]}

mediaType="video"
mediaSrc={require('../../../images/fluid/fluid-vid.mp4')}
mediaAlt="Fluid audio"
poem={`Dear mom
You’ve always wanted a daughter
What if I told you you had one?
Not always but sometimes \n\

Dear mom
I will not call myself your daughter,
I will not ask you to stop calling me your son,
I am sorry I cannot give you a word
All I have are three new pronouns,
They all start with X, Xie, Xem Xyr \n\

Dear mom
This is like shifting
Going from gas, to solid to liquid,
I am steam, melting into ice,
I don’t know what phase your child is today
Mom this is not a phase \n\

Dear mom
Your son did not die
I did not kill him
You did not kill him
You will still be my best friend
And we will still talk about Survivor, and Real Housewives, \n\

Dear mom
I’m sorry strangers will hear these words before you ever read them
I’m sorry you may never read them,
I’m sorry I didn’t come to you right away
I did not want to disappoint you,
I did not want to believe that you would be disappointed,
I need you more than ever, waiting this long has hurt me too\m\

Dear mom
I’m not the mamma’s boy we thought I was
Well sometimes, I am
But sometimes, I’m more like your daughter
Sometimes, I’m neither one,
But I’m always the child you raised
Your child`}
poemCredit="Justice Gaines"
poemCreditLink="https://www.instagram.com/thejusticeameer/"
images={[
{ src: require('../../../images/fluid/fluid-1.jpeg'), alt: "Image 1", credits: [ { text:"Trousers & corset by Sorrentino Studios", link: "https://sorrentinostudios.com/collections/element-1-0"}] },
{ src: require('../../../images/fluid/fluid-2.jpeg'), alt: "Image 2", credits: [ { text:"Corset by Sorrentino Studios", link: "https://sorrentinostudios.com/collections/element-1-0"}] },
{ src: require('../../../images/fluid/fluid-3.jpeg'), alt: "Image 3", credits: [ { text:"Trousers by Sorrentino Studios", link: "https://sorrentinostudios.com/collections/element-1-0"}] },
{ src: require('../../../images/fluid/fluid-4.jpeg'), alt: "Image 4", credits: [ { text:"Suit by Reigner design", link: "https://reignerclothing.com/"}] },
{ src: require('../../../images/fluid/fluid-5.jpeg'), alt: "Image 5", credits: [ { text:"Suit by Reigner design", link: "https://reignerclothing.com/"}] },
{ src: require('../../../images/fluid/fluid-6.jpeg'), alt: "Image 6", credits: [ { text:"Suit by Reigner design", link: "https://reignerclothing.com/"}] },
]}
learnMoreLink="https://www.example.com/learnmore"
/>
);
};

export default Fluid;