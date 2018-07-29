import React from 'react';
import Radium from 'radium';
import { Link } from 'react-router-dom';

// import Navigation from './Navigation';
// import logo from '../../imgs/logo.svg';
import BlinkingEye from './BlinkingEye';

function Header(props) {
  return (
    <header style={styles.header}>
      {/* <h3 style={styles.title}>State of Attn</h3> */}
      <Link to='/'>
        <BlinkingEye></BlinkingEye>
      </Link>
      {/* <img src={logo} style={styles.logo} alt="Eye" /> */}
      {/* <Navigation /> */}
    </header>
  )
}

const spinKeyframes = Radium.keyframes({
  '0%':   { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' }
});

const styles = {
  header: {
    backgroundColor: '#fff',
    boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
    display: 'flex',
    justifyContent: 'center',
    height: 90,
    padding: '0 5rem',
    maxWidth: 800,

    '@media (max-width: 992px)': {
      padding: '20px',
    },
  },
  title: {
    alignSelf: 'center',
    marginRight: 20,
  },
  logo: {
    alignSelf: 'center',
    animation: 'x infinite 20s linear',
    animationName: spinKeyframes,
    display: 'flex',
    height: 30,
  },
}


export default Radium(Header);
