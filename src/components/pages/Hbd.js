import React from 'react';
import Radium from 'radium';
import { Link } from 'react-router-dom';

import Section from '../layout/elements/Section';
import SectionLeft from '../layout/elements/SectionLeft';
import Paragraph from '../layout/elements/Paragraph';
import FinePrint from '../layout/elements/FinePrint'
import WebsiteTitle from '../layout/elements/WebsiteTitle';

import styleVars from '../../styles/styleVars.js';

function Hbd() {
  return (
    <div style={styles.outerWrapper}>
      <div style={styles.innerWrapper}>
      <Section>
        <SectionLeft>
          <WebsiteTitle>
            Hi bb,
          </WebsiteTitle>

          <Paragraph>
            I'm very excited you're moving to NYC.
          </Paragraph>
          <Paragraph>
            I know it's a big move and will be a big transition for you and I want to do everything I can to help make it easier. I don't think I've thought of everything yet (and I'm open to ideas, please) but I want to make sure you have unlimited yoga for a while so I'm giving you 300 Yoga Bux™ (which coincidentally look a lot like $300 cash) redeemable upon your arrival in NYC.
          </Paragraph>

          <Paragraph>(And also I want to share experiences with you during celebration times like this one but this will have to suffice for now. Soon!)</Paragraph>

          <Paragraph>
            I love you so much. Happy birthday.
          </Paragraph>

          <Paragraph>
            Love,
          </Paragraph>
          <Paragraph>
            Peter
          </Paragraph>

          <div style={styles.buttonWrapper}>
            <Link to='/yoga' style={styles.button}>
              Accept
            </Link>
            <Link to='/' style={styles.button}>
              Home
            </Link>

            {/* <a href="/yoga"  style={styles.button}>Agree</a>
            <a href="/"  style={styles.button}>Home</a> */}
          </div>
          <FinePrint>
            Yoga Bux™ are not limited to the locations therein. <Link to="/terms-and-conditions">Terms and conditions</Link> apply. By clicking "Accept" below you agree to all of them.
          </FinePrint>

        </SectionLeft>
      </Section>
      </div>
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
