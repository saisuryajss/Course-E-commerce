import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector} from 'react-redux';
import { selectCollection } from '../../redux/shop/shopSelector';
import './collectionPage.css';
import CollectionItem from '../../components/collection-item/CollectionItem';


function CollectionPage() {
    const {collectionId}=useParams();
    const collection=useSelector(selectCollection(collectionId));
    const { title, items } = collection;
    return (
        <div className='collectionpage'>
            <h2 className='collectionpage-title'>{title}</h2>
            <div className='collectionpage-items'>
                {
                    items.map(item => <CollectionItem key={item.id} item={item} />)
                }
            </div>
        </div>
    );
}


export default CollectionPage;