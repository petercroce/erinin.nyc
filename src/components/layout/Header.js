import React from 'react';
import Radium from 'radium';

import Section from '../layout/elements/Section';
import SectionLeft from '../layout/elements/SectionLeft';
import Subtitle from '../layout/elements/Subtitle';
import WebsiteTitle from '../layout/elements/WebsiteTitle';

function Header() {
  return (
    <div style={styles.background}>
      <div style={styles.header}>
      <Section>
        <SectionLeft>
          <WebsiteTitle>
            Hi bb
          </WebsiteTitle>

          <Subtitle>
            I'm very excited you're moving to NYC. 
          </Subtitle>
          <br/>
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
