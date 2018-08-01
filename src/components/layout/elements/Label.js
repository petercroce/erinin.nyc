import React from 'react';
import Radium from 'radium';

import styleVars from '../../../styles/styleVars.js';

function Label(props) {
  return (
    <p style={styles.label}>
      {props.children}
    </p>
  )
}

const styles = {
  label: {
    color: styleVars.backgroundColor,
    fontSize: '1.25rem',
    fontFamily: styleVars.titleFontStack,
    margin: 0,
    marginBottom: 30,
    '@media (max-width: 480px)': { // mobile
      fontSize: '1.125rem',
    },
  },
}

export default Radium(Label);
