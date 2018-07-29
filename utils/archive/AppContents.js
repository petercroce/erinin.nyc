import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch } from 'react-router-dom';

import About from '../pages/About';
import Home from '../pages/Home';
import How from '../pages/How';

// Posts
import PostOne from '../pages/posts/PostOne';

import '../../index.css';

function AppContents() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/how' component={How} />
          <Route path='/posts/one' component={PostOne} />
          <Route component={Home} />
        </Switch>
      </div>
    </Router>
  )
}

export default AppContents;
