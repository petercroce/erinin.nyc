import React from 'react';
import Radium from 'radium';
import { Link } from 'react-router-dom';

import Footer from '../layout/Footer';

import Section from '../layout/elements/Section';
import SectionLeft from '../layout/elements/SectionLeft';
import Subtitle from '../layout/elements/Subtitle';
import Paragraph from '../layout/elements/Paragraph';
import WebsiteTitle from '../layout/elements/WebsiteTitle';

import styleVars from '../../styles/styleVars.js';

function Hbd() {
  return (
    <div style={styles.outerWrapper}>
      <div style={styles.innerWrapper}>
      <Section>
        <SectionLeft>
          <WebsiteTitle>
            Terms and Conditions
          </WebsiteTitle>
          <Paragraph>
            I know it's a big move and will be a big transition for you and I want to do everything I can to help make it easier. I don't think I've thought of everything yet (and I'm open to ideas, please) but I want to make sure you have unlimited yoga for a while so I'm giving you 300 Yoga Bux™ (which coincidentally look a lot like $300 cash) redeemable upon your arrival in NYC.
          </Paragraph>
          <Paragraph>
            There are <a href="https://airtable.com/invite/l?inviteId=invuEtp3FtLlX7U05&inviteToken=51b872ce4dbb43731c9c03408c81facbb0fff213cf9479bf927ede193bd4130d" target="blank" rel="noopener noreferrer">some options with locations and prices and scheules and other things that might matter to you</a>. And maybe some that don't.
          </Paragraph>
          <Paragraph>
            Yoga Bux™ are not limited to the locations therein. <Link to="/terms-and-conditions">Terms and conditions</Link> apply. By clicking "Accept" below you agree to all of them.
          </Paragraph>

          <div style={styles.buttonWrapper}>
            <Link to='/hbd' style={styles.button}>
              Back
            </Link>
            <Link to='/more' style={styles.button}>
              More
            </Link>

          </div>

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

export default Radium(Hbd);
