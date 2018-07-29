import React, { Component } from 'react';
import Radium, { StyleRoot } from 'radium';

import {
  BrowserRouter as Router,
  Route,
  Switch } from 'react-router-dom';

import About from './components/pages/About';
import Home from './components/pages/Home';

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
                <Route path='/about' component={About} />
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
    // backgroundImage: 'linear-gradient(180deg, rgba(101,163,214,1) 0%, rgba(238,238,238,1) 75%)',
    backgroundColor: '#eee',
    minHeight: '100vh',
    width: '100%',
    overflow: 'hidden',
  }
}

export default Radium(App);
