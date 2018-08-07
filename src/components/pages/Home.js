import React from 'react';
import Radium from 'radium';
import { Link } from 'react-router-dom';

import Navigation from '../layout/Navigation';
import Header from '../layout/Header';
import Footer from '../layout/Footer';

import Section from '../layout/elements/Section';
import SectionLeft from '../layout/elements/SectionLeft';
import Paragraph from '../layout/elements/Paragraph';

import styleVars from '../../styles/styleVars.js';

function Home() {
  // make it update https://reactjs.org/docs/state-and-lifecycle.html
  function getTimeLeft() {
    let arrival = new Date('August 25, 2018 00:30:00 UTC'); // 8:30 pm Aug 24 EST in GMT (EST + 4)
    let now = Date.now();
    let countdown = arrival - now;
    return countdown;
  }
  function convertMS(ms) {
    var d, h, m, s;
    s = Math.floor(ms / 1000);
    m = Math.floor(s / 60);
    s = s % 60;
    h = Math.floor(m / 60);
    m = m % 60;
    d = Math.floor(h / 24);
    h = h % 24;
    return { d: d, h: h, m: m, s: s };
  };

  let countdown = getTimeLeft();
  countdown = convertMS(countdown);
  // function tick(num) {
  //   setTimeout((num) => {
  //     num
  //   })
  // }
  // countdown = tick(countdown);
  return (
    <div style={styles.outerWrapper}>
      <div style={styles.innerWrapper}>
      <Navigation />
      <Header></Header>
      <Section>
        <SectionLeft>
          <Paragraph>
            And I'm exicted about it so I made this as a thing we can play with together. Who knows what we will make of it! But for now, here are some things it does.
          </Paragraph>
          <Paragraph>
            <Link to="/notes">Take a note</Link> and save it in your <a href="https://airtable.com/tblTsQto3kNbjBtne/viwhQ28WeObIFLtXi" target="_blank" rel="noopener noreferrer">NYC Airtable base</a>.
          </Paragraph>
          <Paragraph>
            Add it to your iPhone home screen as a quick way to save notes to the above.
          </Paragraph>
          <Paragraph>
            Read your <Link to="/yoga">digital happy birthday gift card</Link>. It's not as good as a real one. I'm excited to make real things with you soon, without a screen between us.
          </Paragraph>
          <Paragraph>
            See you in {`${countdown.d} days ${countdown.h} hours and ${countdown.m} minutes`}.
          </Paragraph>
          <div style={styles.buttonWrapper}>
            <Link to='/notes' style={styles.button}>
              Take Note
            </Link>
            <Link to='/yoga' style={styles.button}>
              Read Card
            </Link>
          </div>
        </SectionLeft>
      </Section>
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
  button: {
    display: 'block',
    backgroundColor: 'transparent',
    color: styleVars.textColor,
    border: `3px solid ${styleVars.textColor}`,
    textAlign: 'center',
    marginBottom: '1rem',
    fontSize: '1.5em',
    padding: '0.5rem 0.75rem',
    width: 200,
    '@media (max-width: 992px)': {
      padding: '.5rem .57rem',
    },
    '@media (max-width: 448px)': {
      width: '100%',
    },
  },
  buttonWrapper: {
    margin: '2rem 0',
    display: 'flex',
    justifyContent: 'space-between',
    '@media (max-width: 448px)': {
      width: '100%',
      flexDirection: 'column',
      marginTop: '1.5rem',
    },
  }
}

export default Radium(Home);
