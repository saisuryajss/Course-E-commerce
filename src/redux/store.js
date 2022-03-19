import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

const middlewares = [thunk,logger];
const store = createStore(rootReducer, applyMiddleware(...middlewares));
const persistor = persistStore(store);

export  { store, persistor };