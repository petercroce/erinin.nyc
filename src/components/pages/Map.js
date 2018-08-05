import React from 'react';
import Radium from 'radium';

import '../../styles/map.css';
// import lines from '../../assets/lines.js';
// import stops from '../../assets/stops.js';
// import codepenMap from '../../assets/codepen-map.js';
// import mapboxgl from '../../assets/mapbox.js';

function Map() {

  return (
    <div style={styles.map}>
      {/* <Navigation></Navigation> */}
      <div id="map"></div>
      <div class="header-wrap">
        <header>
          <h1>NYC Subway System</h1>
          <div class="lines">
            <span class="A">A</span>
            <span class="A">C</span>
            <span class="A">E</span>
            <span class="B">B</span>
            <span class="B">D</span>
            <span class="B">F</span>
            <span class="B">M</span>
            <span class="G">G</span>
            <span class="J">J</span>
            <span class="J">Z</span>
            <span class="L">L</span>
            <span class="N">N</span>
            <span class="N">Q</span>
            <span class="N">R</span>
            <span class="S">S</span>
            <span class="one">1</span>
            <span class="one">2</span>
            <span class="one">3</span>
            <span class="four">4</span>
            <span class="four">5</span>
            <span class="four">6</span>
            <span class="seven">7</span>
          </div>
        </header>
      </div>
    </div>
  )
}

const styles = {
  map: {
    maxWidth: 2000,
    margin: '0 auto',
    position: 'relative',
    height: 150,
  }
}

export default Radium(Map);
