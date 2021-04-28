import React from 'react';
import './FaceRecognition.css';


const FaceRecognition = ({imageUrl, box}) => {
  return(
    <div className='center ma'>
      <div className='absolute mt2'>
        <img id= 'inputimage' src={imageUrl} alt="TargetPicture" width='500px' height='auto'/>
        <div className='bounding-box' style={{top:box.topRow, right:box.rightCol, bottom:box.bottomRow,  left:box.leftCol }}></div>
      </div>
    </div>
  ); 
}

export default FaceRecognition;

// https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Brad_Pitt_2019_by_Glenn_Francis.jpg/440px-Brad_Pitt_2019_by_Glenn_Francis.jpg