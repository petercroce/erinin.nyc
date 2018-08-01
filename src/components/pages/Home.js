import React from 'react';
import Radium from 'radium';

import Header from '../layout/Header';
import Body from '../layout/Body';
import Footer from '../layout/Footer';
import Navigation from '../layout/Navigation';

// import NoteTaker from '../layout/elements/NoteTaker';
// import ShowYoga from '../layout/elements/ShowYoga';
// import EmailSignupForm from '../layout/elements/EmailSignupForm';

function Home() {

  return (
    <div style={styles.outerWrapper}>
      <div style={styles.innerWrapper}>


      <Navigation />

      <Header></Header>

      <Body></Body>

      </div>
      <Footer></Footer>

    </div>
  )
}

const styles = {
  outerWrapper: {
    display: 'flex',
    minHeight: '100vh',
    flexDirection: 'column',
    '@media (max-width: 448px)': {
      minHeight: 0,
    },
  },
  innerWrapper: {
    flex: 1,
  },

}

export default Radium(Home);
