import React from 'react';
import Radium from 'radium';
import { Link } from 'react-router-dom';

import Footer from '../layout/Footer';

import Section from '../layout/elements/Section';
import SectionLeft from '../layout/elements/SectionLeft';
import Paragraph from '../layout/elements/Paragraph';
import FinePrint from '../layout/elements/FinePrint'
import WebsiteTitle from '../layout/elements/WebsiteTitle';

import styleVars from '../../styles/styleVars.js';

function Yoga() {
  return (
    <div style={styles.outerWrapper}>
      <div style={styles.innerWrapper}>
      <Section>
        <SectionLeft>
          <WebsiteTitle>
            Yoga
          </WebsiteTitle>

          <br/>
          <Paragraph>Okay, sweet. Thanks for accepting, bb.</Paragraph>
          <Paragraph>
            There are <a href="https://airtable.com/invite/l?inviteId=invuEtp3FtLlX7U05&inviteToken=51b872ce4dbb43731c9c03408c81facbb0fff213cf9479bf927ede193bd4130d" target="blank" rel="noopener noreferrer">some options with locations and prices and scheules and other things that might matter to you</a>. And probably some that don't.
          </Paragraph>
          <Paragraph>That's it. I'm looking forward to going to yoga with you sometimes. There are a lot of different options and a lot of them have starter deals so we could try a bunch of places if you want. Or maybe you already know one that you love! </Paragraph>
          <Paragraph>Namaste, bb.</Paragraph>

          <div style={styles.buttonWrapper}>
            <Link to='/hbd' style={styles.button}>
              Back
            </Link>
            <Link to='/' style={styles.button}>
              Home
            </Link>
            {/* <a href="/yoga"  style={styles.button}>Agree</a>
            <a href="/"  style={styles.button}>Home</a> */}
          </div>
          <FinePrint>Btw, the link to the Airtable base above is the one that invites you to have access. So you have to click that one first, while logged in to Airtable, to be able to access the base.</FinePrint>

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
    width: 200,
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
    justifyContent: 'space-between',
    '@media (max-width: 448px)': {
      width: '100%',
      flexDirection: 'column',
      marginTop: '1.5rem',
    },
  }
}

export default Radium(Yoga);
