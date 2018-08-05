import React, { Component } from 'react';
import Radium, { StyleRoot } from 'radium';

import {
  BrowserRouter as Router,
  Route,
  Switch } from 'react-router-dom';

import Hbd from './components/pages/Hbd';
import Home from './components/pages/Home';
import Map from './components/pages/Map';
import Notes from './components/pages/Notes';
import NotFound from './components/pages/NotFound';
import TermsAndConditions from './components/pages/TermsAndConditions';
import Yoga from './components/pages/Yoga';

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
                <Route path='/notes' component={Notes} />
                <Route path='/yoga' component={Yoga} />
                <Route path='/terms-and-conditions' component={TermsAndConditions} />
                <Route path='/404' component={NotFound} />
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
    width: '100%',
    overflow: 'hidden',

    maxWidth: 2000,
    margin: '0 auto',
    position: 'relative',

  }
}

export default Radium(App);
