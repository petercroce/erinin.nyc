import React from 'react';
import Radium from 'radium';

import Section from '../layout/elements/Section';
import SectionLeft from '../layout/elements/SectionLeft';

import WebsiteTitle from '../layout/elements/WebsiteTitle';

function Header() {
  return (
    <div style={styles.header}>
    <Section>
      <SectionLeft>
        <WebsiteTitle>Erin is moving to NYC</WebsiteTitle>
      </SectionLeft>
    </Section>
    </div>
  )
}

const styles = {
  header: {
  }
}

export default Radium(Header);
