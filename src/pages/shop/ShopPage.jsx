import {React, useState} from 'react';
import { connect } from 'react-redux';
import {selectShop} from '../../redux/shop/shopSelector';
import { createStructuredSelector } from 'reselect';
import CollectionPreview from '../../components/collection-preview/CollectionPreview';

function ShopPage({collectionData}){
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

const mapStateToProps=createStructuredSelector({
   collectionData:selectShop
});

export default connect(mapStateToProps)(ShopPage);