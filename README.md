## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.

You may also see any lint errors in the console.

# Name: Quest SZN

## Team

Solo: Peter Muchiri Kuria

### Description of the Project: 

Quest SZN is an e-commerce website selling hats, jackets, sneakers, both for Women's and Men's clothing. 

Users will easily navigate through different categories of items, add products to their shopping cart, and view their cart in real-time. 

They'll be able to adjust quantities, remove items, and proceed to checkout seamlessly. Payments are handled securely through integration with the Stripe API, which is set up in test mode for practice transactions. 

User authentication and data storage are managed using Firebase, ensuring a smooth and secure shopping experience.

### Learning objectives

- To understand concepts and principles of e-commerce platforms such as product categories, carts and checkout processes.

- Gain proficiency in using React Router for implementing navigation and routing within the application.

- Learn how to manage state in a React application, including storing and updating data related to shopping cart items and user interactions.

- To gain hands-on experience integrating Stripe API into a web application

- To learn how to set up authentication using Firebase Authentication, allowing users to sign up, sign in, and securely access protected routes.

- To understand the process of integrating frontend React components with backend services such as Firebase.

- To develop skills in testing and debugging a React application, ensuring the functionality of features such as navigation, shopping cart management, and payment processing.

- To learn how to deploy a React application to a web hosting service such as Firebase Hosting, making the e-commerce platform accessible to users online and gaining experience in managing web deployments.

### Technologies used

- HTML/CSS - For structuring the layout and styling the user interface.

- JavaScript - For adding interactivity to my application, handling user events, and manipulating data.

- Firebase Authentication - For user authentication, allowing users to sign up, sign in, and securely access protected routes.

- React - React would be a suitable library for building the frontend due to the app's dynamic UI components.

- React Router - To implement navigation and routing between different categories of items in the e-commerce platform.

- Fetch API - For making HTTP requests to interact with external APIs, such as the Stripe API for payment processing.

- Book - Learning JavaScript Design Patterns by Addy Osmani


### Third-party services

- Stripe API - Stripe's test mode to integrate payment processing functionality, allowing users to handle payments securely.

- Google Analytics - For analytics and tracking user behavior on your website, providing insights into user engagement, conversion rates, and traffic sources.

### Challenge Statement

To establish an online presence for Quest SZN physical shop to tap into the growing e-commerce market. 

Rising adoption of multifunctional devices in various industries such as education, automobile, manufacturing, medical and logistics industry and the growing trend of Bring Your Own Device are the major growth drivers for electronic devices such as phones and laptops. 

Furthermore, increasing internet penetration, rising disposable income of consumers, and availability of low-cost laptops have boosted demand.

### Schedule of work

- Intro + Setup

- Routing + React-Router

- Authentication + Firebase

- React Context For State Management

- Observer Pattern

- Firebase Database Storage

- CSS-In-JS + Styled-Components

- Deploying With Netlify

### Scaffolding the Project 

Create React App

Write CSS as SASS - Allows me to use variables to store values (like colors, font sizes, or any CSS value) that can be reused throughout your stylesheet.

This makes it easy to manage and update values globally.

Categories - Hats, Jackets, Sneakers, Men's & Women's 

Adding SASS - Make it able for app to load Sass files 'npm add sass'

### React Fragment 

Special component provided by React that lets you group multiple elements without adding extra nodes to the DOM.

They are beneficial for keeping HTML structure clean, maintaining better CSS styling, ensuring semantic HTML, and potentially improving performance.

Adding SVG as a logo:

SVG is a vector format, meaning it uses mathematical expressions to define shapes, lines, and colors. 

This allows SVG images to scale up or down without losing any quality. Whether you display the logo on a small mobile screen or a large monitor, it will always remain crisp and clear.

### Setting up Firebase

Provides secure authentication using email/password, phone numbers, and social logins (Google, Facebook, etc.).

Helps me leverage some kind of database so that I cannot set up my own which is tedious.

I did not make use of Google Analytics in Firebase.

I have to allow my React application to leverage Firebase, Firestore and authentication.

'initializeApp' function in Firebase is used to initialize and configure a Firebase application.

