import React from 'react';
import './CustomButton.css';

function CustomButton({size,...otherButtonProps}){
   return(
           <input {...otherButtonProps} className={`${size}`} />
   );
}

export default CustomButton;