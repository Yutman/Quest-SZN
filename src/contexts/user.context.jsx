import { 
    createContext, 
    useState, 
    useEffect 
} from "react";  

import { 
    onAuthStateChangedListener, 
   } from "../utils/firebase/firebase.utils";


export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
}); // create a user context object

export const UserProvider = ({children}) => {
const [currentUser, setCurrentUser] = useState(null); 
const value = {currentUser, setCurrentUser};


useEffect(() => {  
    const unsubscribe = onAuthStateChangedListener((user) => {
        console.log(user);
    })
    return unsubscribe;
}, []); // useEffect hook to run once when the component mounts
// when the component unmounts, I dont need the listener anymore so this is why I return the unsubscribe function which will remove the listener.

    return <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
}


