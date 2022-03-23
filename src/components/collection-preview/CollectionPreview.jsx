import React from 'react';
import { useNavigate } from 'react-router-dom';
import CollectionItem from '../collection-item/CollectionItem';
import './CollectionPreview.css';


function CollectionPreview({title,items,routeName}){
    const navigate=useNavigate();
    return(
        <div className='collection-preview'>
            <h1 className='collection-title' onClick={()=>navigate(`/shop/${routeName}`)}> {title.toUpperCase()} </h1>
            <div className='collection-preview-item-holder'>
               {items.filter((item,idx)=>idx<4).map((item)=>(
                  <CollectionItem key={item.id} item={item} />
               ))}
            </div>
        </div>
    );
}

export default CollectionPreview;