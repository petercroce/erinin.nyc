import React from 'react';
import Radium from 'radium';
import { NavLink } from 'react-router-dom';
import '../../index.css';

function Navigation(props) {
  return (
    <ul style={styles.list}>
      <li>
        <NavLink
          style={styles.navItem}
          activeClassName="active"
          exact
          to='/'>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          style={styles.navItem}
          activeClassName="active"
          to='/about'>
          About
        </NavLink>
      </li>
    </ul>
  )
}

const styles = {
  list: {
    display: 'flex',
    listStyle: 'none',
    margin: 0,
  },
  navItem: {
    display: 'flex',
    alignSelf: 'center',
    color: 'gray',
    textDecoration: 'none',
    margin: 10,
    fontFamily: '-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif',
  }
}

export default Radium(Navigation);
