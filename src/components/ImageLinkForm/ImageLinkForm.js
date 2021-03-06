import React from 'react';
import './ImageLinkForm.css'

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return(
    <div>
      <p className='f3'>
        {'For now, the app will recognise the one random face on an image with more faces. Give it try.'}
      </p>
      <div className='center'>
        <div className='form center pa4 br3 shadow-5'>  
          <input className='f4 pa2 w-70 center' type="text" onChange = {onInputChange}/>
          <button className='w-30 grow f4 link ph3 pv2 dib bg-light-purple white'
          onClick={onButtonSubmit}>Detect</button>
        </div>
      </div>
    </div>
  ); 
}

export default ImageLinkForm;