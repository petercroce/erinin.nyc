import React from 'react';
import Radium from 'radium';

function Card(props) {
  return (
    <div style={styles.card}>
      {props.children}
    </div>
  )
}

const styles = {
  card: {
    display: 'flex',
    '@media (max-width: 649px)': { // large mobile
      flexDirection: 'column',
    },
  }
}

export default Radium(Card);
