import {useContext} from 'react';

import {CartContext} from '../../contexts/cart.context';

import CheckOutItem from '../../components/checkout-item/checkout-item.component';

import './checkout.styles.scss';


const Checkout = () => {
    const {cartItems, addItemToCart, removeItemFromCart} = 
    useContext(CartContext);

    const total = cartItems.reduce((acc, cartItem) => acc + cartItem.quantity * cartItem.price, 0);

    return(
        <div className='checkout-container'>
            <div className='checkout-header'> 
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>
                {cartItems.map((cartItem) => (
                            <CheckOutItem key={cartItem.id} cartItem={cartItem} />
                ))}
                <span className='total'>Total: ${total}</span>
            </div>
    );
};

export default Checkout;