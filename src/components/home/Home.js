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
        <p className="Large">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ✨</p>

        <p className="Large">orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into.</p>
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