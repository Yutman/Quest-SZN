import { 
    createContext, 
    useState,
    useEffect
} from "react";  

import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.js";


export const CategoriesContext = createContext({
    categoriesMap: {},
}); // create a user context object


export const CategoriesProvider = ({children}) => {
    const [categoriesMaps, setCategoriesMap] = useState({}); 
    const value = {categoriesMaps};

    
    useEffect(() => {
        const getCategoriesMap = async () =>  {
        const categoryMap = await getCategoriesAndDocuments();
        console.log(categoryMap);
        setCategoriesMap(categoryMap);
    }
    getCategoriesMap();
}, []);


return ( 
        <CategoriesContext.Provider value={value}>
            {children}
        </CategoriesContext.Provider>
        );
}; // create a user provider component that will wrap the entire application and provide the user context object to all components in the application


