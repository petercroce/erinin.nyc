import React from 'react';
import Radium from 'radium';

import Section from '../layout/elements/Section';

function Footer() {
  return (
    <Section>
      <div style={styles.footer} className="footer">
        <div style={styles.footerText}>
          <span style={styles.footerItem}> </span>
          <span style={styles.footerItem}>
            {/* <a
              style={styles.footerItemMiddle}
              href="https://airtable.com"
              target="_blank"
              rel="noopener noreferrer"> */}
              🗽
            {/* </a> */}
          </span>
          <span style={styles.footerItem}> </span>
        </div>

      </div>
    </Section>
  )
}

const styles = {
  footer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 200,
    '@media (max-width: 480px)': { // mobile
      height: 150,
    },
  },
  footerText: {
    display: 'flex',
    justifyContent: 'space-between',
    flex: 1,
    flexDirection: 'row',
    width: '90%',
    margin: 0,
    fontSize: '9rem',
    '@media (max-width: 992px)': { // tablet
      width: '100%',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-around',
      height: '100%',
      textAlign: 'center',
    },
  },
  footerItem: {
    width: 250,
    textAlign: 'center',
    '@media (max-width: 992px)': { // tablet
      width: 'none',
    },
  },
  footerItemMiddle: {
    padding: 10,
    paddingBottom: 5,
  }
}

export default Radium(Footer);
