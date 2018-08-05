import React from 'react';
import Radium from 'radium';

import styleVars from '../../../styles/styleVars.js';

function Title(props) {
  return (
    <h2 style={styles.title}>{props.children}</h2>
  )
}

const styles = {
  title: {
    color: styleVars.textColor,
    display: 'block',
    fontFamily: styleVars.titleFontStack,
    fontSize: '4rem',
    margin: 0,
    '@media (max-width: 992px)': { // tablet
      fontSize: '2.5rem',
    },
  },
}

export default Radium(Title);
