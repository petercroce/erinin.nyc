import React from 'react';
import Radium from 'radium';

function WebsiteTitle(props) {
  return (
    <h1 style={styles.title}>{props.children}</h1>
  )
}

const styles = {
  title: {
    color: '#eee',
    fontSize: '4rem',
    fontFamily: 'Aleo-Light',
    display: 'block',

    // '@media (max-width: 1197px)': { // smaller laptops
    //   fontSize: '9em',
    // },
    '@media (max-width: 992px)': { // tablet
      fontSize: '2.5rem',
    },
    '@media (max-width: 649px)': { // large mobile
      fontSize: '1.75rem',
    },
    // '@media (max-width: 557px)': { // medium mobile
    //   fontSize: '4em',
    // },
    // '@media (max-width: 480px)': { // mobile
    //   fontSize: '2.75em',
    // },
  },
}

export default Radium(WebsiteTitle);
