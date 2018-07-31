import React from 'react';
import Radium from 'radium';

import Section from '../layout/elements/Section';
import SectionLeft from '../layout/elements/SectionLeft';
import Subtitle from '../layout/elements/Subtitle';
import Paragraph from '../layout/elements/Paragraph';

import NoteTaker from '../layout/elements/NoteTaker';
import NoteReader from '../layout/elements/NoteReader';


function Body() {
  return (
    <div style={styles.background}>
      <div style={styles.body}>
      <Section>
        <SectionLeft>
          
          <NoteTaker></NoteTaker>
          {/* <NoteReader></NoteReader> */}
        </SectionLeft>
      </Section>
      </div>
    </div>
  )
}

const styles = {
  body: {
  }
}

export default Radium(Body);
