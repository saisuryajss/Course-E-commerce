import React from 'react';
import './CollectionItem.css';

function CollectionItem({name, imageUrl, price}){
    return (
        <div className='collection-item'>
            <div 
            className='collection-image'
            style={{backgroundImage:`url(${imageUrl})`}}>
            </div>
            <div className='collection-footer'>
               <span className='name'>{name}</span>
               <span className='price'>{price}</span>
            </div>
        </div>
    );
}

export default CollectionItem;