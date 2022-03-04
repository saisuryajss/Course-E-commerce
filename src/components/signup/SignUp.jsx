import React, {  useState } from 'react';
import './SignUp.css';
import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';
import { auth, createUserProfileDocument } from '../../firebase/firebase';

function SignUp() {
    let [credentials, SetCredentials] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    function handleChange(event) {
        const { name, value } = event.target;
        SetCredentials((prevValues) => {
            return {
                ...prevValues,
                [name]: value,
            };
        });
    }

    const handleSubmit=async(event)=>{
        event.preventDefault()
        const { displayName, email, password, confirmPassword } = credentials;
        if (password !== confirmPassword) {
            alert("Passwords don't match");
            return;
        }
        try {
            const { user } = await  auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, { displayName });
            SetCredentials({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });
        }
        catch (error) {
            console.log(error);
        }
    }
    
    return (
        <div className='signup'>
            <h1>I don't have an account</h1>
            <h3>Sign up with your email and password.</h3>
            <form onSubmit={handleSubmit}>
                <FormInput name='displayName' label='Display Name' type='text' value={credentials.displayName} handleChange={handleChange} />
                <FormInput name='email' label='Email' type='email' value={credentials.email} handleChange={handleChange} />
                <FormInput name='password' label='Password' type='password' value={credentials.password} handleChange={handleChange} />
                <FormInput name='confirmPassword' label='Confirm password' type='password' value={credentials.confirmPassword} handleChange={handleChange} />
                <div className='signup-options'>
                <CustomButton type={'submit'} size={'button-medium'} > SIGN UP </CustomButton>
                </div>
            </form>
        </div>
    );
}

export default SignUp;