It is essential as it sets up the Firebase environment for the app, enabling it to interact with various Firebase services such as Firestore, Authentication, Storage, and others.

While the exposure of the apiKey in Firebase might initially seem risky, it's designed to be used in this way.

Unlike a server-side API key, which must be kept secret, the apiKey in Firebase is not intended to be a secret. It does not provide access to my Firebase project's backend by itself.

The apiKey alone does not grant full access to my Firebase project. Access to specific services (like Firestore, Storage, or Authentication) is governed by Firebase security rules, which you configure to control who can read or write data.

#### Firestore Data Models

Collection, Documents and Data - Data is stored in documents, which are organized into collections.

Updated form input component which is reusable.

What should happen: sign-in form signs in, gets the response, destructures the user, stores it into my context.

Authentication and users is typically a really complicated feature to build because it involves servers and backends. 

Using Firebase for authentication and user management allows me to focus on building features rather than managing infrastructure and security, speeding up development and providing a robust solution for my application.

### Lessons:

How to authenticate and get user object from Firebase.

How to sync it up with my front-end app by creating sign-in and sign-up forms

The onAuthStateChanged listener is designed to track changes in the authentication status of a user. 

This includes events like logging in, logging out, session expiration, and other changes in the authentication token.

onAuthStateChanged listener in my code snippet receives some kind of callback function. What it does is it passes this callback function as the second value of onAuthStateChanged.

```js
export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);
```

What onAuthStateChanged does is that it will call the callback  whenever the authentication state of my auth singleton changes. 

So when a user signs in, that's what is considered an auth change because a user has authenticated. 

When a user signs out, that's another change. So both times my callback is going to get invoked; whenever a user authenticates in and out.

For this snippet here in my user.context.jsx.

```js
useEffect(() => {  
    const unsubscribe = onAuthStateChangedListener((user) => {
        console.log(user);
    })
    return unsubscribe;
}, []);
```

When my application initializes it will mount my user provider. My user provider is going to instantiate this first callback onMount and this will call onAuthStateChangedListener.

getAuth ensures that there is a single, centralized instance of the authentication object in the application. 

This is important for maintaining a consistent authentication state across different parts of the app. 

Authentication lives in my user.context

### Stream.

What is a stream? 

A stream is a sequence of ongoing events ordered in time. 

They can be used in React to handle real-time data, such as live updates, WebSocket messages, or continuous API data. 

This can be achieved through libraries like RxJS(Reactive Extensions for JavaScript)

RxJS (Reactive Extensions for JavaScript) is a library for reactive programming using Observables, to make it easier to compose asynchronous or callback-based code.

### SASS vs. CSS:

#### CSS: 

- Lacks native support for variables.

- Does not support nested rules.

- Does not support mixins.

#### Sass: 

- Allows one to define variables, which makes it easy to manage and reuse values throughout stylesheets.

- Supports nesting of CSS rules, which helps keep the stylesheet organized and mirrors the HTML structure.

- Allows the creation of mixins, which are reusable chunks of code that can be included in other selectors

### Add to Cart

Whenever I add anything to the cart, I need to check whether it exists, and if it does then I can increase quantity but if it doesn't I create a new cart item- the logic I have to tackle.

Created a cart-item folder where I'll host my cart-item-component .

Put the component in the cart-dropdown where it will live. 

I need to map over some kind of array, and for every item we map through, we want to pass this to the cart-item.

```js
{[].map(item=> <CartItem cartItem={item}/>)}
```

The array has to hold a variation of the products(size, shape and styling) but with the quantity on it.

Head to cart-context where everything about cart is stored. So we could store cart items in our cart as they are added.

```js
// find if cartItems contains productToAdd
const existingCartItem = cartItems.find(
    cartItem => cartItem.id === productToAdd.id
);

// if found, increment quantity
if (existingCartItem) {
    return cartItems.map(cartItem =>
        cartItem.id === productToAdd.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
    );
}

// return new array with modified cartItems
return [...cartItems, { ...productToAdd, quantity: 1 }];
```

The count inside of my cart icon by accumulating all the quantities inside of the cart context and then utilizing it.

### Checkout

