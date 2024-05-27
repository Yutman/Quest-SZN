import { useState } from 'react';
import FormInput from '../form-input/form-input.component';

import { 
    createAuthUserWithEmailAndPassword, 
    createUserDocumentFromAuth 
} from '../../utils/firebase/firebase.utils';

import './sign-up-form.styles.scss';
import Button from '../button/button.component';

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
} // setting an object, but only when that object is always going to be tied together to some specific logic

const SignUpForm = () => { 
    const[formFields, setFormFields] = useState(defaultFormFields);
    const {displayName, email, password, confirmPassword} = formFields; // destructure form fields

    console.log(formFields);

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    const handleSubmit = async (event) => {
        event.preventDefault(); // prevent the default form submission
        if(password !== confirmPassword) {
            alert("Passwords don't match");
            return;
        } // check if passwords match

        try {
            const {user} = await createAuthUserWithEmailAndPassword(
                email, 
                password
            );

            await createUserDocumentFromAuth(user, {displayName});
            resetFormFields();    
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert('Email already in use');
            } else {
            console.log('user creation encountered an error', error);
            }
        } // try catch block to handle errors
        // create a user document in the database
    }

    const handleChange = (event) => {
            const {name, value} = event.target;

            setFormFields({...formFields, [name]: value});
    }; // form field change handler

    return (
        <div className='sign-up-container'>
            <h2>Don't have an account?</h2>
            <span>Sign up with email and password</span>
            <form onSubmit={handleSubmit}>
                
                <FormInput
                    label='Display Name'
                    type='text' 
                    required 
                    onChange={handleChange} 
                    name='displayName' 
                    value={displayName}/>

                <FormInput
                    label='Email'
                    type='email' 
                    required 
                    onChange={handleChange} 
                    name='email' 
                    value={email}/>

                <FormInput
                    label='Password'
                    type='password' 
                    required 
                    onChange={handleChange} 
                    name='password' 
                    value={password}/>

                <FormInput
                    label='Confirm Password'
                    type='password'
                    required 
                    onChange={handleChange} 
                    name='confirmPassword' 
                    value={confirmPassword}/>
                <Button buttonType='default' type='submit'>Sign Up</Button>
            </form>
         </div>
    )
}

export default SignUpForm;
