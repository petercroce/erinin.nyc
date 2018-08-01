import React, { Component } from 'react';
import Radium, { StyleRoot } from 'radium';

import {
  BrowserRouter as Router,
  Route,
  Switch } from 'react-router-dom';

import About from './components/pages/About';
import Home from './components/pages/Home';
import Map from './components/pages/Map';
import Hbd from './components/pages/Hbd';
import NotFound from './components/pages/NotFound';
import TermsAndConditions from './components/pages/TermsAndConditions';


import styleVars from './styles/styleVars.js';

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
                <Route path='/hbd' component={Hbd} />
                <Route path='/terms-and-conditions' component={TermsAndConditions} />
                <Route component={NotFound} />
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
    backgroundColor: styleVars.backgroundColor,
    minHeight: '100vh',
    width: '100%',
    overflow: 'hidden',
  }
}

export default Radium(App);
