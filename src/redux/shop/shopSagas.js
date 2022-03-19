import { takeEvery,call,put } from 'redux-saga/effects';
import { shopActionTypes } from './shopActionTypes';
import { fetchCollectionsStart, fetchCollectionsSuccess,fetchCollectionsFailure } from './ShopActions';
import { firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebase';

export function* fetchCollectionsAsync() {
    try{ 
    const collectionRef = firestore.collection('collections');
     const snapshot = yield collectionRef.get();
     const collectionMap = yield call( convertCollectionsSnapshotToMap ,snapshot);
     yield put(fetchCollectionsSuccess(collectionMap));
    }
    catch(error){
       yield put(fetchCollectionsFailure(error.message));
    }
}

export function* fetchCollectionsStart() {
    yield takeEvery(shopActionTypes.FETCH_COLLECTIONS_START,)
}