import React from 'react';
import Radium from 'radium';
import { Link } from 'react-router-dom';

function DistressedEye() {
  return (
    <div style={styles.container}>
      <Link to='/posts/one'><div style={styles.eye}></div></Link>
      {/* <div style={[styles.eye]}></div> */}
      {/* <div style={styles.eye}></div> */}
      {/* <div style={[styles.eye, styles.eye4]}></div> */}
      {/* <div style={[styles.eye, styles.eye4]}></div> */}
    </div>
  )
}

const distressKeyframes = Radium.keyframes({
  '0%':   {backgroundPosition: '50% 50%, 50% 50%, 50% 50%, calc(50% - 50px) 50%'},
  '10%':  {backgroundPosition: '50% 50%, 50% 50%, 50% 50%, calc(50% + 50px) 50%'},
  '20%':  {backgroundPosition: '50% 50%, 50% 50%, 50% 50%, 50% calc(50% - 15px)'},
  '30%':  {backgroundPosition: '50% 50%, 50% 50%, 50% 50%, 50% calc(50% - 15px)'},
  '40%':  {backgroundPosition: '50% 50%, 50% 50%, 50% 50%, calc(50% - 30px) calc(50% - 15px)'},
  '50%':  {backgroundPosition: '50% 50%, 50% 50%, 50% 50%, calc(50% + 30px) calc(50% + 15px)'},
  '60%':  {backgroundPosition: '50% 50%, 50% 50%, 50% 50%, calc(50% + 30px) calc(50% + 15px)'},
  '70%':  {backgroundPosition: '50% 50%, 50% 50%, 50% 50%, calc(50% + 50px) 50%'},
  '80%':  {backgroundPosition: '50% 50%, 50% 50%, 50% 50%, calc(50% + 50px) calc(50% + 15px)'},
  '90%':  {backgroundPosition: '50% 50%, 50% 50%, 50% 50%, calc(50% - 50px) 50%'},
  '100%': {backgroundPosition: '50% 50%, 50% 50%, 50% 50%, calc(50% - 50px) 50%'}
});
const distressKeyframesEye2 = Radium.keyframes({
  '0%':   {backgroundPosition: 'calc(50% - 50px) 50%'},
  '10%':  {backgroundPosition: 'calc(50% + 50px) 50%'},
  '20%':  {backgroundPosition: '50% calc(50% - 15px)'},
  '30%':  {backgroundPosition: '50% calc(50% - 15px)'},
  '40%':  {backgroundPosition: 'calc(50% - 30px) calc(50% - 15px)'},
  '50%':  {backgroundPosition: 'calc(50% + 30px) calc(50% + 15px)'},
  '60%':  {backgroundPosition: 'calc(50% + 30px) calc(50% + 15px)'},
  '70%':  {backgroundPosition: 'calc(50% + 50px) 50%'},
  '80%':  {backgroundPosition: 'calc(50% + 50px) calc(50% + 15px)'},
  '90%':  {backgroundPosition: 'calc(50% - 50px) 50%'},
  '100%': {backgroundPosition: 'calc(50% - 50px) 50%'}
});

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
  },
  eye: {
    height: '140px',
    width: '200px',
    backgroundColor: 'white',
    backgroundImage: 'radial-gradient(ellipse at 50% 45%, rgba(0, 0, 0, 0) 100px, #ffffff 100px), radial-gradient(ellipse at 50% 55%, rgba(0, 0, 0, 0) 98px, #3d3d3d 90px, #ffffff 100px), radial-gradient(ellipse at 50% 45%, rgba(0, 0, 0, 0) 98px, #3d3d3d 10px, #3d3d3d 100px), radial-gradient(circle, #3d3d3d 18px, #808080 20px, #ffffff 34px, #3d3d3d 38px, rgba(0, 0, 0, 0) 0%), radial-gradient(#ffffff 150px, rgba(0, 0, 0, 0))',
    backgroundSize: '500px 250px, 500px 250px, 500px 250px, 150px 150px, 500px 250px',
    backgroundPosition: '50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%',
    backgroundRepeat: 'no-repeat',
    animation: '7s x infinite ease-in-out',
    animationName: distressKeyframes,
  },
  eye2: {
    height: '140px',
    width: '200px',
    backgroundColor: 'white',
    backgroundImage: 'radial-gradient(circle, #3d3d3d 18px, #808080 20px, #ffffff 34px, #3d3d3d 38px, rgba(0, 0, 0, 0) 0%), radial-gradient(#ffffff 150px, rgba(0, 0, 0, 0))',
    backgroundSize: '500px 250px, 500px 250px, 500px 250px, 150px 150px, 500px 250px',
    backgroundPosition: '50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%',
    backgroundRepeat: 'no-repeat',
    animation: '7s x infinite ease-in-out',
    animationName: distressKeyframesEye2,
  },
  eye4: {
    alignSelf: 'flex-end',
  },
}
export default Radium(DistressedEye);
