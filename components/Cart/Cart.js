import React,{useContext} from "react";
import  ReactDOM  from "react-dom";
import Card from "../UI/Card";
import classes from './Cart.module.css';
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";

const Cart=props=>
{ 
  const ctx=useContext(CartContext);
  let totalamount=0;
  
  
  const cartItems=(<ul className={classes['cart-items']}>
    { ctx.items.map((item)=>
    ( 
     <li>Name:{item.name}     Price:{item.price} Quantity:{item.quantity}</li>
    ))}
    </ul> 
  )
  ctx.items.forEach(item => {
    totalamount=Math.round(totalamount+(item.price*item.quantity));
  });

return (
        <Modal onClose={props.onClose}>
        {cartItems} 
      <div className={classes.total}>
       <span>Total Amount</span>
       <span>{totalamount}</span>
      </div>
      <div className={classes.actions}>
       <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
       <button className={classes.button}>Order</button>
      </div>
      </Modal> 
    )
     
}

export default Cart;