Build the checkout button that takes me to the checkout step where I'll have a list of my products with quantity and price.

PseudoCode: 

Create a Checkout Page: This will display the list of products in the cart along with their quantities and prices.

Add a Checkout Button: This button will navigate to the checkout page.

Implement Routing: Use React Router to handle navigation between the pages.

Display Cart Items on Checkout Page: Use the cart context to get the cart items and display them.

To create my checkout page I'll need a new route that points to a checkout component. 

Inside of the component I need access to my cart items; so I'll need to connect the checkout page to my cart context. I'll need to display the items inside of my cart; ability to modify their quantities; ability to remove items selected; and also reflect an accurate total.

NB: Inside my cart drop down I have the Go To Checkout button which should take me to my check out page. What can I leverage to make the connection between both? 

To navigate from my cart dropdown to the checkout page using the "Go To Checkout" button, I leveraged React Router for navigation. Specifically, I used the useNavigate hook from React Router to programmatically navigate to the checkout page when the button is clicked.

### Checkout Item

Why did I create multiple event handlers instead of plugging them in my return function? 

```js
   const handleRemoveItemClick = () => {
            removeItemFromCart(cartItem);
        }; // remove item from cart
        const handleAddItemClick = () => {
            addItemToCart(cartItem);
        } // add item to cart
```

By creating separate functions for each event handler, I keep my logic modular and easier to understand. 

Each function has a single responsibility, which aligns with the principle of separation of concerns. Separate functions can be reused across different components or within the same component for different purposes.

Isolated functions are easier to test individually. Maintaining a clear separation between the UI (JSX) and the logic (event handlers) helps in scaling the codebase becoming easier to add new features or modify existing ones.

### Cart Total: 

Cart.context - Make a new value of 'total' which will be equal to zero which will be similar to the count.

It's the same as count but I'm just changing the value of the total price by accumulating it, rather than the quantity.

```js
const [cartTotal, setCartTotal] = useState(0);
 useEffect(() => {
    const newCartTotal = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
    setCartTotal(newCartTotal);
  }, [cartItems]);
```

Why didn't I put two effects(total and count) into the same useEffect? 

Separating effects into different useEffect hooks improves code readability, maintainability, and reliability. 

It allows for clearer dependency management and isolated error handling, leading to more robust and understandable code.

### Getting my products into Firestore 

Five categories of products.

In an e-commerce site, the data is spread across a lot of different products.

Why don't we hard code data into front-end applications? 

Hard-coded data requires code changes and redeployment to update. With a backend database, updates can be made dynamically without changing the frontend code.

Keeping data separate from the codebase adheres to the principle of separation of concerns, making the codebase cleaner and more maintainable.

### Why should I use Firestore DB- No SQL?

- Firestore provides real-time data synchronization

- Firestore allows you to set up listeners on your data, which can trigger UI updates automatically when data changes.

- Firestore supports complex queries that are fast and efficient, even with large datasets.

Avoiding hard-coded data in the frontend and using a backend database like Firestore improves maintainability, scalability, and security of your application. 

Firestore, with its real-time capabilities, flexible data model, and seamless integration with Firebase services, provides a robust solution for modern web and mobile applications.

Basically, in such apps I can make use of two different databases; (NoSQL Databases and MySQL)

### Relational Databases (RDBMS)

Description: Stores data in tables with rows and columns. Uses Structured Query Language (SQL) for defining and manipulating data.

Examples: MySQL, PostgreSQL, Oracle Database, Microsoft SQL Server.

### NoSQL Databases

Description: Designed for unstructured data and does not use the traditional table-based structure.

Subtypes:

Document Databases: Store data in documents similar to JSON.

Examples: MongoDB, CouchDB.

Key-Value Stores: Data is stored as key-value pairs.

Examples: Redis, DynamoDB.

Column-Family Stores: Data is stored in columns rather than rows.

Examples: Cassandra, HBase.

Graph Databases: Store data in nodes and edges.

Examples: Neo4j, ArangoDB

### Adding Collections and Documents 

How is it possible to upload categories from shop-data.js up to the respective collection in Firestore?

