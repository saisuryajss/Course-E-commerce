import {React} from 'react';
import CollectionsOverview from '../../components/collection-overview/CollectionsOverview';

function ShopPage(props){
    console.log(props);
    return(
        <div className='shop-page'>
           <CollectionsOverview />
        </div>
    );
}



export default ShopPage;