import { initializeApp } from 'firebase/app';
import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider 
} from 'firebase/auth'; 


const firebaseConfig = {
  apiKey: "AIzaSyAgzPIOQEBSOE79uQwRmV7U4Mh6W4PhXWU",
  authDomain: "quest-technologies-db.firebaseapp.com",
  projectId: "quest-technologies-db",
  storageBucket: "quest-technologies-db.appspot.com",
  messagingSenderId: "111317873205",
  appId: "1:111317873205:web:150f99fabb7c1a9e5e777c"
}; // My web app's Firebase configuration

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider(); // Google authentication provider is essentially a class that we get from firebase authentication


provider.setCustomParameters({ 
        prompt: 'select_account' 
}); // always trigger the google popup whenever we use the google auth provider for authentication and sign in

export const auth = getAuth();
export const signInwithGooglePopup = () => signInWithPopup(auth, provider);