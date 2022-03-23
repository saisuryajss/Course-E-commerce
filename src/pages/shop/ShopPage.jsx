import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import CollectionPageContainer from '../collection/collectionPageContainer';
import { useDispatch } from 'react-redux';
import { CollectionsOverviewContainer } from '../../components/collection-overview/CollectionsContainer';
import { useNavigate } from 'react-router-dom';
import { fetchCollectionsStart } from '../../redux/shop/ShopActions';

function WithRouter(Component) {
    const Wrapper = props => <Component {...props} navigate={useNavigate()} />
    return Wrapper;
}

function ShopPage({ navigate}) {
    const dispatch=useDispatch();
    useEffect(() => {
        dispatch(fetchCollectionsStart());
    }, [dispatch]);

    return (
        <div className='shop-page'>
            <Routes>
                <Route path={`/`} element={<CollectionsOverviewContainer navigate={navigate} />} />
                <Route path={`/:collectionId`} element={<CollectionPageContainer />} />
            </Routes>
        </div>
    );
}

export default WithRouter(ShopPage);