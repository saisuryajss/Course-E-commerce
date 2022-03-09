import React from 'react';
import CollectionPreview from '../collection-preview/CollectionPreview';
import { connect } from 'react-redux';
import {selectShop} from '../../redux/shop/shopSelector';
import { createStructuredSelector } from 'reselect';

function CollectionsOverview({collectionData}){
    return (
        <div className='collection-overview'>
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

export default connect(mapStateToProps)(CollectionsOverview);