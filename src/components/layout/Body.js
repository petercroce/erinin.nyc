import React from 'react';
import Radium from 'radium';
import { Link } from 'react-router-dom';

import Section from '../layout/elements/Section';
import SectionLeft from '../layout/elements/SectionLeft';
import Paragraph from '../layout/elements/Paragraph';

import styleVars from '../../styles/styleVars.js';


function Body() {
  return (
    <div style={styles.background}>
      <div style={styles.body}>
      <Section>
        <SectionLeft>
          <Paragraph>So I made this app as a thing we can play with together. Who knows what we will make of it! But for now, here are some things you can do.</Paragraph>

          <Paragraph><Link to="/notes">Take a note</Link> and save it in your <a href="https://airtable.com/tblTsQto3kNbjBtne/viwhQ28WeObIFLtXi" target="_blank" rel="noopener noreferrer">NYC base</a> where you can view <a href="https://airtable.com/tblTsQto3kNbjBtne/viw8lthfxodpr7Mr3" target="_blank" rel="noopener noreferrer">active notes</a> or <a href="https://airtable.com/tblTsQto3kNbjBtne/viwymTFYwDJymJqYc" target="_blank" rel="noopener noreferrer">completed notes</a>.</Paragraph>

          <Paragraph>You can also read your <Link to="/hbd">digital happy birthday card</Link> again. I know it's not as good as a real one. I'm excited to make real things with you soon, without a screen between us. Ilysm.</Paragraph>
          <div style={styles.buttonWrapper}>
            <Link to='/notes' style={styles.button}>
              Take Note
            </Link>
            <Link to='/hbd' style={styles.button}>
              Read Card
            </Link>
            {/* <a href="/yoga"  style={styles.button}>Agree</a>
            <a href="/"  style={styles.button}>Home</a> */}
          </div>
        </SectionLeft>
      </Section>
      </div>
    </div>
  )
}

const styles = {
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

export default Radium(Body);