shop-data.js contains the data structure of categories.

firebase.utils.js file initializes Firebase and Firestore.

- Upload Script:

Import Firestore functions, methods and my shop data.

```js
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
writeBatch
} from 'firebase/firestore';
```

The writeBatch method in Firestore allows me to group multiple write operations into a single batch. 

This batch is then committed atomically, meaning that all writes succeed or fail together.

Here is the code snippet added to firebase.utils.js and an explanation of how it works.

```js
export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);
  objectsToAdd.forEach((object) => {
    const newDocRef = doc(collectionRef);
    batch.set(newDocRef, object);
  });
  return await batch.commit();
```

The async function 'addCollectionAndDocuments' takes two parameters 'collectionKey' and 'objectsToAdd';

1.'collectionKey' - The name of the collection to which documents will be added.

2.'objectsToAdd' - An array of objects that will be added as documents to the specified collection.

`const collectionRef = collection(db, collectionKey);

collection(db, collectionKey): This gets a reference to the collection in Firestore.

```js
objectsToAdd.forEach((object) => {
  const newDocRef = doc(collectionRef);
  batch.set(newDocRef, object);
});
```

    Explanation for the above:

objectsToAdd.forEach((object) => { ... }): Iterates over each object in the objectsToAdd array.

const newDocRef = doc(collectionRef): Creates a new document reference within the specified collection. A unique ID is automatically generated for each document.

batch.set(newDocRef, object): Adds a set operation to the batch. This operation will set the document at newDocRef with the data from the object.

```
return await batch.commit();
```

await batch.commit() - Commits the batch of operations to Firestore. This means all the set operations added to the batch will be executed in a single atomic transaction.

return: Returns a promise that resolves once the batch commit is complete.

- Loop through each category in SHOP_DATA.

- Create a document reference for each category in the Firestore collection (categories).

- Use setDoc to upload the category data to Firestore.

There are two other methods I've imported: 

'Query' and 'getDocs'

The query method is used to create a query object that can be used to retrieve documents from a collection based on specified conditions. It allows you to filter, sort, and limit the data you retrieve from Firestore.

The getDocs method is used to execute a query and retrieve the documents that match the specified conditions. It returns a QuerySnapshot containing the documents.

```js
export const getCategoriesAndDocuments = async () => {
    const collectionRef = collection(db, 'categories');
    const q = query(collectionRef);
    const querySnapshot = await getDocs(q); 
     const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
        const {title, items} = docSnapshot.data();
        acc[title.toLowerCase()] = items;
        return acc;
    }, {});
    return categoryMap;
}
```

The function getCategoriesAndDocuments fetches all documents from the 'categories' collection in Firestore, processes these documents into a JavaScript object where each category title is a key and its items are the value, and returns this object. This makes it easy to access category items by their titles.

Plugging in such helper functions in firebase.utils.js helps isolate the areas that our application interfaces with things that might change; in my particular case it's 3rd party libraries. 

Also it helps with: 

- Modularity - Each function is isolated in its specific context, making it easier to understand and maintain.

- Reusability - functions can be reused across different parts of your application

- Separation of concerns creating a cleaner codebase and react components can focus on rendering UI and handling user interactions

- Maintainability - Centralizing Firebase operations allows you to standardize error handling and logging mechanisms.

- Enhanced readability

- Easier testing due to isolated functions

### Utilizing my categoriesMap and Breaking out nested route of shop

Inside the shop I have two different routes: 

Base route -- shows different collection previews of my categories

Individual routes -- point to each specific category that show all the products inside of it

So to start off I created a category-view component. 

The category-preview is going to live at the shop component level. 

Inside the shop component I used categoryMap to generate a preview for each of the different categories. 

```js
import './category-preview.styles.scss'
const CategoryPreview = ({title, products}) => {
        return(
            <div className='category-preview-container'>
                <h2>
                    <span>
                        {title.toUpperCase()}
                    </span>
                </h2>
            </div>
        )
}
export default CategoryPreview;
```

The h2 is there to display the title. Within the h2 I've included a span where I'm going to have the title. 

Why is it that I have a span inside the h2? 

Remember the h2 becomes clickable, it becomes a nav link. I want to make sure it is clickable on the text, not the h2.

Here is my return statement and an explanation.

```js
return (
            <div className='category-preview-container'>
                <h2>
                    <span className='title'>
                        {title.toUpperCase()}
                    </span>
                </h2> //This structure allows for targeted styling. You can style the span independently to change color, font weight, or any other CSS properties.
                <div className='preview'>
                    {
                        products
                        .filter((_, idx) => idx < 4) 
                        .map ((product) => (
                        <ProductCard key={product.id} product={product}/>
                   ))} 
                </div>
            </div>
        );
