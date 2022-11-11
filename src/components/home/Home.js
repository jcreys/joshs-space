import React from 'react';
import './_home.scss';
import Page from '../design-system/page/Page';
import LinkComp from '../design-system/link/LinkComp';
import RecentProjects from './recents/RecentProjects';

function Home() {
  return (
    <Page>
      <h1>Hi, I'm Joshua</h1>
      <section className="Intro">
        <p className="Large">I'm a former Systems Engineer  Systems Test Engineer specializing in CBTC systems. So if you live in Toronto and had to take the shuttle instead of the subway due to testing that was probably me and I'm sorry. ✨</p>

        <p className="Large">One of my dreams was to be the next Kobe Bryant. But being 5’8 with a jumpshot that lays more bricks than the Toll Brothers, I realized I should stick to my other childhood dream of building out the digital world.  So I saved up, took a 6-month Fullstack bootcamp at Fullstack academy and now I'm here.

</p>
        <section className="Links">
          <LinkComp type="primary" link="http://www.github.com/jcreys">Github</LinkComp>
          <LinkComp type="primary" link="http://www.linkedin.com/in/joshuacreyes">Linkedin</LinkComp>
          <LinkComp type="primary" link="mailto:joshua.reyes@ryerson.ca">Email Me</LinkComp>
        </section>
      </section>

      <RecentProjects />
    

    </Page>
  );
}

export default Home;