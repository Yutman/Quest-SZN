import { 
    createContext, 
    useState,
    useEffect
} from "react";  

import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.js";


export const ProductsContext = createContext({
    products: [],
}); // create a user context object


export const ProductsProvider = ({children}) => {
    const [products, setProducts] = useState([]); 
    const value = {products};

    useEffect(() => {
        const getCategoriesMap = async () =>  {
        const categoryMap = await getCategoriesAndDocuments();
        console.log(categoryMap);
    }
    getCategoriesMap();
}, []);


return ( 
        <ProductsContext.Provider value={value}>
            {children}
        </ProductsContext.Provider>
        );
}; // create a user provider component that will wrap the entire application and provide the user context object to all components in the application


