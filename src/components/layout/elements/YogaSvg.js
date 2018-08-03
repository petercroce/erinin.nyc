import React from 'react';
import Radium from 'radium';

import styleVars from '../../../styles/styleVars.js';

function YogaSvg() {
  return(
    <div styles={style.wrapper} id="yoga-svg-wrapper">

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 380" width="100%" height="200" version="1.0" styles={style.svg}>
        <g transform="translate(300, 250)">
          <g transform="rotate(0, -200, 130)">
            <g transform="rotate(0, 0, 0)">
              <g transform="rotate( 0,0,-8)">
                <path d="M0 -110 l0 100" fill="none" stroke={styleVars.primary} stroke-width="12">
                  <animate dur="8s" repeatCount="indefinite" attributeName="d" values="
                      M0 -100 c-10 50 10 50 0 100;
                      M0 -100 c0 50 0 50 0 90;
                      M0 -100 c-30 50 -20 50 0 90;
                      M0 -100 c0 50 0 50 0 90;
                      M0 -100 c-20 70 -20 50 0 90;
                      M0 -100 c-10 70 -10 50 0 95;
                      M0 -80 c0 70 0 50 0 95;
                      M0 -80 c0 70 0 50 0 95;
                      M0 -80 c0 70 0 50 0 95;
                      M-60 -75 c40 30 50 50 60 95;
                      M-60 -50 c0 30 0 50 0 100;
                    M-60 -40 c-40 25 -40 25 -80 50;
                      M-60 -50 c0 30 0 50 0 100;
                      M0 -100 c-10 70 -10 50 0 95;
                      M0 -100 c-20 70 -20 50 0 90;
                      M0 -100 c-10 50 10 50 0 100;" />
                </path>
                <path d="M0 -100 l0 -45 l0 -45" fill="none" stroke={styleVars.primary} stroke-width="12">
                  <animate dur="8s" repeatCount="indefinite" attributeName="d" values="
                     M0 -90 l-5 40 l10 40;
                     M0 -100 l0 -45 l0 -45;
                     M0 -100 l45 10 l45 10;
                     M0 -100 l45 0 l45 0;
                     M0 -100 l45 -8 l45 -8;
                     M0 -100 l45 -8 l45 -8;
                     M0 -80 l45 -18 l45 -18;
                     M0 -80 l50 10 l50 10;
                      M0 -80 l-10 50 l50 -50;
                     M-60 -75 l50 10 l50 -15;
                     M-60 -50 l50 -15 l50 -15;
                    M-60 -40 l50 -20 l50 -20;
                     M-60 -50 l50 -15 l70 -15;
                     M0 -100 l45 -8 l70 -8;
                     M0 -100 l45 -8 l45 -8;
                     M0 -90 l-5 40 l10 40;" />
                </path>
                <circle cx="0" cy="-140" r="30" stroke={styleVars.primary} stroke-width="12" fill="none">
                  <animate dur="8s" repeatCount="indefinite" attributeName="cy" values="
                    -130; -130; -130; -130; -130; -130; -110; -110; -110;-90; -70; -50; -70; -130; -130; -130" />
                  <animate dur="8s" repeatCount="indefinite" attributeName="cx" values="
                    0; 0; 0; 0; 0; 0; 0; 0; 0;-85; -40; -30; -40; 0; 0; 0" />
                </circle>
                <animateTransform attributeName="transform" attributeType="XML" type="rotate" fill="freeze" values="
                  0,0,-8;
                  0,0,-8;
                  130,0,-8;
                  90, 0, -8;
                  130, 0, -8;
                  130, 0, -8;
                  130, 0, -8;
                  130, 0, -8;
                  130, 0, -8;
                  130, 0, -8;
                  130, 0, -8;
                  130, 0, -8;
                  130, 0, -8;
                  130, 0, -8;
                  130, 0, -8;
                  0,0,-8" dur="8s" repeatCount="indefinite" />

              </g>
              <g>
                <path d="M0 -10 l0 45 l0 45" fill="none" stroke={styleVars.primary} stroke-width="12">
                  <animate dur="8s" repeatCount="indefinite" attributeName="d" values="
                   M0 0 l5 65 l-10 65;
                   M0 -10 l0 70 l0 70;
                   M0 -10 l0 70 l0 70;
                   M0 -10 l0 70 l0 70;
                   M0 -10 l0 70 l0 70;
                   M0 -10 l70 40 l-70 40;
                  M0 -10 l0 70 l0 70;
                   M0 -10 l0 70 l0 70;
                   M0 -10 l0 70 l0 70;
                   M0 -10 l0 70 l0 70;
                   M-60 24 l60 10 l0 80;
                  M-136 -13 l70 60 l70 60;
                   M-60 24 l60 10 l0 80;
                   M0 -10 l70 40 l-70 40;
                   M0 -10 l0 70 l0 70;
                   M0 0 l5 65 l-10 65;" />
                </path>
                <animateTransform attributeName="transform" attributeType="XML" type="rotate" fill="freeze" values="
                  0,0,-10;
                  0,0,-10;
                  0,0,-10;
                  0, 0, -10;
                  0, 0, -10;
                  120, 0, -10;
                  130, -5 , -20;
                  130, -5 , -20;
                   130, -5 , -20;
                  130, -5 , -20;
                  130, -5 , -20;
                  130, -5 , -20;
                  130, -5 , -20;
                  120, 0 , -10;
                  0, 0, -10;
                  0, 0, -10" dur="8s" repeatCount="indefinite" />
              </g>

              <animateTransform attributeName="transform" attributeType="XML" type="rotate" fill="freeze" values="
                  0,  25, 80;
                  0,  25, 80;
                  0, 25, 80;
                  0, 25, 80;
                  0, 25, 80;
                  0, 25, 80;
                  0, 25, 80;
                -65, 25, 80;
                -65, 25, 80;
                -65, 25, 80;
                -65, 25, 80;
                -65, 25, 80;
                -65, 25, 80;
                0, 25, 80;
                0, 25, 80;
                0, 25, 80;" dur="8s" repeatCount="indefinite" />
            </g>
            <animateTransform attributeName="transform" attributeType="XML" type="rotate" fill="freeze" values="
                  0, -200, 130;
                  0, -200, 130
                  0, -200, 130;
                  0, -200, 130;
                  0, -200, 130;
                  0, -200, 130;
                  0, -200, 130;
                  0, -200, 130;
                  15, -200, 130;
                  15, -200, 130;
                  15, -200, 130;
                  15, -200, 130;
                  15, -200, 130;
                  0, -200, 130;
                  0, -200, 130;
                  0, -200, 130;" dur="8s" repeatCount="indefinite" />
          </g>

          {/* <path d="M-250 155 l300 0" fill="none" stroke={styleVars.backgroundColor} stroke-width="50" /> */}
          {/* <path d="M-250 130 l300 0" fill="none" stroke={styleVars.primary} stroke-width="12" /> */}
        </g>
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0" y="0" viewBox="0 0 1036.8 153">
          <polygon ng-show="show" styles={style.skyline} id="nyc-target" points="1204.2 631.5 1204.2 464.7 1201.3 464.7 1202.8 456 1173.1 456 1171.2 460.9 1168.4 457.8 1164.1 458.5 1164.1 464.1 1154.5 464.1 1154.5 488.6 1149.5 491.1 1149.5 474.3 1132.8 470.9 1132.8 457.5 1123.1 453.2 1119.4 444.2 1114.1 445.4 1108.2 445.4 1108.2 453.8 1101.4 456.6 1101.4 481.1 1094.9 481.1 1089.9 487.6 1088.7 420 1069.6 420 1069.6 390 1065.7 412.3 1029.4 413 1029.4 445.5 1023.6 445.5 1023.6 455.1 1007.1 455.7 1007.1 477.4 1002 478 995.6 474.8 995.6 462.7 982.8 462.7 982.8 469.1 976.4 469.1 976.4 434 950.9 434 950.9 471 943.9 471 943.9 422.5 943.9 400.2 930.5 353 930.5 360.7 926.7 371.6 924.1 380.4 921.6 385.5 921.6 392.6 918.4 398.9 918.4 420.6 918.4 438.5 899.3 439.1 890.3 434 890.3 421.9 852.3 421.9 845.1 421.9 845.1 431.5 841.9 441 842.2 471.2 821.2 471.3 819.3 357.1 737.8 357.1 737.8 396 701.1 396 699.8 404.2 696.1 411 655 410.1 653.7 432.7 636.5 432.7 636.5 441.7 627.6 445.5 616.8 448 606.6 449.3 600.2 457.6 596.4 448 583 448 580.2 442 544.7 448 544.7 455.1 536.4 458.9 532.1 472.3 532.1 485 523.6 485 523.6 467.8 526.8 461.4 523.6 453.8 523.6 447.4 526.8 444.2 523.6 437.8 523.6 431.5 512.8 420.6 505.2 429.6 505.2 411.1 499.4 413.6 499.4 388.7 454.7 388.3 452.4 399.6 433.6 407.6 433.6 450.2 401.3 447.4 388.6 402.4 382.5 424 376.9 409 366.6 431 366.6 410.8 300 410.8 300 417.4 289.7 417.4 289.7 420.7 274.7 420.7 274.7 344.3 271.9 344.3 271.9 312.4 263.9 312.4 266.7 289 251.7 272.1 251.7 230.4 248.4 227.1 245.6 175.5 242.8 228 239.1 236 239.1 254.7 239.1 273.5 228.3 287.1 222.2 288 222.2 307.2 214.2 311.5 214.2 342.9 210 346.1 210 435.7 205.3 432.9 200.2 436.2 195.9 436.2 195.9 422.1 172.5 422.1 169.2 428.2 162.7 424 162.7 439 159.4 442.7 159.4 468.5 151.9 469 151.9 456.3 145.3 456.3 139.2 450.2 131.7 451.2 131.7 407.6 115.3 407.6 112 395.8 112 391.6 112 386.9 107.8 386.9 107.8 325.5 102.6 386.5 96.6 394.4 96.6 403.5 78.7 403.5 78.7 422 84.1 427.3 78.7 431.6 78.7 440.2 61.6 439.1 61.6 444.4 61.6 455.2 61.6 631.5 "/>
        </svg>

      </svg>



    </div>

  )
}

const style = {
  svg: {
    display: 'block',
    height: 150,
    width: 250,
  },
  skyline: {
    fill:'#eee',
    strokeWidth:3,
    strokeMiterlimit:10,
    stroke: 'black',
    strokeDasharray: 5000,
    strokeDashoffset: 5000,
 },
}

export default Radium(YogaSvg);
