import {combineReducers} from 'redux';

import {userReducer} from './user/user-reducer';


export const rootReducer = combineReducers({
    user: userReducer,
    // cart: cartReducer,
    // directory: directoryReducer,
    // shop: shopReducer

})