import React from 'react';
import Radium from 'radium';

import Section from '../layout/elements/Section';
import SectionLeft from '../layout/elements/SectionLeft';

import WebsiteTitle from '../layout/elements/WebsiteTitle';
import Subtitle from '../layout/elements/Subtitle';
import Paragraph from '../layout/elements/Paragraph';

function Header() {
  return (
    <div style={styles.background}>
      <div style={styles.header}>
      <Section>
        <SectionLeft>
          <WebsiteTitle>Erin is moving to NYC</WebsiteTitle>
          <Subtitle>And I'm excited</Subtitle>
          <Paragraph></Paragraph>
          {/* <Paragraph>This is a safe space. Go ahead. Write a note to Erin about how you feel about her moving to NYC. Don't hold back. I'll grab the tissues.</Paragraph> */}
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
