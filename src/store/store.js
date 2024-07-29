import {compose, createStore, applyMiddleware} from 'redux';
// import logger from 'redux-logger';

import {rootReducer} from './root-reducer';

const loggerMiddleware = (store) => (next) => (action) => {
    if(!action.type) {
        return next(action);
    }

    console.log('type', action.type);
    console.log('payload', action.payload);
    console.log('currentState', store.getState());

    next(action);

    console.log('next state:', store.getState());
}

const middleWares = [loggerMiddleware]; // logger middleware

const composedEnhancers = compose(applyMiddleware(...middleWares)); // compose the logger middleware

export const store = createStore(
    rootReducer, 
    undefined, 
    composedEnhancers); // create a store with the root reducer and logger middleware
