import React from 'react';
import CollectionPreview from '../collection-preview/CollectionPreview';
import { useSelector } from 'react-redux';
import {selectCollectionsForPreview} from '../../redux/shop/shopSelector';

function CollectionsOverview({navigate}){
    const collectionData=useSelector(selectCollectionsForPreview);
    return (
        <div className='collection-overview'>
           {
               collectionData.map(({id,...otherCollectionProps})=>(
                 <CollectionPreview key={id} {...otherCollectionProps} navigate={navigate}/>
               ))
           }
        </div>
    );
}


export default CollectionsOverview;