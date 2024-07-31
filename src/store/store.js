import {compose, createStore, applyMiddleware} from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
// import logger from 'redux-logger';

import {rootReducer} from './root-reducer';
import storage from 'redux-persist/lib/storage';


const loggerMiddleware = (store) => (next) => (action) => {
    if(!action.type) {
        return next(action);
    }

    console.log('type', action.type);
    console.log('payload', action.payload);
    console.log('currentState', store.getState());

    next(action);

    console.log('next state:', store.getState());
};

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['user']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = [loggerMiddleware]; // logger middleware

const composedEnhancers = compose(applyMiddleware(...middleWares)); // compose the logger middleware

export const store = createStore(
    persistedReducer, 
    undefined, 
    composedEnhancers); // create a store with the root reducer and logger middleware

export const persistor = persistStore(store);