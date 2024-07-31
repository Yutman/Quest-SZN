import {compose, createStore, applyMiddleware} from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import logger from 'redux-logger';

import {rootReducer} from './root-reducer';
import storage from 'redux-persist/lib/storage';


const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['user']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = [process.env.NODE_ENV === 'development' && logger].filter(
  Boolean
); //  ensures that the logger middleware is only included in the array if the application is running in a development environment
//In production, the array ends up empty improving performance and avoid leaking potentially sensitive debug information


const composeEnhancer =
  (process.env.NODE_ENV !== 'production' &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares)); // compose the logger middleware

export const store = createStore(
    persistedReducer, 
    undefined, 
    composedEnhancers); // create a store with the root reducer and logger middleware

export const persistor = persistStore(store);