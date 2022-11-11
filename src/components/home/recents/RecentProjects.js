import React from 'react';
import Recents from './Recents.js';
import Card from '../../design-system/card/Card.js';

function RecentProjects() {
  return (
    <Recents
      title="Recent Projects">
      <Card
        imgSrc='/uploads/proj1_component.png'
        subtitle="Wine/Beer E-Commerce App"
        title="Always The Weekend"
        link="https://always-the-weekend.herokuapp.com/"
        label={['React', 'Redux', 'JavaScript', 'PostgreSQL', 'Sass', 'Node.js']}
      >
A full-stack e-commerce shopping experience website for a craft beer and wine shop
      </Card>

      {/* <Card
        imgSrc='/uploads/proj2_component.png'
        subtitle="Karaoke Web App featuring Pitch Recognition"
        title="HARK!"
        link="https://hark-karaoke.herokuapp.com/"
        label={['React', 'CSS']}
      >
        Developed a full-stack karaoke web app game where the user can select a song and receive a score based on pitch accuracy
      </Card> */}

      <Card
        imgSrc='/uploads/proj3_component.png'
        imgAlt="Email CMS App"
        subtitle="Work In Progress: Email builder CMS app"
        title="Automated Email CMS campaign builder"
        link="https://email-cms.herokuapp.com/home"
        label={['React', 'Redux', 'JavaScript', 'PostgreSQL', 'Zapier', 'Sendinblue', 'Unlayer','Bree (Cron job)']}
      >
        Created an Email builder CMS app that allows the user to start an email campaign and  edit, create, delete and update emails stored on the database.  The app features an Email building WYSIWYG to create emails.  The email campaign is automated through the back-end by using daily cron jobs which fetch new users and composes and proceseses the emails daily automatically on the back-end.
      </Card>
    </Recents>
  );
}

export default RecentProjects;