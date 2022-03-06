import React from 'react';
import './CartItem.css';

export function CartItem({item:{imageUrl,price,name,quantity}}){
    return <div className='cart-item'>
        <img src={imageUrl} className='cart-image' alt={name+' image'} />
        <div className='cart-item-description'>
            <span className='cart-item-name'>{name} </span>
            <span className='cart-item-price'>{quantity} x {'$'+price}</span>
        </div>
    </div>

}
