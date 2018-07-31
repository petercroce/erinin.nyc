import React, { Component } from 'react';
import Radium, { StyleRoot } from 'radium';

import {
  BrowserRouter as Router,
  Route,
  Switch } from 'react-router-dom';

import About from './components/pages/About';
import Home from './components/pages/Home';
import Map from './components/pages/Map';

import colors from './styles/Colors.js';

import './index.css';

class App extends Component {
  render() {
    return (
      <StyleRoot>
        <div style={styles.app}>
          <Router>
            <div>
              <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/map' component={Map} />
                <Route component={Home} />
              </Switch>
            </div>
          </Router>
        </div>
      </StyleRoot>
    );
  }
}

const styles = {
  app: {
    backgroundColor: colors.backgroundColor,
    minHeight: '100vh',
    width: '100%',
    overflow: 'hidden',
  }
}

export default Radium(App);
