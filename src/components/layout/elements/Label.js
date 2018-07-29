import React from 'react';
import Radium from 'radium';

function Label(props) {
  return (
    <p style={styles.label}>
      {props.children}
    </p>
  )
}

const styles = {
  label: {
    color: '#eee',
    fontSize: '1.25rem',
    fontFamily: 'Aleo-Light',
    margin: 0,
    marginBottom: 30,
    '@media (max-width: 480px)': { // mobile
      fontSize: '1.125rem',
    },
  },
}

export default Radium(Label);
