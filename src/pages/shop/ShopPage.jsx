import React from 'react';
import { Route,Routes} from 'react-router-dom';
import CollectionsOverview from '../../components/collection-overview/CollectionsOverview';
import CollectionPage from '../collection/collectionPage';


function ShopPage(){
    return(
        <div className='shop-page'>
            <Routes>
            <Route path={`/`} element={<CollectionsOverview />} />
            <Route path={`/:collectionId`} element={<CollectionPage  />} />
            </Routes>
        </div>
    );
}



export default ShopPage;