import React from 'react';
import Radium from 'radium';
import { Link } from 'react-router-dom';

import Footer from '../layout/Footer';

import Section from '../layout/elements/Section';
import SectionLeft from '../layout/elements/SectionLeft';
import Paragraph from '../layout/elements/Paragraph';
import WebsiteTitle from '../layout/elements/WebsiteTitle';

import styleVars from '../../styles/styleVars.js';

function Hbd() {
  return (
    <div style={styles.outerWrapper}>
      <div style={styles.innerWrapper}>
      <Section>
        <SectionLeft>
          <WebsiteTitle>
            Terms and Conditions
          </WebsiteTitle>
          <Paragraph>
            By agreeing to accept Yoga Bux™ you acknowledge that you have read the following.
          </Paragraph>
          <Paragraph>
            To love is good, too: love being difficult. For one human being to love another: that is perhaps the most difficult of all our tasks, the ultimate, the last test and proof, the work for which all other work is but preparation. For this reason young people, who are beginners in everything, cannot yet know love: they have to learn it. With their whole being, with all their forces, gathered close about their lonely, timid, upward-beating heart, they must learn to love. But learning-time is always a long, secluded time, and so loving, for a long while ahead and far on into life, is — solitude, intensified and deepened loneness for him who loves. Love is at first not anything that means merging, giving over, and uniting with another (for what would a union be of something unclarified and unfinished, still subordinate — ?), it is a high inducement to the individual to ripen, to become something in himself, to become world, to become world for himself for another’s sake, it is a great exacting claim upon him, something that chooses him out and calls him to vast things. Only in this sense, as the task of working at themselves (“to hearken and to hammer day and night”), might young people use the love that is given them. Merging and surrendering and every kind of communion is not for them (who must save and gather for a long, long time still), is the ultimate, is perhaps that for which human lives as yet scarcely suffice.
          </Paragraph>
          <Paragraph>
            Do not search now for the answers which cannot be given you because you could not live them. It is a matter of living everything. Live the questions now. Perhaps you will then gradually, without noticing it, one distant live right into the answer.
          </Paragraph>
          <Paragraph>
            But it is the difficult that is enjoined upon us, almost everything serious is difficult, and everything is serious. If you only recognize that and contrive, yourself, out of your own disposition and nature, out of your experience and childhood and strength to achieve an entirely individual relationship to sex, then you need no longer fear to lose yourself and become unworthy of your best possession.
          </Paragraph>
          <Paragraph>
            It is good that you are entering first of all upon a profession which makes you independent and places you on your own in every sense. Wait patiently to see whether your innermost life feels constrained by the form of this profession.
          </Paragraph>
          <Paragraph>
            Perhaps it will turn out that you are called to be an artist. Then take your fate upon yourself and bear it, its burden and its greatness, without ever asking for that reward which might come from without.
          </Paragraph>
          <Paragraph>
            Works of art are of an infinite solitariness, and nothing is less likely to bring us near to them than criticism. Only love can apprehend and hold them, and can be just towards them.
          </Paragraph>
          <Paragraph>
            <div>Again and again, however we know the landscape of love</div>
            <div>and the little churchyard there, with its sorrowing names,</div>
            <div>and the frighteningly silent abyss into which the others</div>
            <div>fall: again and again the two of us walk out together</div>
            <div>under the ancient trees, lie down again and again</div>
            <div>among the flowers, face to face with the sky.</div>

          </Paragraph>


          <div style={styles.buttonWrapper}>
            <Link to='/hbd' style={styles.button}>
              Back
            </Link>
            <Link to='/yoga' style={styles.button}>
              Accept
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
  },
}

export default Radium(Hbd);
