import { 
    createContext,  
    useEffect, 
    useReducer
} from "react";  

import {createAction} from '../utils/reducer/reducer.utils';

import { 
    createUserDocumentFromAuth,
    onAuthStateChangedListener, 
   } from "../utils/firebase/firebase.utils";


export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
}); // create a user context object


export const USER_ACTION_TYPES = {
    'SET_CURRENT_USER': 'SET_CURRENT_USER',
}

const userReducer = (state, action) => {
    const {type, payload} = action;
    
    switch(type){
        case USER_ACTION_TYPES.SET_CURRENT_USER:
          return {
            ...state,
            currentUser: payload,
          }
        default:
            throw new Error(`Unhandled action type: ${type}`);
    }
}

const INITIAL_STATE = {
    currentUser: null,
};

export const UserProvider = ({children}) => {
const [{currentUser}, dispatch] = useReducer(userReducer, INITIAL_STATE);
console.log(currentUser);

const setCurrentUser = (user) => {
    dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user));
}
const value = {currentUser, setCurrentUser};


useEffect(() => {  
    const unsubscribe = onAuthStateChangedListener((user) => {
        if (user){
            createUserDocumentFromAuth(user);
        }
        setCurrentUser(user);
    });
    return unsubscribe;
}, []); // useEffect hook to run once when the component mounts
// when the component unmounts, I dont need the listener anymore so this is why I return the unsubscribe function which will remove the listener.

    return <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
}; // create a user provider component that will wrap the entire application and provide the user context object to all components in the application



