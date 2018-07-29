import React from 'react';
import Radium from 'radium';

function VeryDistressedEye() {
  return (
    <div style={styles.container}>
      <div style={[styles.eye, styles.eye2]}></div>

    </div>
  )
}

const distressKeyframes = Radium.keyframes({
  '0%':   {backgroundPosition: '50% 50%, 50% 50%, 50% 50%, calc(50% - 80px) 50%'},
  '10%':  {backgroundPosition: '50% 50%, 50% 50%, 50% 50%, calc(50% + 80px) 50%'},
  '20%':  {backgroundPosition: '50% 50%, 50% 50%, 50% 50%, 50% calc(50% - 50px)'},
  '30%':  {backgroundPosition: '50% 50%, 50% 50%, 50% 50%, 50% calc(50% - 50px)'},
  '40%':  {backgroundPosition: '50% 50%, 50% 50%, 50% 50%, calc(50% - 50px) calc(50% - 50px)'},
  '50%':  {backgroundPosition: '50% 50%, 50% 50%, 50% 50%, calc(50% + 50px) calc(50% + 50px)'},
  '60%':  {backgroundPosition: '50% 50%, 50% 50%, 50% 50%, calc(50% + 50px) calc(50% + 50px)'},
  '70%':  {backgroundPosition: '50% 50%, 50% 50%, 50% 50%, calc(50% + 80px) 50%'},
  '80%':  {backgroundPosition: '50% 50%, 50% 50%, 50% 50%, calc(50% + 80px) calc(50% + 50px)'},
  '90%':  {backgroundPosition: '50% 50%, 50% 50%, 50% 50%, calc(50% - 80px) 50%'},
  '100%': {backgroundPosition: '50% 50%, 50% 50%, 50% 50%, calc(50% - 80px) 50%'}
});

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  eye: {
    height: '140px',
    width: '200px',
    backgroundColor: 'white',
    backgroundImage: 'radial-gradient(ellipse at 50% 45%, rgba(0, 0, 0, 0) 100px, #ffffff 100px), radial-gradient(ellipse at 50% 55%, rgba(0, 0, 0, 0) 85px, #000000 90px, #ffffff 100px), radial-gradient(ellipse at 50% 45%, rgba(0, 0, 0, 0) 97px, #000000 10px, #ffffff 100px), radial-gradient(circle, #3d3d3d 18px, #808080 20px, #ffffff 34px, #000000 38px, rgba(0, 0, 0, 0) 0%), radial-gradient(#ffffff 150px, rgba(0, 0, 0, 0))',
    backgroundSize: '500px 250px, 500px 250px, 500px 250px, 150px 150px, 500px 250px',
    backgroundPosition: '50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%',
    backgroundRepeat: 'no-repeat',
    animation: '7s x infinite linear',
    animationName: distressKeyframes,
  },
  eye2: {
    alignSelf: 'flex-end',
  },
  eye4: {
    alignSelf: 'flex-end',
  },
}
export default Radium(VeryDistressedEye);
