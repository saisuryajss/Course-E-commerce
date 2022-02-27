import React, { useState } from 'react';
import './SignUp.css';
import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';


function SignUp() {
    let [credentials, SetCredentials] = useState({
        userName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    function handleChange(event) {
        const { name, type, value } = event.target;
        SetCredentials((prevValues) => {
            if (type === 'text') {
                return {
                    userName: value,
                    email: prevValues.email,
                    password: prevValues.password,
                    confirmPassword: prevValues.confirmPassword
                };
            }
            else if(type==='email'){
                return {
                    userName: prevValues.userName,
                    email: value,
                    password: prevValues.password,
                    confirmPassword: prevValues.confirmPassword
                };
            }
            else if(type==='password'&&name==='password'){
                return {
                    userName: prevValues.userName,
                    email: prevValues.email,
                    password: value,
                    confirmPassword: prevValues.confirmPassword
                };
            }
            else if(type==='password'&&name==='confirmPassword'){
                return {
                    userName: prevValues.userName,
                    email: prevValues.email,
                    password: prevValues.password,
                    confirmPassword: value
                };
            }
        })

    }

    function handleSubmit(event) {
        event.preventDefault();
        SetCredentials({
            userName: '',
            email: '',
            password: '',
            confirmPassword: ''
        });
    }
    return (
        <div className='signup'>
            <h1>I don't have an account</h1>
            <h3>Sign up with your email and password.</h3>
            <form onSubmit={handleSubmit}>
                <FormInput label={'Display Name'} type='text' value={credentials.userName} handleChange={handleChange} />
                <FormInput label={'Email'} type={'email'} value={credentials.email} handleChange={handleChange} />
                <FormInput name={'password'} label={'Password'} type={'password'} value={credentials.password} handleChange={handleChange} />
                <FormInput name={'confirmPassword'} label={'Confirm password'} type={'password'} value={credentials.confirmPassword} handleChange={handleChange} />
                <CustomButton type={'submit'} size={'button-medium'} > SIGN UP </CustomButton>
            </form>
        </div>
    );
}

export default SignUp;