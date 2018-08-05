import React from 'react';
import Radium from 'radium';

import styleVars from '../../../styles/styleVars.js';

function WebsiteTitle(props) {
  return (
    <h1 style={styles.title}>{props.children}</h1>
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

export default Radium(WebsiteTitle);
