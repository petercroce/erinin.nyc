import React from 'react';
import Radium from 'radium';
import { Link } from 'react-router-dom';

import Paragraph from '../layout/elements/Paragraph';
import Section from '../layout/elements/Section';

// make it update https://reactjs.org/docs/state-and-lifecycle.html

function Footer() {
  let arrival = new Date('August 25, 2018 00:30:00'); // 8:30 pm Aug 24 EST in GMT (EST + 4)
  let now = new Date();
  let countdown = arrival - now;
  function convertMS(ms) {
    var d, h, m, s;
    s = Math.floor(ms / 1000);
    m = Math.floor(s / 60);
    s = s % 60;
    h = Math.floor(m / 60);
    m = m % 60;
    d = Math.floor(h / 24);
    h = h % 24;
    return { d: d, h: h, m: m, s: s };
  };
  countdown = convertMS(countdown);
  return (
    <Section>
      <div style={styles.footer} className="footer">
        <div style={styles.footerText}>
          <span style={[styles.footerItem, styles.footerItem.sides]}>
            <Paragraph>
              <Link to="/">
              <span role="img" aria-label="Statue of Liberty Emoji">
                🏡
              </span>
              </Link>
            </Paragraph>
          </span>
          <span style={[styles.footerItem, styles.footerItem.middle]} role="img" aria-label="Statue of Liberty Emoji">
              🗽
          </span>
          <span style={[styles.footerItem, styles.footerItem.sides]}>
            <Paragraph>
              {`${countdown.d} days ${countdown.h} hours and ${countdown.m} minutes`}
            </Paragraph>
          </span>
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
    middle: {
      position: 'relative',
      top: 20,
    }
  },
}

export default Radium(Footer);
