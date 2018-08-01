import React from 'react';
import Radium from 'radium';

import styleVars from '../../../styles/styleVars.js';

function Paragraph(props) {
  return (
    <p style={styles.paragraph}>
      {props.children}
    </p>
  )
}

const styles = {
  paragraph: {
    color: styleVars.textColor,
    fontSize: '1.25rem',
    fontFamily: styleVars.bodyFontStack,
    margin: '1em 0 0 0',
    '@media (max-width: 480px)': { // mobile
      fontSize: '1.125rem',
      margin: '0.75em 0 0 0',
    },
  },
}

export default Radium(Paragraph);
