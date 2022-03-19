import { shopActionTypes } from './shopActionTypes';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase';

export const fetchCollectionsStart = () => ({
    type: shopActionTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionsSuccess = collectionsMap => ({
    type: shopActionTypes.FECTH_COLLECTIONS_SUCCESS,
    payload: collectionsMap
});

export const fetchCollectionsFailure = errorMessage => ({
    type: shopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage
});

export const fetchCollectionsStartAsync = () => {
    console.log('inside fetchCollectionsStartAsync');
    return (dispatch) => {
        console.log('inside dispatch');
        const collectionRef = firestore.collection('collections');
        dispatch(fetchCollectionsStart);

        collectionRef.get().then((snapshot) => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            dispatch(fetchCollectionsSuccess(collectionsMap))
        }).catch(error => dispatch(fetchCollectionsFailure(error.message)));
    }
}

