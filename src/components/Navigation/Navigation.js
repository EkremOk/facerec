import React from 'react';

const Navigation = ({onRouteChange, isSignIn}) => {
  
    if(isSignIn === true) {
      return(
        <nav style={{display: 'flex', justifyContent:'flex-end'}}>
          <p onClick={() => onRouteChange('signout')} className='f3 link dim black underline pa3 poiner'>Sign Out</p>
        </nav>
      );
    } else if(isSignIn === false)  {
      return(
          <nav style={{display: 'flex', justifyContent:'flex-end'}}>
            <p onClick={() => onRouteChange('signin')} className='f3 link dim black underline pa3 poiner'>Sign In</p>
            <p onClick={() => onRouteChange('register')} className='f3 link dim black underline pa3 poiner'>Register</p>
          </nav>
      );
    }

}

export default Navigation;