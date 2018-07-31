import React from 'react';
import Radium from 'radium';

import Section from '../layout/elements/Section';
import SectionLeft from '../layout/elements/SectionLeft';
import Subtitle from '../layout/elements/Subtitle';
import Paragraph from '../layout/elements/Paragraph';

import NoteTaker from '../layout/elements/NoteTaker';

function Body() {
  return (
    <div style={styles.background}>
      <div style={styles.body}>
      <Section>
        <SectionLeft>
          <Paragraph>
            I know it's a big move and will be a big transition for you and I want to do everything I can to help make it easier. I don't think I've thought of everything I could do yet (and I'm open to ideas, please) but I want to make sure you have unlimited yoga for the first three months.
          </Paragraph>
          <Paragraph>
            There are <a href="https://airtable.com/invite/l?inviteId=invuEtp3FtLlX7U05&inviteToken=51b872ce4dbb43731c9c03408c81facbb0fff213cf9479bf927ede193bd4130d">some options with locations and prices and scheules and other things that might matter to you</a>.
          </Paragraph>
          <NoteTaker></NoteTaker>
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
