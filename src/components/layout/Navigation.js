import React from 'react';
import Radium from 'radium';
// import { NavLink as ReactRouterNavLink } from 'react-router-dom';
import '../../index.css';

// const NavLink = Radium(ReactRouterNavLink);
// this isn't working: https://github.com/FormidableLabs/radium/issues/398

function Navigation() {
  return (
    <div>
    </div>
  )
}

const styles = {
  navItems: {
    position: 'absolute',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
  navItem: {
    display: 'flex',
    alignSelf: 'center',
    textDecoration: 'none',
    margin: 10,
    fontFamily: 'Lato-Medium, sans-serif',
  },
}

export default Radium(Navigation);
