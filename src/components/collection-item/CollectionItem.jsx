import React from 'react';
import './CollectionItem.css';
import CustomButton from '../custom-button/CustomButton';

function CollectionItem({ name, imageUrl, price }) {
    const handleOnMouseEnter = (event) => {
        const target = event.target.children[0];
        if (target) {
            target.style.display = 'flex';
            target.style.opacity = '0.85'
        }
    }

    const handleOnMouseLeave = (event) => {
        const target = event.target.children[0];
        if (target) {
            target.style.display = 'none';
            target.opacity = '0.70';
        }
    }

    const handleCartMouseOver = (event) => {
        const target = event.target;
        if (target) {
            target.style.backgroundColor = 'black';
            target.style.color = 'white';
            target.style.border = '2px solid black';
        }
    }

    const handleCartMouseOut = (event) => {
        const target = event.target;
        if (target) {
            target.style.backgroundColor = 'white';
            target.style.color = 'black';
        }
    }


    return (
        <div className='collection-item' onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave}>
            <div
                className='collection-image'
                style={{ backgroundImage: `url(${imageUrl})` }}>
                <div className='add-to-cart' onMouseOver={handleCartMouseOver} onMouseOut={handleCartMouseOut}>
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