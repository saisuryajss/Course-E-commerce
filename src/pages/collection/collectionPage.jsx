import React from 'react';
import {useParams} from 'react-router-dom';
import { connect } from 'react-redux';
import {selectCollection} from '../../redux/shop/shopSelector';
import './collectionPage.css';

function WithRouter(Component){
    const Wrapper= props=><Component {...props} params={useParams()} />
    return Wrapper;
}

function CollectionPage({collection,params}){
    console.log(collection);
    console.log(params);
    return (
        <div>
            <h1>Collection Page </h1>
        </div>
    );
}

const mapStateToProps=(state,ownProps)=>({
    collection: selectCollection(ownProps.params.collectionId)(state)
});

export default WithRouter((connect(mapStateToProps)(CollectionPage)));