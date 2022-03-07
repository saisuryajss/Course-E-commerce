import React from 'react';
import './CheckoutItem.css';
import {clearItem,addItem,decrementItem} from '../../redux/cart/cartActions';
import { connect } from 'react-redux';

function CheckoutItem({cartItem,clearCartItem,increaseQuantity,decreaseQuantity}){
   const {imageUrl,name,quantity,price}=cartItem;
   return (
       <div className='checkout-item'>
           <div className='checkout-image'>
              <img src={imageUrl} alt={`${name}`} />
           </div>
           <span className='checkout-field'>{name}</span>
           <span className='checkout-field'>
              <div className='arrow' onClick={()=> decreaseQuantity(cartItem)} >&#10094;</div>
              <span className='value'>{quantity}</span>
              <div className='arrow' onClick={()=> increaseQuantity(cartItem)}>&#10095;</div>
           </span>
           <span className='checkout-field'>{price}</span>
           <div className='checkout-field remove-symbol' readOnly onClick={()=>clearCartItem(cartItem)}>
              &#10005;
           </div>
       </div>
   );
}

const mapDispatchToProps=(dispatch)=>({
   clearCartItem:item=>dispatch(clearItem(item)),
   increaseQuantity:item=>dispatch(addItem(item)),
   decreaseQuantity:item=>dispatch(decrementItem(item))
})


export default connect(null,mapDispatchToProps)(CheckoutItem);