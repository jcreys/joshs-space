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
        <p className="Large">Former Systems design/test engineer specializing in Communication based Train Control systems. Always interested and excited about the latest developments in high tech and startup companies which led me to the current pursuit of web based software development. </p>

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