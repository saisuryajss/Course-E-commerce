import React from 'react';
import { useSelector } from 'react-redux';
import './Checkout.css';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cartSelectors';
import CheckoutItem from '../../components/checkout-item/CheckoutItem';
import StripeCheckoutButton from '../../components/stripeCheckoutButton/StripeCheckout';


function Checkout() {
    const cartItems=useSelector(selectCartItems);
    const total=useSelector(selectCartTotal);
    return <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map((cartItem) => <CheckoutItem key={cartItem.id} cartItem={cartItem} />)
        }
        {
            <div className='total-value'>
                Total:{'$' + total}
            </div>
        }
        <div className='payment-block'>
            <div className='payment-card-details'>
                <span>Use the following details for payment</span>
                <br />
                <span>card no:4242 4242 4242 4242 expiry:01/24 cvv:123</span>
            </div>
            <StripeCheckoutButton price={total} />
        </div>
    </div>
}

export default Checkout;