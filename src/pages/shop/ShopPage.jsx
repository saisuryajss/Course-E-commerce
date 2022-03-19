import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import CollectionsOverview from '../../components/collection-overview/CollectionsOverview';
import CollectionPage from '../collection/collectionPage';
import {connect} from 'react-redux';
import {WithSpinner} from '../../components/with-spinner/withSpinner';
import { useNavigate } from 'react-router-dom';
import {fetchCollectionsStartAsync} from '../../redux/shop/ShopActions';
import {createStructuredSelector} from 'reselect';
import {selectIsCollectionFetching} from '../../redux/shop/shopSelector';

function WithRouter(Component) {
    const Wrapper = props => <Component {...props} navigate={useNavigate()} />
    return Wrapper;
}

const CollectionsOverviewWithSpinner=WithSpinner(CollectionsOverview);
const CollectionsPageWithSpinner=WithSpinner(CollectionPage);

function ShopPage(props) {
    console.log(props);
    const {isCollectionFetching,navigate,fetchCollectionsStartAsync}=props;
    useEffect(()=>{
        fetchCollectionsStartAsync();
    },[]);

    return (
        <div className='shop-page'>
            <Routes>
                <Route path={`/`} element={<CollectionsOverviewWithSpinner isLoading={isCollectionFetching} navigate={navigate} />} />
                <Route path={`/:collectionId`} element={<CollectionsPageWithSpinner  isLoading={isCollectionFetching}  />}/>
            </Routes>
        </div>
    );
}

const mapStateToProps=createStructuredSelector({
  isCollectionFetching:selectIsCollectionFetching
});

const mapDispatchToProps=(dispatch)=>({
    fetchCollectionsStartAsync:()=>dispatch(fetchCollectionsStartAsync())
});

export default WithRouter(connect(mapStateToProps,mapDispatchToProps)(ShopPage));