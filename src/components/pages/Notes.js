import React from 'react';
import Radium from 'radium';

import Header from '../layout/Header';
import Footer from '../layout/Footer';
import Navigation from '../layout/Navigation';


function Notes() {

  return (
    <div style={styles.notes}>

      <Navigation />

      <Header></Header>

      <Footer></Footer>
    </div>
  )
}

const styles = {
  notes: {
    maxWidth: 2000,
    margin: '0 auto',
    position: 'relative',
  }

}

export default Radium(Notes);
