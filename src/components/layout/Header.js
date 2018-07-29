import React from 'react';
import Radium from 'radium';

import Section from '../layout/elements/Section';
import SectionLeft from '../layout/elements/SectionLeft';
import Subtitle from '../layout/elements/Subtitle';
import WebsiteTitle from '../layout/elements/WebsiteTitle';

function Header() {
  return (
    <div style={styles.background}>
      <div style={styles.Header}>
      <Section>
        <SectionLeft>
          <WebsiteTitle>
            Transform Meetings
          </WebsiteTitle>

          <Subtitle>
            We use play to accelerate creative problem-solving and bring teams together.
          </Subtitle>
          <br/>
        </SectionLeft>
      </Section>
      </div>
    </div>
  )
}

// Colors
// const primary = '#65a3d6';
// const secondary = '#004787';
// const darkGray = '#1c1c1c';
// const lightGray = '#bcbcbc';
// const backgroundColor = '#eee';

const styles = {
  Header: {
  }
}

export default Radium(Header);
