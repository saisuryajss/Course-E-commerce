import React from 'react';
import CollectionItem from '../collection-item/CollectionItem';
import './CollectionPreview.css';

function CollectionPreview({title,items}){
    return(
        <div className='collection-preview'>
            <h1 className='collection-title'> {title.toUpperCase()} </h1>
            <div className='collection-preview-item-holder'>
               {items.filter((item,idx)=>idx<4).map(({id,...otherItemProps})=>(
                  <CollectionItem key={id} {...otherItemProps} />
               ))}
            </div>
        </div>
    );
}

export default CollectionPreview;