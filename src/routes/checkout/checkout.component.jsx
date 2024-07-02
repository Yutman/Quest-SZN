import {useContext} from 'react';

import {CartContext} from '../../contexts/cart.context';

import CheckOutItem from '../../components/checkout-item/checkout-item.component';

import {CheckoutContainer, CheckoutHeader, HeaderBlock} from './checkout.styles.jsx';

import './checkout.styles.jsx';


const Checkout = () => {
    const {cartItems} = 
    useContext(CartContext);

    const total = cartItems.reduce((acc, cartItem) => acc + cartItem.quantity * cartItem.price, 0);

    return(
        <CheckoutContainer>
            <CheckoutHeader> 
                <HeaderBlock>
                    <span>Product</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Description</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Quantity</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Price</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Remove</span>
                </HeaderBlock>
            </CheckoutHeader>
                {cartItems.map((cartItem) => (
                    <CheckOutItem key={cartItem.id} cartItem={cartItem} />
                ))}
                <span className='total'>Total: Ksh.{total}.00</span>
            </CheckoutContainer>
    );
};

export default Checkout;