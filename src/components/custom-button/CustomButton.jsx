import React from 'react';
import './CustomButton.css';

function CustomButton({size,children,...otherButtonProps}){
   return(
           <input {...otherButtonProps} className={`${size}`}  value={children} readOnly/>
   );
}

export default CustomButton;