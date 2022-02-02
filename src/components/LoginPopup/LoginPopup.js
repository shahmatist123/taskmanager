import React, {useState} from 'react';

const Login = (textObj) => {
    const {text, status} = textObj
    const borderStyle = status === 'error' ? 'red' : 'rgb(14, 255, 0)'
  return(
      <div className='login-popup' style={{
          'borderColor' : borderStyle
      }
      }>
          {text}
      </div>
  )
}
export default Login
