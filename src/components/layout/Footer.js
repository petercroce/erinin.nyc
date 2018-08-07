import React from 'react';
import Radium from 'radium';
import { Link } from 'react-router-dom';

import Paragraph from '../layout/elements/Paragraph';
import Section from '../layout/elements/Section';


function Footer() {
  return (
    <Section>
      <div style={styles.footer} className="footer">
        <div style={styles.footerText}>

          <span style={[styles.footerItem, styles.footerItem.middle]} role="img" aria-label="Statue of Liberty Emoji">
              <Link to="/">
                🗽
              </Link>
          </span>
          {/* <span style={[styles.footerItem, styles.footerItem.sides]}>
            <Paragraph>
              {`${countdown.d} days ${countdown.h} hours and ${countdown.m} minutes`}
            </Paragraph>
          </span> */}
        </div>

      </div>
    </Section>
  )
}

const styles = {
  footer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    width: '100%',
    height: 50,
    '@media (max-width: 480px)': { // mobile
      height: 100,
    },
  },
  footerText: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',

    // width: '90%',
    margin: 0,
    fontSize: '5rem',
    '@media (max-width: 992px)': { // tablet
      // width: '100%',
      // flexDirection: 'column',
      // alignItems: 'center',
      // justifyContent: 'space-around',
      // height: '100%',
      // textAlign: 'center',
    },
  },
  footerItem: {
    width: 350,
    textAlign: 'center',
    fontSize: 80,
    '@media (max-width: 992px)': { // tablet
      width: 'auto',
    },
    sides: {
      marginBottom: 35,
    },
    // middle: {
    //   position: 'relative',
    //   top: 20,
    // }
  },
}

export default Radium(Footer);
