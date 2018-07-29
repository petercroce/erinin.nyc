import React from 'react';
import Radium from 'radium';

function Paragraph(props) {
  return (
    <p style={styles.paragraph}>
      {props.children}
    </p>
  )
}

const styles = {
  paragraph: {
    color: '#eee',
    fontSize: '1.25rem',
    fontFamily: 'Lato-Light',
    margin: '1em 0 0 0',
    '@media (max-width: 480px)': { // mobile
      fontSize: '1.125rem',
      margin: 0,
    },
  },
}

export default Radium(Paragraph);
