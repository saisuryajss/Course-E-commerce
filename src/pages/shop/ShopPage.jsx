import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import CollectionsOverview from '../../components/collection-overview/CollectionsOverview';
import { firestore,convertCollectionsSnapshotToMap } from '../../firebase/firebase';
import CollectionPage from '../collection/collectionPage';
import {connect} from 'react-redux';
import { updateCollections } from '../../redux/shop/ShopActions';
import {WithSpinner} from '../../components/with-spinner/withSpinner';
import { useNavigate } from 'react-router-dom';

function WithRouter(Component) {
    const Wrapper = props => <Component {...props} navigate={useNavigate()} />
    return Wrapper;
}

const CollectionsOverviewWithSpinner=WithSpinner(CollectionsOverview);
const CollectionsPageWithSpinner=WithSpinner(CollectionPage);

function ShopPage({updateCollections,navigate}) {
    const [loading,setState]=useState(true);
    let unsubscribeFromSnapshot=null;
    useEffect(()=>{
          const collectionRef=firestore.collection('collections');
          unsubscribeFromSnapshot=collectionRef.onSnapshot(async (snapshot)=>{
             const collectionMap= convertCollectionsSnapshotToMap(snapshot);
             updateCollections(collectionMap);
             setState(false);
          });
    }, []);
    return (
        <div className='shop-page'>
            <Routes>
                <Route path={`/`} element={<CollectionsOverviewWithSpinner isLoading={loading} navigate={navigate} />} />
                <Route path={`/:collectionId`} element={<CollectionsPageWithSpinner  isLoading={loading}  />}/>
            </Routes>
        </div>
    );
}

const mapDispatchToProps=(dispatch)=>({
    updateCollections:collectionsMap=>dispatch(updateCollections(collectionsMap))
});

export default WithRouter(connect(null,mapDispatchToProps)(ShopPage));