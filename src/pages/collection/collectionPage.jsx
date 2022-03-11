import React from 'react';
import {useParams} from 'react-router-dom';
import { connect } from 'react-redux';
import {selectCollection} from '../../redux/shop/shopSelector';
import './collectionPage.css';

function CollectionPage({collection}){
    const params=useParams();
    console.log(collection);
    return (
        <div>
            <h1>Collection Page </h1>
        </div>
    );
}

const mapStateToProps=(state)=>{

return {
    collection: selectCollection()(state)
};
}

export default connect(mapStateToProps)(CollectionPage);