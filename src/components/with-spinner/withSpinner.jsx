import React from 'react';
import { SpinnerContainer, SpinnerOverlay } from './withSpinnerStyles';

export const WithSpinner=WrappedComponent=>{
    console.log('inside wrapped component');
    const Spinner=({isLoading,...otherProps})=>{
    return isLoading ?(
        <SpinnerOverlay>
            <SpinnerContainer />
        </SpinnerOverlay>
    ):(
        <WrappedComponent {...otherProps} />
    );
}
return Spinner;
};