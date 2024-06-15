import { 
    createContext, 
    useState,
    useEffect
} from "react";  

import { addCollectionAndDocuments } from "../utils/firebase/firebase.utils.js";


export const ProductsContext = createContext({
    products: [],
}); // create a user context object


export const ProductsProvider = ({children}) => {
    const [products, setProducts] = useState([]); 
    const value = {products};


return ( 
        <ProductsContext.Provider value={value}>
            {children}
        </ProductsContext.Provider>
        );
}; // create a user provider component that will wrap the entire application and provide the user context object to all components in the application


