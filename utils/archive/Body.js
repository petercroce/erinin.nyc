import React, { Component } from 'react';
import Radium from 'radium';
import { Link } from 'react-router-dom';

import Section from './Section';


class Body extends Component {
  render() {
    return (
      <div style={styles.body}>

        <Section>

        </Section>

      </div>
    )
  }
}

const styles = {
  body: {
    paddingBottom: '2rem',
  }
}

export default Radium(Body);
