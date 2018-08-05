import React from 'react';
import Radium from 'radium';

function SectionLeft(props) {
  return (
    <div style={styles.section}>
      {props.children}
    </div>
  )
}

const styles = {
  section: {
    width: '50%',
    display: 'inline-block',
    verticalAlign: 'top',
    '@media (max-width: 992px)': { // tablet
      marginTop: 40,
      width: '75%',
    },
    '@media (max-width: 649px)': { // large mobile
      width: '100%',
    },
  },
}

export default Radium(SectionLeft);
