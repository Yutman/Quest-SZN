import { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

import { BUTTON_TYPE_CLASSES } from '../button/button.component';
import { PaymentFormContainer, FormContainer, PaymentButton } from './payment-form.styles.jsx';

const PaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [isProcessingPayment, setIsProcessingPayment] = useState(false);

    const paymentHandler = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        setIsProcessingPayment(true);

        const response = await fetch('/.netlify/functions/create-payment-intent', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ amount: 10000 }),
        }).then(res => res.json());

        const { paymentIntent: { client_secret } } = response;


        const paymentResult = await stripe.confirmCardPayment(client_secret, {
            payment_method: {
                card: elements.getElement(CardElement),
                billing_details: {
                    name: 'Peter Kuria',
                },
            },
        });

        setIsProcessingPayment(false);

        if (paymentResult.error) {
            alert(paymentResult.error.message);
        } else {
            if (paymentResult.paymentIntent.status === 'succeeded') {
                alert('Payment Successful');
            }
        }
    };

    return (
        <PaymentFormContainer>
            <FormContainer onSubmit={paymentHandler}>
                <h2>Credit Card Payment: </h2>
                <CardElement />
                <PaymentButton 
                isLoading={isProcessingPayment}
                buttonType={BUTTON_TYPE_CLASSES}>Pay Now</PaymentButton>
            </FormContainer>
        </PaymentFormContainer>
    );
};

export default PaymentForm;
// This code snippet defines a PaymentForm component that uses the Stripe CardElement and Stripe API to process a payment.
