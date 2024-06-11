import { 
    createContext, 
    useState,
    useEffect
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
};

const removeCartItem = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === cartItemToRemove.id
    ); // I'm finding the productToRemove in the cartItems array and storing it in the existingCartItem variable.

    if (existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
    } // If the quantity of the existingCartItem is 1, I'm returning a new array with the cartItem removed from the cartItems array.

    return cartItems.map((cartItem) => 
        cartItem.id === cartItemToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
}; // If the quantity of the existingCartItem is greater than 1, I'm returning a new array with the quantity of the cartItem decremented by 1.


export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    cartCount: 0,
    removeItemFromCart: () => {},
}); 


    export const CartProvider = ({children}) => {
        const [isCartOpen, setIsCartOpen] = useState(false);
        const[cartItems, setCartItems] = useState([]);
        const [cartCount, setCartCount] = useState(0);

        const addItemToCart = (productToAdd) => {
            setCartItems(addCartItem(cartItems, productToAdd));
    }; // I'm calling the addCartItem function and passing in the current cartItems and the productToAdd. The addCartItem function will return a new array with the updated cartItems, and I'm setting that new array as the new cartItems state.
        
    
    const removeItemFromCart = (cartItemToToRemove) => {
        setCartItems(removeCartItem(cartItems, cartItemToToRemove));
    };//I'm calling the removeCartItem function and passing in the current cartItems and the productToRemove. The removeCartItem function will return a new array with the updated cartItems, and I'm setting that new array as the new cartItems state.    

        useEffect(() => {
        const newCartCount = cartItems.reduce(
            (total, cartItem) => total + cartItem.quantity, 0
        );
        setCartCount(newCartCount);
    }, [cartItems]);
    
    const value = {
        isCartOpen, 
        setIsCartOpen, 
        addItemToCart, 
        removeItemFromCart,
        cartItems,
        cartCount,
    };


return ( <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
)
};

