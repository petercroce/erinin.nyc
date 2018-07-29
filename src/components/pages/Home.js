import React from 'react';
import Radium from 'radium';

import Header from '../layout/Header';
import Footer from '../layout/Footer';
import Navigation from '../layout/Navigation';

import EmailSignupForm from '../layout/elements/EmailSignupForm';


function Home() {

  return (
    <div style={styles.home}>

      <Navigation />

      <Header></Header>
      <EmailSignupForm></EmailSignupForm>

      <Footer></Footer>
    </div>
  )
}

const styles = {
  home: {
    maxWidth: 2000,
    margin: '0 auto',
    position: 'relative',
  }

}

export default Radium(Home);
