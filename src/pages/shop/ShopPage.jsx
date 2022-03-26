import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import CollectionPageContainer from '../collection/collectionPageContainer';
import { useDispatch, useSelector } from 'react-redux';
import { CollectionsOverviewContainer } from '../../components/collection-overview/CollectionsContainer';
import { fetchCollectionsStart } from '../../redux/shop/ShopActions';
import { selectCollections } from '../../redux/shop/shopSelector';


function ShopPage() {
    const dispatch=useDispatch();
    const collections=useSelector(selectCollections);
    useEffect(() => {
      if(!collections){
          dispatch(fetchCollectionsStart());
      }
    }, [collections,dispatch]);

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