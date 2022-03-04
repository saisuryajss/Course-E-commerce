import React from 'react';
import './CollectionItem.css';
import CustomButton from '../custom-button/CustomButton';

function CollectionItem({ name, imageUrl, price }) {
   const handleOnMouseEnter=(event)=>{
    if(event.target.children[0]){
        event.target.children[0].style.display='flex';
        event.target.children[0].opacity='0.85'
    }
}

   const handleOnMouseLeave=(event)=>{
    if(event.target.children[0]){
        event.target.children[0].style.display='none';
        event.target.children[0].opacity='0.70';
    }
}

const handleCartMouseOver=(event)=>{
    if(event.target){
        event.target.style.backgroundColor='black';
        event.target.style.color='white';
    }
}

   const handleCartMouseOut=(event)=>{
    if(event.target){
        event.target.style.backgroundColor='white';
        event.target.style.color='black';
    }
}


    return (
        <div className='collection-item' onMouseEnter={handleOnMouseEnter}  onMouseLeave={handleOnMouseLeave}>
            <div
                className='collection-image'
                style={{ backgroundImage: `url(${imageUrl})` }}>
                <div className='add-to-cart' onMouseOver={handleCartMouseOver}  onMouseOut={handleCartMouseOut}>
                    <CustomButton type='button' size='button-large' inverted={true} > ADD TO CART </CustomButton>
                </div>
            </div>
            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
        </div>
    );
}

export default CollectionItem;