```

Explanation.

```products.filter((_, idx) => idx < 4):``` 

This filters the products array to include only the first four items. The filter method takes two arguments: the current element (which is not used, denoted by _) and the index (idx). It returns true for the first four items (indices 0 through 3).

```products.map((product) => ...:```

This maps over the filtered array of products, returning a ProductCard component for each product.`

```<ProductCard key={product.id} product={product} />```

The ProductCard component is given a key prop for React to keep track of each element efficiently, and a product prop to pass the product data.

### Category Page: 

useParams is a hook from React Router used to access URL parameters.

ProductCard is a component used to display individual product details.

CategoriesContext provides the categories and their corresponding products.

```js
const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);
```
  
useContext retrieves the categoriesMap from CategoriesContext. This map contains the categories and their associated products.

```js
useEffect(() => {
    setProducts(categoriesMap[category]);
   }, [category, categoriesMap]);
```

Use effect updates the products state whenever the category or categoriesMap changes. 

This ensures that the component displays the correct products when the category in the URL changes.

The fragment acts as a wrapper without adding extra nodes to the DOM.

```js
return (
    <Fragment>
        <h2 className='category-title'>{category.toUpperCase()}</h2>
         <div className='category-container'>
        {products && products.map((product) => (
            <ProductCard key={product.id} product={product} /> 
 ))}
      </div>
    </Fragment>
  );
};
```

If I have components that rely on asynchronously fetched code, what are some of the safeguards that I can keep such that I can only render the component if the actual data is present? 

The best safeguard is custom hooks and conditional rendering. 

I've used conditional rendering in  {products && products.map((product) : if products is undefined, it will not render the ProductCard components.

CategoryItem is the component I use to demonstrate the five selectable categories on the main page. 

Since it has caused a clashing style I should rename the component to DirectoryItem because they are housed in the Directory component.

I also had to make the 'Hats' 'Jackets' etc clickable to take me to different routes containing each. 

How do I do this? I targeted the category-preview component and changed this.

span className='title'>
                        {title.toUpperCase()}
                    span

To this: 

Link className='title' to={title}>
                        {title.toUpperCase()}
                      Link


### Introducing Styled Components:

Styled-components is a popular library for React and React Native that uses tagged template literals to style components.

By using styled-components, I can write plain CSS in my JavaScript files, scoped to the specific components, thereby preventing class name collisions and ensuring that my styles are applied only to the components I want them to be.

Advantages:

- Eliminates name collisions

- Eliminates unintended style override

- Organization and Cleanliness

- Better developer experience with features like nesting and auto vendor prefixing

'npm install styled-components'

### NB: 

-Named Exports: Use curly braces {}.

Example: import { useContext } from 'react';

-Default Exports: Do not use curly braces.

Example: import CartIcon from '../../components/cart-icon/cart-icon.component';

-Special Cases: Certain imports, like SVGs as React components, may have their own specific syntax.

Example: import { ReactComponent as QuestLogo } from '../../assets/quest.svg';

From the file:

import styled from 'styled-components'

export const CLASSNAME = styled.div ``

Styling over an existing component, by using brackets.

     import {Link} from 'react-router-dom'

For styling buttons we can see a normal scss file like such

 ```css
.button-container { 
     &:hover { 
      }
     &.google-sign-in { 
     &:hover { 
    } 
 }
   &.inverted { 
         background-color: white; 
         color: black; 
         border: 1px solid black; 
     &:hover { 
         background-color: black; 
         color: white; 
         border: none; 
         }
```

In this format we see major styling of the button on the button-container but different styling on classes inside such as google sign-in.

Since these buttons inherit styles from the parent, I'll have a base button when I change it to styled components.

```js
export const GoogleSignInButton = styled(BaseButton)
```

I've extended the style from the BaseButton which is the parent.

In my button component, I have the object BUTTON_TYPE_CLASSES; 

```js
export const BUTTON_TYPE_CLASSES = {
    base: 'base',
    google: 'google-sign-in',
    inverted: 'inverted',
};
```

It defines three types of buttons, with key value pairs that allow me to specify different button styles easily across my application.

I've added this to my button component: 

```js
const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) => (
    {
        [BUTTON_TYPE_CLASSES.base]: BaseButton,
        [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
        [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
    }[buttonType]
);
```

`buttonType = BUTTON_TYPE_CLASSES.base`: If no button type is provided, it defaults to the base type.

The function uses an object to map each buttonType to its corresponding button component:

`BUTTON_TYPE_CLASSES.base` maps to BaseButton.

This approach allows me to maintain a clear, scalable, and maintainable button management system in my React application, enhancing both developer experience and code quality.

### Serverless functions 
These are a cloud computing execution model where the cloud provider dynamically manages the allocation and provisioning of servers.

#### Key features include:
Event-Driven Execution: Functions are triggered by events (HTTP requests, database changes, file uploads, etc.).

Scalability: Automatically scales with the number of requests.

Cost Efficiency: You only pay for the compute time you consume.

Stateless: Each invocation of the function is independent of others

### Popular Serverless Platforms
Netlify Functions, AWS Lambda, Google Cloud Functions, Azure Functions, 

Stripe is a technology company that builds economic infrastructure for the internet. 

It offers payment processing software and APIs for e-commerce websites and mobile applications to handle online payments, manage subscriptions, and more.

I'll use Stripe in test mode. 

There are two keys; a publishable key and a secret key.

`npm install @stripe/stripe-js`

This is the js library that allows us to make payments

`npm install @stripe/react-stripe-js`

This is the react library that gives us React elements and bindings to interact with js environment

The <Elements> component acts as a context provider for Stripe, making the Stripe object available to the rest of my application. 

This ensures that I can use Stripe’s API methods in your components.

### Setting up my PaymentForm
I created a PaymentForm component and imported it to my checkout form component

I created custom hooks useStripe and useElements

When developing applications with Stripe, Payment Intents are crucial for handling complex payment flows, especially those that require multiple steps or actions, such as handling authentication or redirects for certain types of payment methods

On the frontend, use Stripe.js and Elements to collect the customer's payment information securely.
Example: 
```js
const stripe = Stripe('your_public_key');
const elements = stripe.elements();
const cardElement = elements.create('card');
cardElement.mount('#card-element');
```

### How do I make a stripe payment intent with netlify function?
Creating a Stripe Payment Intent using Netlify Functions involves setting up a serverless function that handles the creation of the Payment Intent on the server side.

The dotenv package is used to handle environment variables securely.

This allows us to store sensitive information like API keys outside of our codebase.

const paymentIntent = await stripe.paymentIntents.create({ ... });: This line creates a new Payment Intent using the Stripe API. The create method is called with an object containing:
amount: The amount to be charged, obtained from the request body.
currency: The currency in which the amount is specified. Here, it is set to 'ksh' (Kenyan Shilling).
payment_method_types: An array specifying the types of payment methods allowed. Here, it is set to ['card'].

### Netlify CLI
The Netlify CLI (Command Line Interface) is a tool that allows developers to interact with Netlify services directly from the command line.

It can be used to deploy sites, manage functions, and configure site settings without needing to go through the Netlify web interface.

Netlify works with functions as if they are endpoints.

I ran:
`npm install -g netlify-cli`

Netlify works with functions as if they are API endpoints.

- 4242 4242 4242 4242 - test card

- any date in the future for the MM/YY

- For the CVC any figure will do.

When we now click we get a successful payment alert and I can confirm it in my stripe website dashboard on 'developer'.

I finished by deploying on Netlify and adding environment variables to it:

https://quest-szn.netlify.app/






































