import React from 'react';
import StripeCheckout from 'react-stripe-checkout';


function StripeCheckoutButton({price}){
  const onToken=(token)=>{
      console.log(token);
      alert('Payment Successful');
  }
  const publishableKey='pk_test_51KcWYpSIq3Xfn1LT0yHqZI1Ytvvr8xvsUQP8WIP3MH0LthmXj2e5AM2kjSHrsZGEOJi6vzWG6zWy3liFq8mpPNf100MrZEjtCE';
  return <StripeCheckout 
   label='Pay Now'
   name='E-commerce App'
   billingAddress
   shippingAddress  
   description={`Your total is $${price}`}
   amount={price*100}
   panelLabel='Pay Now'
   token={onToken}
   stripeKey={publishableKey}
  />
}

export default StripeCheckoutButton;