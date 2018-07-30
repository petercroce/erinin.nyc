import React from 'react';
import Radium from 'radium';

import colors from '../../../styles/Colors.js';

function Paragraph(props) {
  return (
    <p style={styles.paragraph}>
      {props.children}
    </p>
  )
}

const styles = {
  paragraph: {
    color: colors.textColor,
    fontSize: '1.25rem',
    fontFamily: 'Lato-Light',
    margin: '1em 0 0 0',
    '@media (max-width: 480px)': { // mobile
      fontSize: '1.125rem',
      margin: '0.75em 0 0 0',
    },
  },
}

export default Radium(Paragraph);
