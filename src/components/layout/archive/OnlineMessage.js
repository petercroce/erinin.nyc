import React from 'react';
import Radium from 'radium';

import styleVars from '../../../styles/styleVars.js';

function OnlineMessage() {
  return (
    <div style={styles.offline}>
      <h2 style={styles.offlineTitle}>You must be offline to view this page.</h2>
      <br/>
      <p style={styles.mobile}>Enable airplane mode to continue.</p>
      <p style={styles.desktop}>Disconnect from WiFi to continue.</p>
    </div>
  )
}

const styles = {
  offline: {
    color: '#3d3d3d',
    fontFamily: styleVars.bodyFontStack,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '0 20px',
    height: '100vh',
    maxHeight: '100vh',
    fontSize: '1.25rem',
    textAlign: 'center',
    '@media (min-width: 480px)': {
      fontSize: '2.5rem',
    },
  },
  offlineTitle: {
    display: 'flex',
    alignSelf: 'center',
    fontFamily: styleVars.titleFontStack,
  },
  mobile: {
    '@media (min-width: 480px)': {
      display: 'none',
    },
  },
  desktop: {
    '@media (max-width: 480px)': {
      display: 'none',
    },
  }
}

export default Radium(OnlineMessage);
