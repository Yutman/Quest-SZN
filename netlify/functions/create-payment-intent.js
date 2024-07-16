require("dotenv").config();
// This line loads environment variables from a .env file into process.env
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
//initializes the Stripe library with your secret key

exports.handler = async (event) => {
  try {
    const { amount } = JSON.parse(event.body);

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "usd",
      payment_method_types: ["card"],
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ paymentIntent }),
    };
  } catch (error) {
    console.log({ error });

    return {
      statusCode: 400,
      body: JSON.stringify({ error }),
    };
  }
};

// This code snippet defines a serverless function to create a Stripe Payment Intent for a given amount. 
// It loads environment variables, initializes the Stripe API with a secret key, handles incoming HTTP requests, creates a Payment Intent with the specified amount and currency, and returns the Payment Intent details in the response. 
// If an error occurs, it logs the error and returns it in the response.

