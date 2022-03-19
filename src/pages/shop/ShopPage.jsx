import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import CollectionPageContainer from '../collection/collectionPageContainer';
import { connect } from 'react-redux';
import { CollectionsOverviewContainer } from '../../components/collection-overview/CollectionsContainer';
import { useNavigate } from 'react-router-dom';
import { fetchCollectionsStartAsync } from '../../redux/shop/ShopActions';

function WithRouter(Component) {
    const Wrapper = props => <Component {...props} navigate={useNavigate()} />
    return Wrapper;
}

function ShopPage({ isCollectionFetching, navigate, fetchCollectionsStartAsync }) {
    useEffect(() => {
        fetchCollectionsStartAsync();
    }, []);

    return (
        <div className='shop-page'>
            <Routes>
                <Route path={`/`} element={<CollectionsOverviewContainer navigate={navigate} />} />
                <Route path={`/:collectionId`} element={<CollectionPageContainer />} />
            </Routes>
        </div>
    );
}


const mapDispatchToProps = (dispatch) => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

export default WithRouter(connect(null, mapDispatchToProps)(ShopPage));