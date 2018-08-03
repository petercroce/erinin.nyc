import React from 'react';
import Radium from 'radium';
import { Link } from 'react-router-dom';

import Footer from '../layout/Footer';

import Section from '../layout/elements/Section';
import SectionLeft from '../layout/elements/SectionLeft';
import Paragraph from '../layout/elements/Paragraph';
import WebsiteTitle from '../layout/elements/WebsiteTitle';
import YogaSvg from '../layout/elements/YogaSvg';


import styleVars from '../../styles/styleVars.js';

function Yoga() {
  return (
    <div style={styles.outerWrapper}>
      <div style={styles.innerWrapper}>
      <Section>
        <SectionLeft>
          <WebsiteTitle>
            Yoga Bux™
          </WebsiteTitle>

          <br/>
          <Paragraph>Oh, hey. Thanks for accepting.</Paragraph>
          <Paragraph>
            So yes, you may accept your Yoga Bux™ upon arrival in NYC. There are <a href="https://airtable.com/invite/l?inviteId=invuEtp3FtLlX7U05&inviteToken=51b872ce4dbb43731c9c03408c81facbb0fff213cf9479bf927ede193bd4130d" target="blank" rel="noopener noreferrer">some options with locations and prices and schedules and other things that might matter to you</a>. And probably some that don't.
          </Paragraph>
          <Paragraph>Also I've been working on some yoga puns but I'm afraid if I include them you'll put me down, dog. I promise to avoid the obvious ones. Nah?</Paragraph>
          <Paragraph>Also found a pretty cool gif of you doing yoga in NYC.</Paragraph>

          <div style={styles.buttonWrapper}>
          <YogaSvg></YogaSvg>
            <Link to='/' style={styles.button}>
              Okay that's enough
            </Link>
            {/* <a href="/yoga"  style={styles.button}>Agree</a>
            <a href="/"  style={styles.button}>Home</a> */}
          </div>
          {/* <FinePrint>Btw, the link to the Airtable base above is the one that invites you to have access. So you have to click that one first, while logged in to Airtable, to be able to access the base.</FinePrint> */}



        </SectionLeft>
      </Section>
      </div>
      <Footer></Footer>
    </div>
  )
}

const styles = {
  outerWrapper: {
    display: 'flex',
    minHeight: '100vh',
    flexDirection: 'column',
    '@media (max-width: 448px)': {
      minHeight: 0,
    },
  },
  innerWrapper: {
    flex: 1,
  },
  button: {
    display: 'block',
    backgroundColor: 'transparent',
    color: styleVars.textColor,
    border: `3px solid ${styleVars.textColor}`,
    textAlign: 'center',
    marginBottom: '1rem',
    fontSize: '1.5em',
    padding: '0.5rem 0.75rem',
    width: '100%',
    '@media (max-width: 992px)': {
      padding: '.5rem .57rem',
    },
    '@media (max-width: 448px)': {
      width: '100%',
    },
  },
  buttonWrapper: {
    margin: '2rem 0',
    display: 'flex',
    flexDirection: 'column',
    // justifyContent: 'space-between',
    '@media (max-width: 448px)': {
      width: '100%',
      marginTop: '1.5rem',
    },
  }
}

export default Radium(Yoga);
