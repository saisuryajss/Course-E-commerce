import React from 'react';
import CustomButton from '../custom-button/CustomButton';
import './CartDropdown.css';

const CartDropdown=()=>{
    return (<div className='cart-dropdown'>
    <div className='cart-items' />
    <div className='button-container'>
    <CustomButton size='button-medium' type='button' > GO TO CHECKOUT </CustomButton>
    </div>
    
</div>);
}

export default CartDropdown;