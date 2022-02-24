import {React, useState} from 'react';
import SHOP_DATA from './ShopData';
import CollectionPreview from '../../components/collection-preview/CollectionPreview';

function ShopPage(){
    const [collectionData,setCollectionData] = useState(SHOP_DATA);
    return(
        <div className='shop-page'>
           {
               collectionData.map(({id,...otherCollectionProps})=>(
                 <CollectionPreview key={id} {...otherCollectionProps} />
               ))
           }
        </div>
    );
}

export default ShopPage;