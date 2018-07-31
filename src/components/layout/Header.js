import React from 'react';
import Radium from 'radium';

import Section from '../layout/elements/Section';
import SectionLeft from '../layout/elements/SectionLeft';


function Header() {
  return (
    <div style={styles.background}>
      <div style={styles.header}>
      <Section>
        <SectionLeft>

        </SectionLeft>
      </Section>
      </div>
    </div>
  )
}

const styles = {
  header: {
  }
}

export default Radium(Header);
