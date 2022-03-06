import React from 'react';

import './CheckoutItem.css';

function CheckoutItem({cartItem:{imageUrl,name,quantity,price}}){
   return (
       <div className='checkout-item'>
           <div className='checkout-image'>
              <img src={imageUrl} alt='image' />
           </div>
           <span className='checkout-field'>{name}</span>
           <span className='checkout-field'>{quantity}</span>
           <span className='checkout-field'>{price}</span>
           <div className='checkout-field'>
              &#10005;
           </div>
       </div>
   );
}

export default CheckoutItem;