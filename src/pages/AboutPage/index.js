import React, { useEffect } from 'react';
import Wrapper from './styles';
import { PageHero } from '../../components';
import aboutImg from '../../assets/hero-bcg.jpg';

const AboutPage = () => {
  useEffect(() => {
    document.title = 'Circle Acc | About';
  }, []);

  return (
    <main>
      <PageHero title='about' />
      <Wrapper className='page section section-center'>
        <img src={aboutImg} alt='pic' />
        <article>
          <div className='title'>
            <h2>My Story</h2>
            <div className='underline'></div>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget
            duis at tellus at. Nunc consequat interdum varius sit amet mattis
            vulputate enim nulla. Diam maecenas sed enim ut sem viverra aliquet.
            Odio eu feugiat pretium nibh ipsum consequat nisl vel. Semper risus
            in hendrerit gravida. Interdum velit laoreet id donec ultrices
            tincidunt arcu non sodales. Habitant morbi tristique senectus et
            netus et malesuada fames. Urna id volutpat lacus laoreet non
            curabitur gravida arcu ac.
          </p>
        </article>
      </Wrapper>
    </main>
  );
};

export default AboutPage;
