import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import rootSaga from "./rootSaga";

const sagaMiddleware=createSagaMiddleware ();

const middlewares = [logger,sagaMiddleware];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

const persistor = persistStore(store);

export  { store, persistor };