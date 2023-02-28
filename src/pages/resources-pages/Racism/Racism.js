import React from 'react';
import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Header/Header';
import './racism.css';
import { Link } from 'react-router-dom';

const Racism = () => {
  return (
    <div className="reference">
    <Header></Header>
    <div className="reference-container">
      <div className="reference-text-container">
        <h1 className="reference-header">Racism</h1>
        <div className="racism-top-text-container">
          <p>
            I grew up as a non-white, Australian. Specifically, I grew up as a South Korean, Asian.
          </p>
          <p>
          I have to say this was an odd experience. Australia is a known multicultural society that values a fair go for everyone and generally has disdain for overt and explicit racism, like most other western countries. Despite this, I grew up with a vague feeling that something wasn’t quite right, that I wasn’t quite white. Difficult to quantify, even as someone that directly experienced the subtle undertows of racism that still course through society, I can only imagine how hard they must be to perceive to my white peers. And not that it’s ever lucky to be on the sharp end of anything as prickly as racism (overt or otherwise), but I was definitely lucky not to be born indigenous or any of the other races that are explicitly oppressed, to this very day.
          </p>
          <p>
          There was a period there, from the 90s to recently where the social commentary was that racism, like misogyny and the myriad other social curses that have clung to society like a piece of insidious, wet paper, had been defeated. That because we were cosmetically, a more cosmopolitan society than ever before, racism could not possibly still haunt its previously oppressed citizens.  This view of the world sorely misses the economic reasons that made up the ideological back bone of all colonised white countries. Of course, race-based segregation and oppression have always been a feature of developed, resource scarce societies, what changed was the disintegration of class awareness. As we lost our ability to view ourselves as classes, the ruling elite saw an opportunity to fragment society in a way that would completely declaw growing powerful, class based populist movements that could challenge their cultural and economic hegemony. Recent polls have shown that seemingly disparate cultural/racial groups actually share more views on critical economic policy than they differ on.The stratification of society on race lines rather than class lines allowed for a powerful methodology to procure a system where groups would become so aligned against each other, that any form of class based, pluralistic movement would be impossible as we become increasingly embroiled in identity based misdirection campaigns. It’s not divided and conqueror so much as divided and confused. This is the reason that racism has managed to sustain itself as a movement for so long, despite being supposedly stamped out and having so many champions fighting against it throughout history.
          </p>
          <p>
          Here, it is important to think about racism systemically. Racist policy and ideology support a complex and deliberately opaque neoliberal system that allows a widespread redistribution program that moves wealth from the lowest rungs of the economic ladder to the top. This is achieved through an intricate mechanism that leverages the cultural and ideological view of race (stereotype and statistical generalisation) with the supposedly unassailable fortress of modern economics (economic science) to justify this redistribution by creating extractive industries and markets where race lines have previous been drawn. Because economic and sociological boundaries are drawn directly over the same lines that are used to delineate race, it is possible to create and justify a new form of economic segregation.
          </p>
          <p> 
          Additionally, since it is technically possible to rise from poverty, the only understanding of poverty is that those caught in its mire must want to be there. This shift from pre-20th century, explicitly racist ideology; segregation, slavery, redlining was altered for the post-20th century subtle dog whistling of “inner city, urban areas” (typically black neighbourhoods), unfounded crime and job anxiety from asylum seeking immigrants and general fearmongering and misinformation about crime statistics and misinformation about their causes. This narrative has assisted reinforcing economically beneficial (to the rich) and perniciously racist policy whilst dividing poor and economically disenfranchised (and often, literally disenfranchised) populaces using a visceral and simple, attractive logic steeped in 4 decades of rampaging and hegemonic neoliberalism.
          </p>
          <p>
          On the personal front, racism looks like this. Exclusion, stereotype, belittling (something I can attest to that happens to Asian men especially, not so much these days, however), fetishization. The term for these acts is microaggression, a term that now makes one a pariah for using but is still accurate, and has been since co-opted by the corporate sphere. It can be hard for my white peers initially to see how these things could be construed as racism but I am pleased to note that it doesn’t take much explaining for them to understand, but it is the need of convincing that tells me that racism certainly isn’t dead. Like all social movements that are being reinvigorated, two things are important to note. Being thrown a bone wasn’t and will never be enough, removing the most vile and explicit forms of racism and bigotry is good, but it is also the bare minimum. 
As humans, we deserve more from society than a bone, we deserve economic and ideological autonomy that finally purges the forces that keep marginalized races out of places of power and economic prosperity. Secondly, these movements need to be instilled with class awareness. 
          </p>
          <p>
          This is a point that forth wave feminists have excellently embedded into their movements, being mostly pluralistic and diverse, advocating for their own empowerment and rights but also for the rights of non-binary, racially diverse and ability diverse peoples.  All culturally oppressed and economically robbed people are under the yoke of the same malignant capitalist force that pits us against one another whilst robbing us blind of the economic prosperity we are owed and not one of us can fight it alone.
          </p>
        </div>
        <img src={require('../../../images/racism-artcle-pic.jpeg')} className="reference-image" alt="Racism" />
      </div>
      <div className="reference-credit-container">
        <p className="reference-credit-text">Words by Ethan Watson</p>
      </div>
      <br className='break'/>
    <div className='references'>
        <h2 className='sub-title'>References </h2>
        <ul>
            <li className='reference-link'> <a href='https://www.theguardian.com/commentisfree/2022/apr/05/america-politics-culture-wars-republicans-democrats'>https://www.theguardian.com/commentisfree/2022/apr/05/america-politics-culture-wars-republicans-democrats</a></li>
            <li className='reference-link'><a href='https://americasvoice.org/blog/decoding-racist-and-xenophobic-dog-whistles/'>https://americasvoice.org/blog/decoding-racist-and-xenophobic-dog-whistles/</a></li>
            <li className='reference-link'><a href='https://www.bbc.com/news/world-australia-56728328'>https://www.bbc.com/news/world-australia-56728328</a></li>
            <li className='reference-link'><a href='https://www.youtube.com/watch?v=3SmPbDyEb9s&ab_channel=NetworkoftheNationalLibraryofMedicine%5BNNLM%5D'>https://www.youtube.com/watch?v=3SmPbDyEb9s&ab_channel=NetworkoftheNationalLibraryofMedicine%5BNNLM%5D</a></li>
        </ul>
    </div>
    <div className='learn-more'>
        <div className='ted-talks'>
            <h2 className='sub-title'>TedTalks</h2>
            <div className='ted-links'>
                Ted: <Link to=''> The lie that invented racism | John Biewen</Link>
            </div>
            <h2 className='sub-title'>Podcasts</h2>
            <ul className="podcasts">
                <li className='podcast-link'>
                    Unf*ucking The Republic- <Link to=''>The Economist of Racism: Bootstraps, Black Banks and Redlining</Link>
                </li>
                <li className='podcast-link'>
                    Best of the Left <Link to=''>Best of the Left- #1402Racism or Classims? Caste Explains that it is Both (Repost)</Link>
                </li>
            </ul>
        </div>
    </div>
 </div>
    <Footer></Footer>
    </div>
  );
};

export default Racism;
