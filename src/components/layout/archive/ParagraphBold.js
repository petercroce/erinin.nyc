import React from 'react';
import Radium from 'radium';

function ParagraphBold(props) {
  return (
    <p style={styles.paragraphBold}>
      {props.children}
    </p>
  )
}

const styles = {
  paragraphBold: {
    color: '#3d3d3d',
    fontSize: '2em',
    fontFamily: 'Lato-Medium',
    margin: '2em 0 0 0',
    '@media (max-width: 480px)': { // mobile
      fontSize: '1.25em',
    },
  },
}

export default Radium(ParagraphBold);
