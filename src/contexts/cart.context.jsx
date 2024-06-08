import { 
    createContext, 
    useState
} from "react";  

const addCartItem = (cartItems, productToAdd) => {
    //find if cartItems contains productToAdd
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToAdd.id
    );

    //if found, increment quantity by finding new array with modified cartItems
    if (existingCartItem) {
        return cartItems.map((cartItem) => 
            cartItem.id === productToAdd.id
            ? {...cartItem, quantity: cartItem.quantity + 1}
            : cartItem
        );
    }
    //return new array with modified cartItems
    return [...cartItems, {...productToAdd, quantity: 1}];
}

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
}); 


    export const CartProvider = ({children}) => {
        const [isCartOpen, setIsCartOpen] = useState(false);
        const[cartItems, setCartItems] = useState([]);

    const addItemToCart = (product) => {
            setCartItems(addCartItem(cartItems, product));
    }; // I'm calling the addCartItem function and passing in the current cartItems and the productToAdd. The addCartItem function will return a new array with the updated cartItems, and I'm setting that new array as the new cartItems state.

    const value = {isCartOpen, setIsCartOpen, addItemToCart, cartItems};



return ( <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
)
};

