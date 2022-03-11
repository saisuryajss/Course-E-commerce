import React from 'react';
import {useParams} from 'react-router-dom';
import { connect } from 'react-redux';
import {selectCollection} from '../../redux/shop/shopSelector';
import './collectionPage.css';
import CollectionItem from '../../components/collection-item/CollectionItem';

function WithRouter(Component){
    const Wrapper= props=><Component {...props} params={useParams()} />
    return Wrapper;
}

function CollectionPage({collection}){
    const {title,items}=collection;
    return (
        <div className='collectionpage'>
            <h2 className='collectionpage-title'>{title}</h2>
            <div className='collectionpage-items'>
                {
                   items.map(item=><CollectionItem key={item.id} item={item} />)
                }
            </div>
        </div>
    );
}

const mapStateToProps=(state,ownProps)=>({
    collection: selectCollection(ownProps.params.collectionId)(state)
});

export default WithRouter((connect(mapStateToProps)(CollectionPage)));