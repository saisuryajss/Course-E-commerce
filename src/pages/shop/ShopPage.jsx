import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import CollectionPageContainer from '../collection/collectionPageContainer';
import { useDispatch } from 'react-redux';
import { CollectionsOverviewContainer } from '../../components/collection-overview/CollectionsContainer';
import { fetchCollectionsStart } from '../../redux/shop/ShopActions';

function ShopPage() {
    const dispatch=useDispatch();
    useEffect(() => {
        dispatch(fetchCollectionsStart());
    }, [dispatch]);

    return (
        <div className='shop-page'>
            <Routes>
                <Route path={`/`} element={<CollectionsOverviewContainer />} />
                <Route path={`/:collectionId`} element={<CollectionPageContainer />} />
            </Routes>
        </div>
    );
}

export default ShopPage;