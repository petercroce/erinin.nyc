import React from 'react';
import Radium from 'radium';

import colors from '../../../styles/Colors.js';

function Subtitle(props) {
  return (
    <h2 style={styles.subtitle}>{props.children}</h2>
  )
}

const styles = {
  subtitle: {
    color: colors.textColor,
    fontSize: '2rem',
    fontFamily: 'Aleo-Light',
    lineHeight: 1.2,
    display: 'block',

    // '@media (max-width: 1197px)': { // smaller laptops
    //   fontSize: '9em',
    // },
    '@media (max-width: 992px)': { // tablet
      fontSize: '1.5rem',
    },
    // '@media (max-width: 649px)': { // large mobile
    //   fontSize: '1.25rem',
    // },
    // '@media (max-width: 557px)': { // medium mobile
    //   fontSize: '4em',
    // },
    // '@media (max-width: 480px)': { // mobile
    //   fontSize: '2.75em',
    // },
  },
}

export default Radium(Subtitle);
