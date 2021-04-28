import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import brain from './Logo.png';


const Logo = () => {
  return(
    <div>
      <Tilt className="Tilt br2 shadow-2" options={{ max : 45 }} style={{ height: 150, width: 150 }} >
          <div className="Tilt-inner pa3">
            <img style={{paddingTop:'8px'}} 
            alt='Logo' src={brain}></img>
          </div>
      </Tilt>
    </div>
  ); 
}

export default Logo;